import {LitElement, html, css} from 'lit';
import {t} from '../services/localization-service.js';
import {formatDate} from '../services/time-service.js';

export class EmployeeTable extends LitElement {
  static properties = {
    employees: {type: Array, attribute: false},
    checkedEmployees: {type: Object, attribute: false},
    onEdit: {type: Function, attribute: false},
    onDelete: {type: Function, attribute: false},
    onCheckEmployee: {type: Function, attribute: false},
    onToggleAll: {type: Function, attribute: false},
  };

  static styles = css`
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
      /* checked state handled by browser */
    }
    .actions button {
      color: var(--primary-color);
      border: none;
      background-color: transparent;
      padding: 7px;
      border-radius: 3px;
      cursor: pointer;
    }
  `;

  constructor() {
    super();
    this.employees = [];
    this.checkedEmployees = new window.Set();
    this.onEdit = () => {};
    this.onDelete = () => {};
    this.onCheckEmployee = () => {};
    this.onToggleAll = () => {};
  }

  render() {
    if (!this.employees.length) return html`<p>${t('noResults')}</p>`;
    const currentIds = this.employees.map((e) => e.id);
    const allChecked =
      currentIds.length > 0 &&
      currentIds.every((id) => this.checkedEmployees.has(id));
    const someChecked = currentIds.some((id) => this.checkedEmployees.has(id));
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
                    .checked=${this.checkedEmployees.has(e.id)}
                    @change=${(ev) => this.onCheckEmployee(ev, e.id)}
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
                  <button class="edit" @click=${() => this.onEdit(e.id)}>
                    <svg-icon size="18px" name="pen-to-square"></svg-icon>
                  </button>
                  <button
                    class="delete"
                    @click=${() => this.onDelete(e.id)}
                  >
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
}

customElements.define('employee-table', EmployeeTable);
