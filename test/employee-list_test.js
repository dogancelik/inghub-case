import { html, fixture, expect } from '@open-wc/testing';
import '../src/components/employee-list.js';
import { employeeStore } from '../src/state/employee-store.js';

describe('employee-list', () => {
  beforeEach(() => {
    // Clear store before each test
    localStorage.clear();
    employeeStore.add({
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      dateOfEmployment: '2020-01-01',
      dateOfBirth: '1990-01-01',
      phone: '+905551112233',
      email: 'john@doe.com',
      department: 'Tech',
      position: 'Senior',
    });
  });

  it('renders employee in table view', async () => {
    const el = await fixture(html`<employee-list></employee-list>`);
    expect(el.shadowRoot.textContent).to.include('John');
    expect(el.shadowRoot.textContent).to.include('Doe');
  });

  it('switches to list view', async () => {
    const el = await fixture(html`<employee-list></employee-list>`);
    el._changeView('list');
    await el.updateComplete;
    expect(el.shadowRoot.textContent).to.include('John Doe');
  });

  it('searches employees', async () => {
    const el = await fixture(html`<employee-list></employee-list>`);
    el.search = 'Jane';
    el._updateList();
    await el.updateComplete;
    expect(el.shadowRoot.textContent).to.include('No employees found');
  });
});
