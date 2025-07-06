import { localizationService } from "../services/localization-service";

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

export function formatPhone(phone) {
  const turkish = phone.replace(/\D/g, '').replace(/^0/, '');
  if (turkish.length === 12 && turkish.startsWith('90')) {
    // +90 532 123 4567
    return `(+90) ${turkish.slice(2, 5)} ${turkish.slice(5, 8)} ${turkish.slice(8, 10)} ${turkish.slice(10, 12)}`;
  } else if (turkish.length === 10) {
    // 532 123 4567
    return `(+90) ${turkish.slice(0, 3)} ${turkish.slice(3, 6)} ${turkish.slice(6, 8)} ${turkish.slice(8, 10)}`;
  }
  return phone.replace(/\D/g, '').replace(/(\d{1,3})(?=(\d{3})+(?!\d))/g, '$1 ').trim();
}
