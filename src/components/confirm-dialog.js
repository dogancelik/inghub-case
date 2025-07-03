import { LitElement, html, css } from 'lit';

export class ConfirmDialog extends LitElement {
  static properties = {
    open: { type: Boolean },
    message: { type: String },
    onConfirm: { type: Function },
    onCancel: { type: Function },
  };

  static styles = css`
    .backdrop {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .dialog {
      background: #222;
      color: #fff;
      padding: 2rem;
      border-radius: 8px;
      min-width: 300px;
      box-shadow: 0 2px 8px #0008;
      text-align: center;
    }
    button {
      margin: 1rem 0.5rem 0 0.5rem;
      padding: 0.5rem 1.2rem;
      border: none;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
    }
    .confirm {
      background: #00bcd4;
      color: #222;
    }
    .cancel {
      background: #444;
      color: #fff;
    }
  `;

  render() {
    if (!this.open) return html``;
    return html`
      <div class="backdrop">
        <div class="dialog">
          <div>${this.message}</div>
          <div>
            <button class="cancel" @click=${this.onCancel}>Cancel</button>
            <button class="confirm" @click=${this.onConfirm}>OK</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('confirm-dialog', ConfirmDialog);
