// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  PIXABAY_URL:'https://pixabay.com/api/?key=',
  PIXABAY_KEY:'5266687-a4cb3788555c4b248f5951c29',
  firebase: {
    apiKey: "AIzaSyDlBpyjRvcTAQ3sCiKgmJ14uInt7uhk6kk",
    authDomain: "prabeen-b85c7.firebaseapp.com",
    databaseURL: "https://prabeen-b85c7.firebaseio.com",
    projectId: "prabeen-b85c7",
    storageBucket: "prabeen-b85c7.appspot.com",
    messagingSenderId: "244331770933"
  }
};
