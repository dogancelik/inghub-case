import {LitElement, html} from 'lit';
import { globalCss } from '../utils/global-css.js';
import {localizationService, t} from '../services/localization-service.js';
import {employeeStore} from '../state/employee-store.js';

import './delete-dialog.js';
import './employee-list.js';
import './employee-table.js';

export class EmployeeListContainer extends LitElement {
  static properties = {
    view: {type: String},
    employees: {type: Array},
    search: {type: String},
    page: {type: Number},
    pageSize: {type: Number},
    total: {type: Number},
    checkedEmployees: {type: Object},
  };

  static styles = globalCss`
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
    .pagination {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      gap: 8px;
      align-items: center;
    }
    .pagination button {
      background: none;
      border: none;
      color: var(--primary-color);
      font-size: 18px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
    .pagination button.selected {
      background: var(--primary-color);
      color: #fff;
      font-weight: bold;
    }
    .pagination span {
      font-size: 20px;
      padding: 0 4px;
      color: #888;
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
    let pageSize = this.pageSize;
    if (this.view === 'list') {
      pageSize = 4;
    } else {
      pageSize = 10;
    }
    const start = (this.page - 1) * pageSize;
    this.employees = all.slice(start, start + pageSize);
    // Remove checked employees that are not in the current page
    const currentIds = new window.Set(this.employees.map((e) => e.id));
    this.checkedEmployees = new window.Set(
      [...this.checkedEmployees].filter((id) => currentIds.has(id))
    );
  }

  _onSearch(e) {
    this.search = e.target.value;
    this.page = 1;
    this._updateList();
  }

  _changeView(view) {
    this.view = view;
    this.page = 1;
    this._updateList();
  }

  _goTo(page) {
    this.page = page;
    this._updateList();
  }

  _edit(id) {
    window.history.pushState({}, '', `/employees/edit/${id}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  _showDeleteDialog(id) {
    const employee = this.employees.find((e) => e.id === id);
    this._deleteDialogEmployee = employee;
    this._deleteDialogOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      this.shadowRoot.getElementById('delete-dialog').showModal();
    });
  }

  _closeDeleteDialog() {
    this._deleteDialogOpen = false;
    this._deleteDialogEmployee = null;
    this.requestUpdate();
    const dialog = this.shadowRoot.getElementById('delete-dialog');
    if (dialog && dialog.open) dialog.close();
  }

  _confirmDeleteDialog() {
    if (this._deleteDialogEmployee) {
      employeeStore.delete(this._deleteDialogEmployee.id);
    }
    this._closeDeleteDialog();
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
    const currentIds = this.employees.map((e) => e.id);
    if (checked) {
      // Add all current page ids
      this.checkedEmployees = new window.Set([
        ...this.checkedEmployees,
        ...currentIds,
      ]);
    } else {
      // Remove all current page ids
      this.checkedEmployees = new window.Set(
        [...this.checkedEmployees].filter((id) => !currentIds.includes(id))
      );
    }
  }

  render() {
    const dialogEmployee = this._deleteDialogEmployee;
    return html`
      <route-header title="employeeList">
        <div class="toolbar">
          <div class="view-toggle">
            <button
              ?selected=${this.view === 'table'}
              @click=${() => this._changeView('table')}
            >
              <svg-icon size="100%" name="bars"></svg-icon>
            </button>
            <button
              ?selected=${this.view === 'list'}
              @click=${() => this._changeView('list')}
            >
              <svg-icon size="100%" name="table-cells"></svg-icon>
            </button>
          </div>
        </div>
      </route-header>

      ${this.view === 'table' ? this._renderTable() : this._renderList()}
      ${this._renderPagination()}

      <delete-dialog
        .open=${!!dialogEmployee}
        .firstName=${dialogEmployee ? dialogEmployee.firstName : ''}
        .lastName=${dialogEmployee ? dialogEmployee.lastName : ''}
        .onProceed=${this._confirmDeleteDialog.bind(this)}
        .onCancel=${this._closeDeleteDialog.bind(this)}
        .onClose=${this._closeDeleteDialog.bind(this)}
      ></delete-dialog>
    `;
  }

  _renderTable() {
    return html`
      <employee-table
        .employees=${this.employees}
        .checkedEmployees=${this.checkedEmployees}
        .onEdit=${this._edit.bind(this)}
        .onDelete=${this._showDeleteDialog.bind(this)}
        .onCheckEmployee=${this._onCheckEmployee.bind(this)}
        .onToggleAll=${this._onToggleAll.bind(this)}
      ></employee-table>
    `;
  }

  _renderList() {
    return html`
      <employee-list
        .employees=${this.employees}
        .checkedEmployees=${this.checkedEmployees}
        .onEdit=${this._edit.bind(this)}
        .onDelete=${this._showDeleteDialog.bind(this)}
        .onCheckEmployee=${this._onCheckEmployee.bind(this)}
      ></employee-list>
    `;
  }
  // Dialog styles removed, now in delete-dialog.js

  _renderPagination() {
    // Use correct page size for current view
    const pageSize = this.view === 'list' ? 4 : 10;
    if (this.total <= pageSize) return '';
    const totalPages = Math.ceil(this.total / pageSize);
    const page = this.page;
    let start = 1;
    let end = totalPages;
    // Always show 5 page numbers, center current page if possible
    if (totalPages <= 7) {
      start = 1;
      end = totalPages;
    } else if (page <= 3) {
      start = 1;
      end = 5;
    } else if (page >= totalPages - 2) {
      start = totalPages - 4;
      end = totalPages;
    } else {
      start = page - 2;
      end = page + 2;
    }
    // Clamp
    if (start < 1) start = 1;
    if (end > totalPages) end = totalPages;

    const pageButtons = [];
    for (let i = start; i <= end; i++) {
      pageButtons.push(html`
        <button
          class=${i === page ? 'selected' : ''}
          @click=${() => this._goTo(i)}
        >
          ${i}
        </button>
      `);
    }

    return html`
      <div class="pagination">
        <button
          ?disabled=${page === 1}
          @click=${() => this._goTo(page - 1)}
          title="${t('prev')}"
        >
          <svg-icon size="16px" name="chevron-left"></svg-icon>
        </button>
        ${start > 1
          ? html`<button
              @click=${() => this._goTo(1)}
              class=${page === 1 ? 'selected' : ''}
            >
              1
            </button>`
          : ''}
        ${start > 2 ? html`<span>&hellip;</span>` : ''} ${pageButtons}
        ${end < totalPages - 1 ? html`<span>&hellip;</span>` : ''}
        ${end < totalPages
          ? html`<button
              @click=${() => this._goTo(totalPages)}
              class=${page === totalPages ? 'selected' : ''}
            >
              ${totalPages}
            </button>`
          : ''}
        <button
          ?disabled=${page === totalPages}
          @click=${() => this._goTo(page + 1)}
          title="${t('next')}"
        >
          <svg-icon size="16px" name="chevron-right"></svg-icon>
        </button>
      </div>
    `;
  }
}

customElements.define('employee-list-container', EmployeeListContainer);
