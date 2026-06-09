import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes),
    {
      //Sacado de las opciones de api de angular material
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      //para inputs
      useValue: { appearance: 'outline' },
    }
  ],
};
