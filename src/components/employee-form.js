import {LitElement, html, css} from 'lit';
import {localizationService, t} from '../services/localization-service.js';
import {employeeStore} from '../state/employee-store.js';

function emptyEmployee() {
  return {
    id: '',
    firstName: '',
    lastName: '',
    dateOfEmployment: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    department: 'Analytics',
    position: 'Junior',
  };
}

export class EmployeeForm extends LitElement {
  static properties = {
    employee: {type: Object},
    isEdit: {type: Boolean},
    errors: {type: Object},
  };

  static styles = css`
    h2 {
      color: var(--primary-color);
      margin-left: 52px;
    }
    form {
      min-height: 70vh;
      margin: 0 auto;
      background: #ffffff;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 0 8px #0001;
      display: flex;
      flex-direction: column;
    }
    .you-are-editing {
      min-height: 65px;
    }
    .you-are-editing p {
      margin: 0;
    }
    .fields {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 149px;
      row-gap: 59px;
      flex-basis: 85%;
      width: 85%;
      margin: 0 auto 82px auto;
    }
    .field {
      display: flex;
      flex-direction: column;
      margin-bottom: 0;
      /* Remove flex-basis and width for grid layout */
    }
    label {
      display: block;
      margin-bottom: 0.3rem;
      font-weight: 500;
      color: #363636;
    }
    input,
    select {
      width: var(--form-field-width);
      padding: 0.5rem;
      border: 1px solid #6f6f6f;
      border-radius: 4px;
      background-color: #fff;
    }
    .error {
      color: #e53935;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    .actions {
      flex-basis: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 66px;
    }
    button {
      width: var(--form-field-width);
      background: var(--primary-color);
      color: #fff;
      border: none;
      padding: 0.7rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
    }
    button.cancel {
      background: #fff;
      color: #525199;
      border: 1px solid #525199;
    }
  `;

  constructor() {
    super();
    this.employee = emptyEmployee();
    this.isEdit = false;
    this.errors = {};
  }

  connectedCallback() {
    super.connectedCallback();
    const match = window.location.pathname.match(/edit\/(.+)$/);
    if (match) {
      const emp = employeeStore.getById(match[1]);
      if (emp) {
        this.employee = {...emp};
        this.isEdit = true;
      }
    }
    this._onLocaleChanged = () => this.requestUpdate();
    localizationService.onLocaleChanged(this._onLocaleChanged);
  }

  disconnectedCallback() {
    localizationService.offLocaleChanged(this._onLocaleChanged);
    super.disconnectedCallback();
  }

  _onInput(e) {
    const {name, value} = e.target;
    this.employee = {...this.employee, [name]: value};
    this.errors = {...this.errors, [name]: undefined};
  }

  _validate() {
    const e = this.employee;
    const errors = {};
    if (!e.firstName) errors.firstName = t('required');
    if (!e.lastName) errors.lastName = t('required');
    if (!e.dateOfEmployment) errors.dateOfEmployment = t('required');
    if (!e.dateOfBirth) errors.dateOfBirth = t('required');
    if (!e.phone) errors.phone = t('required');
    if (!/^\+?\d{10,15}$/.test(e.phone)) errors.phone = t('invalidPhone');
    if (!e.email) errors.email = t('required');
    if (!/^\S+@\S+\.\S+$/.test(e.email)) errors.email = t('invalidEmail');
    if (!employeeStore.isUnique(e.email, e.phone, this.isEdit ? e.id : null))
      errors.email = t('uniqueError');
    return errors;
  }

  _onSubmit(e) {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    const errors = this._validate();
    if (Object.keys(errors).length) {
      this.errors = errors;
      return;
    }
    if (this.isEdit) {
      employeeStore.update(this.employee.id, this.employee);
    } else {
      this.employee.id = Date.now().toString();
      employeeStore.add(this.employee);
    }
    window.history.pushState({}, '', '/employees');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  _onCancel() {
    window.history.pushState({}, '', '/employees');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  render() {
    const e = this.employee;
    return html`
      <route-header
        .title="${this.isEdit ? 'editEmployee' : 'addEmployee'}"
      ></route-header>
      <form @submit=${this._onSubmit.bind(this)}>
        <div class="you-are-editing">
          ${this.isEdit
            ? html`
                <p>
                  ${t('youAreEditing', {
                    firstName: this.employee.firstName,
                    lastName: this.employee.lastName,
                  })}
                </p>
              `
            : null}
        </div>

        <div class="fields">
          <div class="field">
            <label>${t('firstName')}</label>
            <input
              name="firstName"
              .value=${e.firstName}
              @input=${this._onInput.bind(this)}
            />
            ${this.errors.firstName
              ? html`<div class="error">${this.errors.firstName}</div>`
              : ''}
          </div>
          <div class="field">
            <label>${t('lastName')}</label>
            <input
              name="lastName"
              .value=${e.lastName}
              @input=${this._onInput.bind(this)}
            />
            ${this.errors.lastName
              ? html`<div class="error">${this.errors.lastName}</div>`
              : ''}
          </div>
          <div class="field">
            <label>${t('dateOfEmployment')}</label>
            <input
              name="dateOfEmployment"
              type="date"
              .value=${e.dateOfEmployment}
              @input=${this._onInput.bind(this)}
            />
            ${this.errors.dateOfEmployment
              ? html`<div class="error">${this.errors.dateOfEmployment}</div>`
              : ''}
          </div>
          <div class="field">
            <label>${t('dateOfBirth')}</label>
            <input
              name="dateOfBirth"
              type="date"
              .value=${e.dateOfBirth}
              @input=${this._onInput.bind(this)}
            />
            ${this.errors.dateOfBirth
              ? html`<div class="error">${this.errors.dateOfBirth}</div>`
              : ''}
          </div>
          <div class="field">
            <label>${t('phone')}</label>
            <input
              name="phone"
              .value=${e.phone}
              @input=${this._onInput.bind(this)}
            />
            ${this.errors.phone
              ? html`<div class="error">${this.errors.phone}</div>`
              : ''}
          </div>
          <div class="field">
            <label>${t('email')}</label>
            <input
              name="email"
              .value=${e.email}
              @input=${this._onInput.bind(this)}
            />
            ${this.errors.email
              ? html`<div class="error">${this.errors.email}</div>`
              : ''}
          </div>
          <div class="field">
            <label>${t('department')}</label>
            <select
              name="department"
              .value=${e.department}
              @input=${this._onInput.bind(this)}
            >
              <option value="Analytics">${t('analytics')}</option>
              <option value="Tech">${t('tech')}</option>
            </select>
          </div>
          <div class="field">
            <label>${t('position')}</label>
            <select
              name="position"
              .value=${e.position}
              @input=${this._onInput.bind(this)}
            >
              <option value="Junior">${t('junior')}</option>
              <option value="Medior">${t('medior')}</option>
              <option value="Senior">${t('senior')}</option>
            </select>
          </div>
        </div>

        <div class="actions">
          <button type="submit">${t('save')}</button>
          <button type="button" class="cancel" @click=${this._onCancel}>
            ${t('cancel')}
          </button>
        </div>
      </form>
    `;
  }
}

customElements.define('employee-form', EmployeeForm);
