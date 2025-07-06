import { css } from 'lit';

export const globalCssString = `
:host, *, *::before, *::after { box-sizing: border-box; }
`;

export function globalCss(strings, ...values) {
  let localCss = strings[0];
  for (let i = 1; i < strings.length; i++) {
    localCss += values[i - 1] + strings[i];
  }
  return css([globalCssString + localCss]);
}
