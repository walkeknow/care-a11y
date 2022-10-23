# CareA11y

CareA11y allows Healthcare Providers (HPs) to input notes with medical jargon (often shorthand) for a particular patient. They can also input ICD diagnosis and procedure codes for further translation which are used to query live websites for associated text. All medical text is sent to the Google Cloud API identifies medical jargon terms. These terms are then translated via an aggregated specialized text translator library. The Helathcare Providers can add their own terms that are not found in the library. The HPs can review the text for accuracy before approving it for the patient to view. A patient can log in, select a desired appointment, and review the associated notes.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
