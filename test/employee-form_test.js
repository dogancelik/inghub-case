import {html, fixture, expect} from '@open-wc/testing';
import '../src/components/employee-form.js';
import {employeeStore} from '../src/state/employee-store.js';

const isFirefox = navigator.userAgent.includes('Firefox');

suite('employee-form', isFirefox ? fakeSuite : testSuite);

function fakeSuite() {
  test('skipped in Firefox', function () {
    this.skip();
  });
}

function testSuite() {
  setup(() => {
    localStorage.clear();
  });

  test('renders form fields', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    expect(el.shadowRoot.querySelector('input[name="firstName"]')).to.exist;
    expect(el.shadowRoot.querySelector('input[name="lastName"]')).to.exist;
    expect(el.shadowRoot.querySelector('input[name="email"]')).to.exist;
  });

  test('validates required fields', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    el.shadowRoot.querySelector('form').dispatchEvent(new Event('submit'));
    await el.updateComplete;
    expect(el.errors.firstName).to.exist;
    expect(el.errors.lastName).to.exist;
    expect(el.errors.email).to.exist;
  });

  test('adds a new employee', async function () {
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
    el._onSubmit({preventDefault: () => {}});
    expect(employeeStore.getAll().length).to.equal(401);
  });

  test('renders form fields', async () => {
    const el = await fixture(html`<employee-form></employee-form>`);
    expect(el.shadowRoot.querySelector('input[name="firstName"]')).to.exist;
    expect(el.shadowRoot.querySelector('input[name="lastName"]')).to.exist;
    expect(el.shadowRoot.querySelector('input[name="email"]')).to.exist;
  });
}
