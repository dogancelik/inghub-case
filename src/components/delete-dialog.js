import {LitElement, html, css} from 'lit';
import {t} from '../services/localization-service.js';

export class DeleteDialog extends LitElement {
  static properties = {
    open: {type: Boolean},
    firstName: {type: String},
    lastName: {type: String},
    onProceed: {type: Function},
    onCancel: {type: Function},
    onClose: {type: Function},
  };

  static styles = css`
    :host {
      display: block;
    }
    dialog {
      border: none;
      border-radius: 8px;
      box-shadow: 0 6px 16px #0005;
      padding: 0;
      min-width: 350px;
      max-width: 90vw;
    }
    form {
      padding: 32px 24px 24px 24px;
      position: relative;
      background: #fff;
      border-radius: 8px;
    }
    h2 {
      margin: 0 0 12px 0;
      color: var(--primary-color);
      font-size: 22px;
      font-weight: 700;
    }
    p {
      margin: 0 0 24px 0;
      color: #222;
      font-size: 16px;
    }
    .dialog-actions {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .proceed {
      background: var(--primary-color);
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      padding: 10px 0;
      cursor: pointer;
    }
    .cancel {
      background: #fff;
      color: var(--secondary-color);
      border: 1px solid var(--secondary-color);
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      padding: 10px 0;
      cursor: pointer;
    }
    .close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--primary-color);
      padding: 0;
    }
  `;

  updated(changedProps) {
    if (this.open) {
      this.shadowRoot.getElementById('delete-dialog').showModal();
    } else {
      const dialog = this.shadowRoot.getElementById('delete-dialog');
      if (dialog && dialog.open) dialog.close();
    }
  }

  render() {
    return html`
      <dialog id="delete-dialog">
        <form method="dialog" @submit=${e => e.preventDefault()}>
          <button type="button" class="close-btn" @click=${this.onClose}>
            <svg-icon size="30px" name="xmark"></svg-icon>
          </button>
          <h2>${t('areYouSure')}</h2>
          <p>
            ${t('confirmDelete', { firstName: this.firstName, lastName: this.lastName })}
          </p>
          <div class="dialog-actions">
            <button type="button" class="proceed" @click=${this.onProceed}>${t('proceed')}</button>
            <button type="button" class="cancel" @click=${this.onCancel}>${t('cancel')}</button>
          </div>
        </form>
      </dialog>
    `;
  }
}

customElements.define('delete-dialog', DeleteDialog);
