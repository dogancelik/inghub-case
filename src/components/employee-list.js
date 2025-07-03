import { LitElement, html, css } from 'lit';
import { t } from '../localization/i18n.js';
import { employeeStore } from '../state/employee-store.js';

export class EmployeeList extends LitElement {
  static properties = {
    view: { type: String },
    employees: { type: Array },
    search: { type: String },
    page: { type: Number },
    pageSize: { type: Number },
    total: { type: Number },
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
      background: #333;
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
    .view-toggle button[selected] {
      background: #00bcd4;
      color: #222;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background: #222;
    }
    th, td {
      border: 1px solid #333;
      padding: 0.5rem;
      text-align: left;
    }
    th {
      background: #181818;
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
    @media (max-width: 700px) {
      table, thead, tbody, th, td, tr {
        display: block;
      }
      th, td {
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
    this.unsubscribe = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.unsubscribe = employeeStore.subscribe(() => this._updateList());
    this._updateList();
  }
  disconnectedCallback() {
    if (this.unsubscribe) this.unsubscribe();
    super.disconnectedCallback();
  }

  _updateList() {
    let all = employeeStore.getAll();
    if (this.search) {
      const s = this.search.toLowerCase();
      all = all.filter(e =>
        e.firstName.toLowerCase().includes(s) ||
        e.lastName.toLowerCase().includes(s) ||
        e.department.toLowerCase().includes(s) ||
        e.position.toLowerCase().includes(s)
      );
    }
    this.total = all.length;
    const start = (this.page - 1) * this.pageSize;
    this.employees = all.slice(start, start + this.pageSize);
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

  render() {
    return html`
      <div class="toolbar">
        <input type="text" placeholder="${t('search')}..." @input=${this._onSearch.bind(this)} />
        <div class="view-toggle">
          <button ?selected=${this.view==='table'} @click=${() => this._changeView('table')}>${t('table')}</button>
          <button ?selected=${this.view==='list'} @click=${() => this._changeView('list')}>${t('list')}</button>
        </div>
      </div>
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
            <th>${t('firstName')}</th>
            <th>${t('lastName')}</th>
            <th>${t('department')}</th>
            <th>${t('position')}</th>
            <th>${t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          ${this.employees.map(e => html`
            <tr>
              <td>${e.firstName}</td>
              <td>${e.lastName}</td>
              <td>${t(e.department.toLowerCase())}</td>
              <td>${t(e.position.toLowerCase())}</td>
              <td class="actions">
                <button class="edit" @click=${() => this._edit(e.id)}>${t('edit')}</button>
                <button class="delete" @click=${() => this._delete(e.id)}>${t('delete')}</button>
              </td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }

  _renderList() {
    if (!this.employees.length) return html`<p>${t('noResults')}</p>`;
    return html`
      <ul>
        ${this.employees.map(e => html`
          <li style="margin-bottom:1rem; background:#181818; padding:1rem; border-radius:6px;">
            <b>${e.firstName} ${e.lastName}</b> - ${t(e.department.toLowerCase())}, ${t(e.position.toLowerCase())}
            <div style="margin-top:0.5rem;">
              <button class="edit" @click=${() => this._edit(e.id)}>${t('edit')}</button>
              <button class="delete" @click=${() => this._delete(e.id)}>${t('delete')}</button>
            </div>
          </li>
        `)}
      </ul>
    `;
  }

  _renderPagination() {
    if (this.total <= this.pageSize) return '';
    const totalPages = Math.ceil(this.total / this.pageSize);
    return html`
      <div class="pagination">
        <button ?disabled=${this.page===1} @click=${() => this._goTo(this.page-1)}>${t('prev')}</button>
        <span>${t('page')} ${this.page} ${t('of')} ${totalPages}</span>
        <button ?disabled=${this.page===totalPages} @click=${() => this._goTo(this.page+1)}>${t('next')}</button>
      </div>
    `;
  }
}

customElements.define('employee-list', EmployeeList);
