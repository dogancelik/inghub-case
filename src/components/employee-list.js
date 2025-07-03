import {LitElement, html, css} from 'lit';
import {localizationService, t} from '../services/localization-service.js';
import {employeeStore} from '../state/employee-store.js';

export class EmployeeList extends LitElement {
  static properties = {
    view: {type: String},
    employees: {type: Array},
    search: {type: String},
    page: {type: Number},
    pageSize: {type: Number},
    total: {type: Number},
    checkedEmployees: {type: Object},
  };

  static styles = css`
    .toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }
    .view-toggle button {
      margin-left: 0.5rem;
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
    .view-toggle button[selected] {
      color: var(--primary-color);
      background-color: transparent;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th,
    td {
      padding: 0.5rem;
      text-align: left;
      background-color: #fff;
    }
    th {
    }
    tr:not(:last-child) {
      border-bottom: 1px solid var(--table-border-color);
    }
    .actions button {
      margin-right: 0.5rem;
      background: #444;
      color: #fff;
      border: none;
      padding: 0.3rem 0.7rem;
      border-radius: 3px;
      cursor: pointer;
    }
    .actions button.edit {
      background: #00bcd4;
      color: #222;
    }
    .actions button.delete {
      background: #e53935;
      color: #fff;
    }
    .pagination {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    .list-item {
      margin-bottom: 1rem;
      padding: 1rem;
      border-radius: 6px;
    }
    .list-item .actions {
      margin-top: 0.5rem;
    }
    @media (max-width: 700px) {
      table,
      thead,
      tbody,
      th,
      td,
      tr {
        display: block;
      }
      th,
      td {
        border: none;
        padding: 0.5rem 0;
      }
      th {
        background: none;
      }
    }
  `;

  constructor() {
    super();
    this.view = 'table';
    this.employees = [];
    this.search = '';
    this.page = 1;
    this.pageSize = 10;
    this.total = 0;
    this.checkedEmployees = new window.Set();
    this.unsubscribe = null;
    this._onLocaleChanged = () => this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();
    this.unsubscribe = employeeStore.subscribe(() => this._updateList());
    this._updateList();
    localizationService.onLocaleChanged(this._onLocaleChanged);
  }
  disconnectedCallback() {
    if (this.unsubscribe) this.unsubscribe();
    localizationService.offLocaleChanged(this._onLocaleChanged);
    super.disconnectedCallback();
  }

  _updateList() {
    let all = employeeStore.getAll();
    if (this.search) {
      const s = this.search.toLowerCase();
      all = all.filter(
        (e) =>
          e.firstName.toLowerCase().includes(s) ||
          e.lastName.toLowerCase().includes(s) ||
          e.department.toLowerCase().includes(s) ||
          e.position.toLowerCase().includes(s)
      );
    }
    this.total = all.length;
    const start = (this.page - 1) * this.pageSize;
    this.employees = all.slice(start, start + this.pageSize);
    // Remove checked employees that are not in the current page
    const currentIds = new window.Set(this.employees.map(e => e.id));
    this.checkedEmployees = new window.Set([...this.checkedEmployees].filter(id => currentIds.has(id)));
  }

  _onSearch(e) {
    this.search = e.target.value;
    this.page = 1;
    this._updateList();
  }

  _changeView(view) {
    this.view = view;
  }

  _goTo(page) {
    this.page = page;
    this._updateList();
  }

  _edit(id) {
    window.history.pushState({}, '', `/employees/edit/${id}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  _delete(id) {
    if (confirm(t('confirmDelete'))) {
      employeeStore.delete(id);
    }
  }

  _onCheckEmployee(e, id) {
    const checked = e.target.checked;
    const newSet = new window.Set(this.checkedEmployees);
    if (checked) {
      newSet.add(id);
    } else {
      newSet.delete(id);
    }
    this.checkedEmployees = newSet;
  }

  render() {
    return html`
      <route-header title="employeeList">
        <div class="toolbar">
          <div class="view-toggle">
            <button ?selected=${this.view === 'table'} @click=${() => this._changeView('table')}>
              ${t('table')}
            </button>
            <button ?selected=${this.view === 'list'} @click=${() => this._changeView('list')}>
              ${t('list')}
            </button>
          </div>
        </div>
      </route-header>

      ${this.view === 'table' ? this._renderTable() : this._renderList()}
      ${this._renderPagination()}
    `;
  }

  _renderTable() {
    if (!this.employees.length) return html`<p>${t('noResults')}</p>`;
    return html`
      <table>
        <thead>
          <tr>
            <th>
              <!-- Empty header for checkboxes -->
            </th>
            <th>${t('firstName')}</th>
            <th>${t('lastName')}</th>
            <th>${t('dateOfEmployment')}</th>
            <th>${t('dateOfBirth')}</th>
            <th>${t('phone')}</th>
            <th>${t('email')}</th>
            <th>${t('department')}</th>
            <th>${t('position')}</th>
            <th>${t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          ${this.employees.map(
            (e) => html`
              <tr>
                <td>
                  <input
                    type="checkbox"
                    .checked=${this.checkedEmployees.has(e.id)}
                    @change=${ev => this._onCheckEmployee(ev, e.id)}
                  />
                </td>
                <td>${e.firstName}</td>
                <td>${e.lastName}</td>
                <td>${e.dateOfEmployment}</td>
                <td>${e.dateOfBirth}</td>
                <td>${e.phone}</td>
                <td>${e.email}</td>
                <td>${t(e.department.toLowerCase())}</td>
                <td>${t(e.position.toLowerCase())}</td>
                <td class="actions">
                  <button class="edit" @click=${() => this._edit(e.id)}>
                    ${t('edit')}
                  </button>
                  <button class="delete" @click=${() => this._delete(e.id)}>
                    ${t('delete')}
                  </button>
                </td>
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }

  _renderList() {
    if (!this.employees.length) return html`<p>${t('noResults')}</p>`;
    return html`
      <ul>
        ${this.employees.map(
          (e) => html`
            <li class="list-item">
              <input
                type="checkbox"
                .checked=${this.checkedEmployees.has(e.id)}
                @change=${ev => this._onCheckEmployee(ev, e.id)}
                style="margin-right: 0.5rem;"
              />
              <div><b>${t('firstName')}:</b> ${e.firstName}</div>
              <div><b>${t('lastName')}:</b> ${e.lastName}</div>
              <div><b>${t('dateOfEmployment')}:</b> ${e.dateOfEmployment}</div>
              <div><b>${t('dateOfBirth')}:</b> ${e.dateOfBirth}</div>
              <div><b>${t('phone')}:</b> ${e.phone}</div>
              <div><b>${t('email')}:</b> ${e.email}</div>
              <div>
                <b>${t('department')}:</b> ${t(e.department.toLowerCase())}
              </div>
              <div><b>${t('position')}:</b> ${t(e.position.toLowerCase())}</div>
              <div class="actions">
                <button class="edit" @click=${() => this._edit(e.id)}>
                  ${t('edit')}
                </button>
                <button class="delete" @click=${() => this._delete(e.id)}>
                  ${t('delete')}
                </button>
              </div>
            </li>
          `
        )}
      </ul>
    `;
  }

  _renderPagination() {
    if (this.total <= this.pageSize) return '';
    const totalPages = Math.ceil(this.total / this.pageSize);
    return html`
      <div class="pagination">
        <button
          ?disabled=${this.page === 1}
          @click=${() => this._goTo(this.page - 1)}
        >
          ${t('prev')}
        </button>
        <span>${t('page')} ${this.page} ${t('of')} ${totalPages}</span>
        <button
          ?disabled=${this.page === totalPages}
          @click=${() => this._goTo(this.page + 1)}
        >
          ${t('next')}
        </button>
      </div>
    `;
  }
}

customElements.define('employee-list', EmployeeList);
