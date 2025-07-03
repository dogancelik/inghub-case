import {LitElement, html, css} from 'lit';
import {localizationService, t} from '../services/localization-service.js';
import {employeeStore} from '../state/employee-store.js';
import {formatDate} from '../services/time-service.js';

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
    .view-toggle {
      display: flex;
      align-items: center;
      gap: 21px;
    }
    .view-toggle button {
      margin-left: 0.5rem;
      color: var(--primary-color);
      border: none;
      background-color: transparent;
      padding: 0;
      height: 26px;
      width: 26px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      opacity: 0.7;
      transition: opacity 0.2s;
    }
    .view-toggle button[selected] {
      opacity: 1;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    tr:not(:last-child) {
      border-bottom: 1px solid var(--table-border-color);
    }
    th,
    td {
      text-align: center;
      background-color: #fff;
    }
    th {
      height: 76px;
      color: var(--primary-color);
      font-size: 14px;
      font-weight: 500;
    }
    td {
      height: 87px;
    }
    input[type='checkbox'] {
      width: 20px;
      height: 20px;
      border-radius: 6px;
      vertical-align: middle;
      border: 2px solid var(--label-color);
      appearance: none;
      -webkit-appearance: none;
      outline: none;
      cursor: pointer;
      &:checked {
        appearance: auto;
        /* For a 25px box, a 12.5px radius circle is centered at 50% 50% */
        clip-path: circle(12px at 50% 50%);
        background-color: blue;
      }
    }
    .actions button {
      color: var(--primary-color);
      border: none;
      background-color: transparent;
      padding: 7px;
      border-radius: 3px;
      cursor: pointer;
    }
    .pagination {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    .list-mode {
      display: grid;
      grid-template-columns: repeat(2, 433px);
      grid-template-rows: repeat(2, auto);
      column-gap: 110px;
      row-gap: 37px;
      justify-content: center;
    }
    .list-item {
      display: flex;
      flex-wrap: wrap;
      box-shadow: 0 2px 8px #0003;
      border-radius: 6px;
      background: #fff;
      padding: 24px 17px;
      width: 433px;
      row-gap: 30px;
      box-sizing: border-box;
      margin: 0;
    }
    .list-item > div {
      flex-basis: 50%;
      font-size: 16px;
    }
    .list-item b {
      display: block;
      color: var(--label-color);
      font-size: 14px;
      font-weight: 400;
    }
    .list-item .actions {
      flex-basis: 100%;
      display: flex;
      gap: 12px;
      justify-content: flex-start;
    }
    .list-item .edit {
      background: var(--secondary-color);
      color: #fff;
      border: none;
      padding: 8px 18px;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .list-item .delete {
      background: var(--primary-color);
      color: #fff;
      border: none;
      padding: 8px 18px;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
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

  _onToggleAll(e) {
    const checked = e.target.checked;
    const currentIds = this.employees.map(e => e.id);
    if (checked) {
      // Add all current page ids
      this.checkedEmployees = new window.Set([
        ...this.checkedEmployees,
        ...currentIds
      ]);
    } else {
      // Remove all current page ids
      this.checkedEmployees = new window.Set(
        [...this.checkedEmployees].filter(id => !currentIds.includes(id))
      );
    }
  }

  render() {
    return html`
      <route-header title="employeeList">
        <div class="toolbar">
          <div class="view-toggle">
            <button ?selected=${this.view === 'table'} @click=${() => this._changeView('table')}>
              <svg-icon size="100%" name="bars"></svg-icon>
            </button>
            <button ?selected=${this.view === 'list'} @click=${() => this._changeView('list')}>
              <svg-icon size="100%" name="table-cells"></svg-icon>
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
    // Determine if all current page employees are checked
    const currentIds = this.employees.map(e => e.id);
    const allChecked = currentIds.length > 0 && currentIds.every(id => this.checkedEmployees.has(id));
    const someChecked = currentIds.some(id => this.checkedEmployees.has(id));
    return html`
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                .checked=${allChecked}
                .indeterminate=${!allChecked && someChecked}
                @change=${this._onToggleAll.bind(this)}
                title="${allChecked ? t('unselectAll') : t('selectAll')}"
              />
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
                <td>${formatDate(e.dateOfEmployment)}</td>
                <td>${formatDate(e.dateOfBirth)}</td>
                <td>${e.phone}</td>
                <td>${e.email}</td>
                <td>${t(e.department.toLowerCase())}</td>
                <td>${t(e.position.toLowerCase())}</td>
                <td class="actions">
                  <button class="edit" @click=${() => this._edit(e.id)}>
                    <svg-icon size="18px" name="pen-to-square"></svg-icon>
                  </button>
                  <button class="delete" @click=${() => this._delete(e.id)}>
                    <svg-icon size="18px" name="trash"></svg-icon>
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
      <ul class="list-mode">
        ${this.employees.map(
          (e) => html`
            <li class="list-item">
              <div><b>${t('firstName')}:</b> ${e.firstName}</div>
              <div><b>${t('lastName')}:</b> ${e.lastName}</div>
              <div><b>${t('dateOfEmployment')}:</b> ${formatDate(e.dateOfEmployment)}</div>
              <div><b>${t('dateOfBirth')}:</b> ${formatDate(e.dateOfBirth)}</div>
              <div><b>${t('phone')}:</b> ${e.phone}</div>
              <div><b>${t('email')}:</b> ${e.email}</div>
              <div>
                <b>${t('department')}:</b> ${t(e.department.toLowerCase())}
              </div>
              <div><b>${t('position')}:</b> ${t(e.position.toLowerCase())}</div>
              <div class="actions">
                <button class="edit" @click=${() => this._edit(e.id)}>
                  <svg-icon size="14px" name="pen-to-square"></svg-icon>
                  ${t('edit')}
                </button>
                <button class="delete" @click=${() => this._delete(e.id)}>
                  <svg-icon size="14px" name="trash"></svg-icon>
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
