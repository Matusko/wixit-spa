import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {environmentLoader} from './environments/environment-loader';


environmentLoader.then(env => {
  if (environment.production) {
    enableProdMode();
  }
  console.log("lolololo");
  environment.settings = env.settings;

  platformBrowserDynamic().bootstrapModule(AppModule);
});
