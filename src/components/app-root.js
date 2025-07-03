import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import '../components/nav-menu.js';
import '../components/employee-list.js';
import '../components/employee-form.js';
import { setLocale } from '../localization/i18n.js';

export class AppRoot extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: #222;
      color: #fff;
      font-family: 'Segoe UI', Arial, sans-serif;
    }
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
  `;

  firstUpdated() {
    setLocale(document.documentElement.lang || 'en');
    const outlet = this.renderRoot.querySelector('#outlet');
    const router = new Router(outlet);
    router.setRoutes([
      { path: '/', redirect: '/employees' },
      { path: '/employees', component: 'employee-list' },
      { path: '/employees/add', component: 'employee-form' },
      { path: '/employees/edit/:id', component: 'employee-form' },
    ]);
  }

  render() {
    return html`
      <nav-menu></nav-menu>
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }
}

customElements.define('app-root', AppRoot);
