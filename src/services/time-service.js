import {localizationService} from './localization-service.js';

/**
 * Formats a date string (YYYY-MM-DD or ISO) according to the current locale.
 * @param {string|Date} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export function formatDate(date) {
  if (!date) return '';
  let d = date instanceof Date ? date : new Date(date);
  if (isNaN(d)) return '';
  const locale = localizationService.locale === 'tr' ? 'tr-TR' : 'en-US';
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}
