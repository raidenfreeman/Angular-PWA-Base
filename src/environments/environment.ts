// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCGEGjVyQdAZfQHAdWx0j8YQ_vC5dtbG_I",
    authDomain: "cashier-management.firebaseapp.com",
    databaseURL: "https://cashier-management.firebaseio.com",
    projectId: "cashier-management",
    storageBucket: "cashier-management.appspot.com",
    messagingSenderId: "42550688080"
  }
};
