import { html, fixture, expect } from '@open-wc/testing';
import '../src/components/svg-icon.js';

suite('svg-icon', () => {
  test('renders svg content', async () => {
    const el = await fixture(html`<svg-icon name="test"></svg-icon>`);
    expect(el.shadowRoot.querySelector('svg')).to.exist;
  });

  test("renders 'ing' icon", async () => {
    const el = await fixture(html`<svg-icon name="ing"></svg-icon>`);
    const svg = el.shadowRoot.querySelector('svg');
    expect(svg).to.exist;
    expect(svg.getAttribute('viewBox')).to.equal('0 0 77.7 77.7');
    expect(svg.querySelector('path')).to.exist;
  });
});
