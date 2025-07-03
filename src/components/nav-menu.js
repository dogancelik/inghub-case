import { LitElement, html, css } from 'lit';
import {localizationService, t} from '../services/localization-service.js';

export class NavMenu extends LitElement {
  static styles = css`
    nav {
      background: #fff;
      height: 47px;
      display: flex;
      padding: 0 20px 0 11px;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
    }
    a {
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .col {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .left a {
      color: black;
    }
    .right a {
      color: var(--primary-color);
      font-weight: 500;
      font-size: 14px;
      transition: opacity 0.2s;
      opacity: 0.6;
    }
    .right a[active], .right a:hover {
      opacity: 1;
    }
    .lang-flag {
      cursor: pointer;
      font-size: 1.3rem;
      margin-left: 4px;
      border: none;
      background: none;
      padding: 0;
      vertical-align: middle;
      line-height: 1;
    }
    @media (max-width: 600px) {
      nav {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `;

  constructor() {
    super();
    this._lang = (window.navigator.language || 'en').startsWith('tr') ? 'tr' : 'en';
    localizationService.locale = this._lang;
  }

  connectedCallback() {
    super.connectedCallback();
    this._onLocaleChanged = (e) => {
      if (e.detail && e.detail.locale && e.detail.locale !== this._lang) {
        this._lang = e.detail.locale;
        localizationService.locale = this._lang;
        this.requestUpdate();
      }
    };
    localizationService.onLocaleChanged(this._onLocaleChanged);
  }

  disconnectedCallback() {
    localizationService.offLocaleChanged(this._onLocaleChanged);
    super.disconnectedCallback();
  }

  _toggleLang() {
    this._lang = this._lang === 'en' ? 'tr' : 'en';
    localizationService.locale = this._lang;
    this.requestUpdate();
  }

  render() {
    const path = window.location.pathname;
    return html`
      <nav>
        <div class="col left">
          <a href="/" ?active=${path === '/'}>
            <svg-icon size="16px" name="ing"></svg-icon>
            ING
          </a>
        </div>
        <div class="col right">
          <a href="/employees" ?active=${path.startsWith('/employees') && !path.endsWith('add')}>
            <svg-icon size="16px" name="user-tie"></svg-icon>
            ${t('employees')}
          </a>
          <a href="/employees/add" ?active=${path.endsWith('add')}>
            <svg-icon size="16px" name="plus"></svg-icon>
            ${t('addNew')}
          </a>
          <button class="lang-flag" @click=${this._toggleLang} title=${this._lang === 'en' ? 'Türkçe' : 'English'}>
            ${this._lang === 'en' ? '🇬🇧' : '🇹🇷'}
          </button>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-menu', NavMenu);
