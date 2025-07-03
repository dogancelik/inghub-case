import { LitElement, html, css } from 'lit';
import { t } from '../localization/i18n.js';

export class NavMenu extends LitElement {
  static styles = css`
    nav {
      background: #181818;
      padding: 1rem 0;
      display: flex;
      justify-content: center;
      gap: 2rem;
      border-bottom: 1px solid #333;
    }
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      font-size: 1.1rem;
      transition: color 0.2s;
    }
    a[active], a:hover {
      color: #00bcd4;
    }
    @media (max-width: 600px) {
      nav {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `;

  render() {
    const path = window.location.pathname;
    return html`
      <nav>
        <a href="/employees" ?active=${path.startsWith('/employees') && !path.endsWith('add')}>
          ${t('employeeList')}
        </a>
        <a href="/employees/add" ?active=${path.endsWith('add')}>
          ${t('addEmployee')}
        </a>
      </nav>
    `;
  }
}

customElements.define('nav-menu', NavMenu);
