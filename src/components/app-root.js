import { LitElement, html } from 'lit';
import { globalCss } from '../utils/global-css.js';
import { Router } from '@vaadin/router';
import '../components/nav-menu.js';
import '../components/employee-list-container.js';
import '../components/employee-form.js';
import '../components/route-header.js';
import '../components/svg-icon.js';
// eslint-disable-next-line no-unused-vars
import {localizationService} from '../services/localization-service.js';

export class AppRoot extends LitElement {
  static styles = globalCss`
    :host {
      display: block;
      min-height: 100vh;
      background: #f8f8f8;
      font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
      font-optical-sizing: auto;
    }
    main {
      max-width: 93%;
      margin: 0 auto;
      padding: 35px 45px;
    }
    @media (max-width: 600px) {
      main {
        padding: 20px 10px;
      }
    }
  `;

  _routerInitialized = false;

  updated() {
    if (!this._routerInitialized) {
      const outlet = this.renderRoot.querySelector('#outlet');
      if (outlet) {
        const isGhPages = window.location.hostname === 'dogancelik.com';
        const routerOptions = isGhPages ? { baseUrl: '/inghub-case/' } : {};
        const router = new Router(outlet, routerOptions);
        router.setRoutes([
          { path: '/', redirect: '/employees' },
          { path: '/employees', component: 'employee-list-container' },
          { path: '/employees/add', component: 'employee-form' },
          { path: '/employees/edit/:id', component: 'employee-form' },
        ]);
        this._routerInitialized = true;
      }
    }
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
