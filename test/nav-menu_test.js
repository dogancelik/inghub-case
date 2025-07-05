import { html, fixture, expect } from '@open-wc/testing';
import '../src/components/nav-menu.js';

suite('nav-menu', () => {
  test('renders navigation links', async () => {
    const el = await fixture(html`<nav-menu></nav-menu>`);
    expect(el.shadowRoot.querySelectorAll('a').length).to.be.greaterThan(0);
  });
});
