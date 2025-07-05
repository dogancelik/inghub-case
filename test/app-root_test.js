import { html, fixture, expect } from '@open-wc/testing';
import '../src/components/app-root.js';

suite('app-root', () => {
  test('renders navigation and main content', async () => {
    const el = await fixture(html`<app-root></app-root>`);
    expect(el.shadowRoot.querySelector('nav-menu')).to.exist;
    expect(el.shadowRoot.querySelector('main')).to.exist;
  });
});
