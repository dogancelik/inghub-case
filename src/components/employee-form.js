import { LitElement, html, css } from 'lit';
import { t } from '../localization/i18n.js';
import { employeeStore } from '../state/employee-store.js';

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
    employee: { type: Object },
    isEdit: { type: Boolean },
    errors: { type: Object },
  };

  static styles = css`
    form {
      max-width: 500px;
      margin: 0 auto;
      background: #181818;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px #0008;
      color: #fff;
    }
    label {
      display: block;
      margin-bottom: 0.3rem;
      font-weight: 500;
    }
    input, select {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #333;
      border-radius: 4px;
      background: #222;
      color: #fff;
    }
    .error {
      color: #e53935;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }
    button {
      background: #00bcd4;
      color: #222;
      border: none;
      padding: 0.7rem 1.5rem;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
    }
    button.cancel {
      background: #444;
      color: #fff;
    }
    @media (max-width: 600px) {
      form {
        padding: 1rem;
      }
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
        this.employee = { ...emp };
        this.isEdit = true;
      }
    }
  }

  _onInput(e) {
    const { name, value } = e.target;
    this.employee = { ...this.employee, [name]: value };
    this.errors = { ...this.errors, [name]: undefined };
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
    if (!employeeStore.isUnique(e.email, e.phone, this.isEdit ? e.id : null)) errors.email = t('uniqueError');
    return errors;
  }

  _onSubmit(e) {
    e.preventDefault();
    const errors = this._validate();
    if (Object.keys(errors).length) {
      this.errors = errors;
      return;
    }
    if (this.isEdit) {
      if (!confirm(t('confirmEdit'))) return;
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
      <form @submit=${this._onSubmit.bind(this)}>
        <label>${t('firstName')}</label>
        <input name="firstName" .value=${e.firstName} @input=${this._onInput.bind(this)} />
        ${this.errors.firstName ? html`<div class="error">${this.errors.firstName}</div>` : ''}

        <label>${t('lastName')}</label>
        <input name="lastName" .value=${e.lastName} @input=${this._onInput.bind(this)} />
        ${this.errors.lastName ? html`<div class="error">${this.errors.lastName}</div>` : ''}

        <label>${t('dateOfEmployment')}</label>
        <input name="dateOfEmployment" type="date" .value=${e.dateOfEmployment} @input=${this._onInput.bind(this)} />
        ${this.errors.dateOfEmployment ? html`<div class="error">${this.errors.dateOfEmployment}</div>` : ''}

        <label>${t('dateOfBirth')}</label>
        <input name="dateOfBirth" type="date" .value=${e.dateOfBirth} @input=${this._onInput.bind(this)} />
        ${this.errors.dateOfBirth ? html`<div class="error">${this.errors.dateOfBirth}</div>` : ''}

        <label>${t('phoneNumber')}</label>
        <input name="phone" .value=${e.phone} @input=${this._onInput.bind(this)} />
        ${this.errors.phone ? html`<div class="error">${this.errors.phone}</div>` : ''}

        <label>${t('emailAddress')}</label>
        <input name="email" .value=${e.email} @input=${this._onInput.bind(this)} />
        ${this.errors.email ? html`<div class="error">${this.errors.email}</div>` : ''}

        <label>${t('department')}</label>
        <select name="department" .value=${e.department} @input=${this._onInput.bind(this)}>
          <option value="Analytics">${t('analytics')}</option>
          <option value="Tech">${t('tech')}</option>
        </select>

        <label>${t('position')}</label>
        <select name="position" .value=${e.position} @input=${this._onInput.bind(this)}>
          <option value="Junior">${t('junior')}</option>
          <option value="Medior">${t('medior')}</option>
          <option value="Senior">${t('senior')}</option>
        </select>

        <div class="actions">
          <button type="button" class="cancel" @click=${this._onCancel}>${t('cancel')}</button>
          <button type="submit">${t('save')}</button>
        </div>
      </form>
    `;
  }
}

customElements.define('employee-form', EmployeeForm);
