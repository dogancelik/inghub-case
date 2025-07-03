import translations from '../localization/i18n';

// Centralized localization service for LitElement apps
class LocalizationService extends EventTarget {
  constructor() {
    super();
    this._locale = document.documentElement.lang || 'en';
  }

  get locale() {
    return this._locale;
  }

  set locale(newLocale) {
    if (this._locale !== newLocale) {
      this._locale = newLocale;
      this.dispatchEvent(
        new CustomEvent('locale-changed', {detail: {locale: newLocale}})
      );
    }
  }

  onLocaleChanged(callback) {
    this.addEventListener('locale-changed', callback);
  }

  offLocaleChanged(callback) {
    this.removeEventListener('locale-changed', callback);
  }
}

export const localizationService = new LocalizationService();

export const t = (key, params = {}) => {
  const val = translations[localizationService.locale][key] || key;
  return Object.keys(params).reduce((str, param) => {
    return str.replace(`{${param}}`, params[param]);
  }, val);
};
