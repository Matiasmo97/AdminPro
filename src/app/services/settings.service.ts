import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');
  public links!: NodeListOf<Element>;

  constructor() {
    const theme =
      localStorage.getItem('theme') || 'assets/css/colors/purple-dark.css';
    this.linkTheme?.setAttribute('href', theme);
  }

  changeTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    localStorage.setItem('theme', url);
    this.linkTheme?.setAttribute('href', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    this.links.forEach((elem) => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    });
  }
}
