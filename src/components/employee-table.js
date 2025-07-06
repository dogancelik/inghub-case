import {LitElement, html} from 'lit';
import { globalCss } from '../utils/global-css.js';
import {t} from '../services/localization-service.js';
import { formatDate, formatPhone } from '../utils/data-format.js';
import { BREAKPOINTS } from '../utils/breakpoints.js';

export class EmployeeTable extends LitElement {
  static properties = {
    employees: {type: Array, attribute: false},
    checkedEmployees: {type: Array, attribute: false},
    onEdit: {type: Function, attribute: false},
    onDelete: {type: Function, attribute: false},
    onCheckEmployee: {type: Function, attribute: false},
    onToggleAll: {type: Function, attribute: false},
  };

  static styles = globalCss`
    .table-scroll {
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      /* Hide scrollbar by default */
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .table-scroll::-webkit-scrollbar {
      display: none;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 700px;
    }
    tr:not(:last-child) {
      border-bottom: 1px solid var(--table-border-color);
    }
    th,
    td {
      text-align: center;
      background-color: #fff;
      &:not(:first-child) {
        min-width: 100px;
      }
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
      border: 2px solid var(--label-color);
      outline: none;
      cursor: pointer;
    }
    .actions button {
      color: var(--primary-color);
      border: none;
      background-color: transparent;
      padding: 7px;
      border-radius: 3px;
      cursor: pointer;
    }
    @media (min-width: ${BREAKPOINTS.table}px) {
      .table-scroll {
        overflow-x: visible !important;
        max-width: none !important;
      }
      table {
        min-width: 0;
      }
    }
  `;

  constructor() {
    super();
    this.employees = [];
    this.checkedEmployees = [];
    this.onEdit = () => {};
    this.onDelete = () => {};
    this.onCheckEmployee = () => {};
    this.onToggleAll = () => {};
  }

  renderTable() {
    if (!this.employees || !this.employees.length) return html`<p>${t('noResults')}</p>`;
    const currentIds = this.employees.map((e) => e.id);
    const allChecked =
      currentIds.length > 0 &&
      currentIds.every((id) => this.checkedEmployees.includes(id));
    const someChecked = currentIds.some((id) => this.checkedEmployees.includes(id));
    return html`
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                .checked=${allChecked}
                .indeterminate=${!allChecked && someChecked}
                @change=${this.onToggleAll}
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
                    .checked=${this.checkedEmployees.includes(e.id)}
                    @change=${(ev) => this.onCheckEmployee(ev, e.id)}
                  />
                </td>
                <td>${e.firstName}</td>
                <td>${e.lastName}</td>
                <td>${formatDate(e.dateOfEmployment)}</td>
                <td>${formatDate(e.dateOfBirth)}</td>
                <td>${formatPhone(e.phone)}</td>
                <td>${e.email}</td>
                <td>${t(e.department.toLowerCase())}</td>
                <td>${t(e.position.toLowerCase())}</td>
                <td class="actions">
                  <button class="edit" @click=${() => this.onEdit(e.id)}>
                    <svg-icon size="18px" name="pen-to-square"></svg-icon>
                  </button>
                  <button class="delete" @click=${() => this.onDelete(e.id)}>
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

  render() {
    return html` <div class="table-scroll">${this.renderTable()}</div> `;
  }
}

customElements.define('employee-table', EmployeeTable);
