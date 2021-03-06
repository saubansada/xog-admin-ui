// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  isDesktop: false,
  isMobileApp: false,
  appName: 'Xog Admin',
  assetsUrl: '/assets/img/',
  baseUrl: "https://localhost:44317/",
  uploadsUrl: "https://modernmartsupermarket.com/", 
  apiUrl: 'https://localhost:44317/api/',
  appAuthUrl: 'https://localhost:44317/token',
  azureClientId: "f8af8402-0170-4cd1-9c57-1cc8680f1d17",
  azureAuthorization: "b1c28fc1-9a29-44ab-b406-84b796afa21c",
  dayjsConfig: {
    format: 'YYYY-MM-DDTHH:mm:ss.SSSSZ',
    displayFormat: 'DD MMMM YYYY HH:mm',
    separator: ' To ',
    cancelLabel: 'Cancel',
    applyLabel: 'Okay'
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.