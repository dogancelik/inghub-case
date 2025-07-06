import {LitElement, html} from 'lit';
import { globalCss } from '../utils/global-css.js';
import {localizationService, t} from '../services/localization-service.js';

export class RouteHeader extends LitElement {
  static properties = {
    title: {type: String},
  };
  static styles = globalCss`
    :host {
      display: block;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 6px 43px 6px;
    }
    h2 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
      color: var(--primary-color);
    }
  `;


  constructor() {
    super();
    this._onLocaleChanged = () => this.requestUpdate();
  }


  connectedCallback() {
    super.connectedCallback();
    localizationService.onLocaleChanged(this._onLocaleChanged);
  }


  disconnectedCallback() {
    localizationService.offLocaleChanged(this._onLocaleChanged);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div class="header">
        <h2>${this.title ? t(this.title) : ''}</h2>
        <div class="actions"><slot></slot></div>
      </div>
    `;
  }
}

customElements.define('route-header', RouteHeader);
