import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always', // daje możliwość przekazywania parametrów do komponentów podrzędnych w inpucie() https://angular.io/api/router/ParamsInheritanceStrategy
      })
    ),
  ],
};
