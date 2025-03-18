import { banner } from './banner.module.css';

export function showBanner(text) {
  const content = document.querySelector('#content');
  content.textContent = text;
  content.classList.add(banner);
}
