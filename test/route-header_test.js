import { html, fixture, expect } from '@open-wc/testing';
import '../src/components/route-header.js';

suite('route-header', () => {
  test('renders header text', async () => {
    const el = await fixture(html`<route-header title="Test"></route-header>`);
    expect(el.shadowRoot.textContent).to.include('Test');
  });
});
