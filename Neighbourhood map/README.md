# Udacity Neighborhood App
 This App allows you to search for favourite locations and filter those based on the query along with google maps
In the project directory, you can run:

### `npm install`
 This installs all the necessary node modules such as react and its dependencies

### `npm start`

 It Runs the app in the development mode.<br> And then

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

This can be deployed by just distributing dist folder to locations specfied by corresponding server software.


To use/test the  App offline usage , edit `index.js` last line `ServiceWorker.unregister()` as `ServiceWorker.register()`

### Note
  This App uses FourSquare API to get information about the location. Sometimes Markers initial data and data from FourSquare  might mismatch and sorry for the inconveniance caused.
