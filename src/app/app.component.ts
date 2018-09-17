import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { Subscription } from "rxjs/Subscription";

import { AuthenticationService, LoaderService } from './services/index';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayLoader: boolean;
  watcher: Subscription;
  small_screen: boolean;
  alert: boolean;
  locales = [
    {name: 'Magyar', id: 'hu'},
    {name: 'English', id: 'en'}
  ];
  currentLocale: string;

  constructor(
          public media: ObservableMedia,
          private loader: LoaderService,
          private authService: AuthenticationService,
          private sidenav: ViewContainerRef
  ){
    this.watcher = media.subscribe((change: MediaChange) => {
      this.small_screen = (change.mqAlias == 'xs' || change.mqAlias == 'sm');
    });

    this.currentLocale = localStorage.getItem('localeId');

    if (!this.currentLocale) {
      this.currentLocale = 'en';
    }
  }

  ngOnInit() {
    
    this.displayLoader = false;
    this.small_screen = (this.media.isActive('xs') || this.media.isActive('sm'));
    this.loader.status.subscribe(value => {
      this.displayLoader = value;
    });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getUserName() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser ? currentUser.name : '';
  }

  // helper method to access the sidenav even if it is in ngIf
  @ViewChild('sidenav') set setSidenav(sidenav: ViewContainerRef) {
      this.sidenav = sidenav;
  }
  
  onLocaleSelected(event) {
    let current_locale = localStorage.getItem('localeId');
    console.log("Change locale: ", current_locale, "=>", event.value);

    localStorage.setItem('localeId', event.value);
    if (environment.production) {
      let new_locale = event.value == environment.DEFAULT_LANGUAGE ? "" : event.value;

      const languagePattern = new RegExp("^/(" + environment.LANGUAGES.split(' ').join('|') + ")/");
      if (languagePattern.test(location.pathname)) {
        // change the language
        location.pathname = location.pathname.replace('/' + current_locale, (new_locale ? '/' + new_locale : ''))
      }
      else {
        // if the current language isn't the default, add the language
        location.pathname = '/' + new_locale + location.pathname;
      }
    }
    else {
      location.reload();
    }
  }
}