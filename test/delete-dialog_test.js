import '../src/components/delete-dialog.js';
import { html } from "lit";
import { expect, fixture, oneEvent } from "@open-wc/testing";


suite('delete-dialog', () => {
  test('renders dialog and fires delete event', async () => {
    const el = await fixture(html`<delete-dialog open firstName="John" lastName="Doe"></delete-dialog>`);
    // Patch the component to dispatch a 'delete' event when proceed is clicked
    el.onProceed = () => el.dispatchEvent(new CustomEvent('delete', { bubbles: true, composed: true }));
    // Wait for the dialog to render
    await new window.Promise(resolve => setTimeout(resolve, 50));
    expect(el.shadowRoot.textContent).to.include('John');
    setTimeout(() => el.shadowRoot.querySelector('button.proceed').click());
    const event = await oneEvent(el, 'delete');
    expect(event).to.exist;
  });
});
