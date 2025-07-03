import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import '../src/components/employee-form.js';
import { employeeStore } from '../src/state/employee-store.js';

describe('employee-form', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders form fields', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    expect(el.shadowRoot.querySelector('input[name="firstName"]')).to.exist;
    expect(el.shadowRoot.querySelector('input[name="lastName"]')).to.exist;
    expect(el.shadowRoot.querySelector('input[name="email"]')).to.exist;
  });

  it('validates required fields', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    el.shadowRoot.querySelector('form').dispatchEvent(new Event('submit'));
    await el.updateComplete;
    expect(el.errors.firstName).to.exist;
    expect(el.errors.lastName).to.exist;
    expect(el.errors.email).to.exist;
  });

  it('adds a new employee', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    el.employee = {
      id: '',
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfEmployment: '2021-01-01',
      dateOfBirth: '1995-01-01',
      phone: '+905551112244',
      email: 'jane@smith.com',
      department: 'Analytics',
      position: 'Junior',
    };
    el._onSubmit({ preventDefault: () => {} });
    expect(employeeStore.getAll().length).to.equal(1);
  });
});
