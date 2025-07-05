import {html, fixture, expect, oneEvent} from '@open-wc/testing';
import '../src/components/confirm-dialog.js';

suite('confirm-dialog', () => {
  test('renders dialog and fires confirm event', async () => {
    const el = await fixture(html`
      <confirm-dialog
        open
        message="Are you sure?"
        .onConfirm=${function () {
          el.dispatchEvent(
            new CustomEvent('confirm', {bubbles: true, composed: true})
          );
        }}
      ></confirm-dialog>
    `);
    expect(el.shadowRoot.textContent).to.include('Are you sure?');
    setTimeout(() => el.shadowRoot.querySelector('button.confirm').click());
    const event = await oneEvent(el, 'confirm');
    expect(event).to.exist;
  });
});
