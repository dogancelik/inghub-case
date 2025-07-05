import { html, fixture, expect } from '@open-wc/testing';
import '../src/components/employee-list.js';
import { employeeStore } from '../src/state/employee-store.js';

suite('employee-list', () => {
  setup(() => {
    // Only use the test employee, no fakes
    localStorage.setItem(
      'employee-records',
      JSON.stringify([
        {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          dateOfEmployment: '2020-01-01',
          dateOfBirth: '1990-01-01',
          phone: '+905551112233',
          email: 'john@doe.com',
          department: 'Tech',
          position: 'Senior',
        },
      ])
    );
  });

  test('renders employee in table view', async () => {
    const el = await fixture(html`<employee-list></employee-list>`);
    expect(el.shadowRoot.textContent).to.include('John');
    expect(el.shadowRoot.textContent).to.include('Doe');
  });

  test('switches to list view', async () => {
    const el = await fixture(html`<employee-list></employee-list>`);
    el._changeView('list');
    await el.updateComplete;
    expect(el.shadowRoot.textContent).to.include('First Name: John');
    expect(el.shadowRoot.textContent).to.include('Last Name: Doe');
  });

  test('searches employees', async () => {
    const el = await fixture(html`<employee-list></employee-list>`);
    el.search = 'Jane';
    el._updateList();
    await el.updateComplete;
    expect(el.shadowRoot.textContent).to.include('No employees found');
  });
});
