import {LitElement, html, css} from 'lit';
import {t} from '../services/localization-service.js';
import {formatDate} from '../services/time-service.js';

export class EmployeeList extends LitElement {
  static properties = {
    employees: {type: Array, attribute: false},
    checkedEmployees: {type: Object, attribute: false},
    onEdit: {type: Function, attribute: false},
    onDelete: {type: Function, attribute: false},
    onCheckEmployee: {type: Function, attribute: false},
  };

  static styles = css`
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
  `;

  constructor() {
    super();
    this.employees = [];
    this.checkedEmployees = new window.Set();
    this.onEdit = () => {};
    this.onDelete = () => {};
    this.onCheckEmployee = () => {};
  }

  render() {
    if (!this.employees.length) return html`<p>${t('noResults')}</p>`;
    return html`
      <ul class="list-mode">
        ${this.employees.map(
          (e) => html`
            <li class="list-item">
              <div><b>${t('firstName')}:</b> ${e.firstName}</div>
              <div><b>${t('lastName')}:</b> ${e.lastName}</div>
              <div>
                <b>${t('dateOfEmployment')}:</b> ${formatDate(
                  e.dateOfEmployment
                )}
              </div>
              <div>
                <b>${t('dateOfBirth')}:</b> ${formatDate(e.dateOfBirth)}
              </div>
              <div><b>${t('phone')}:</b> ${e.phone}</div>
              <div><b>${t('email')}:</b> ${e.email}</div>
              <div>
                <b>${t('department')}:</b> ${t(e.department.toLowerCase())}
              </div>
              <div><b>${t('position')}:</b> ${t(e.position.toLowerCase())}</div>
              <div class="actions">
                <button class="edit" @click=${() => this.onEdit(e.id)}>
                  <svg-icon size="14px" name="pen-to-square"></svg-icon>
                  ${t('edit')}
                </button>
                <button
                  class="delete"
                  @click=${() => this.onDelete(e.id)}
                >
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
}

customElements.define('employee-list', EmployeeList);
