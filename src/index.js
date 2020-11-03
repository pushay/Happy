import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux';
import contactFirebaseReducer from './store/reducers/contactingFirebase';
import firebase from 'firebase'
import * as actionTypes from './store/actions';

const rootReducer = combineReducers({
  fire:contactFirebaseReducer,
})

const store = createStore(rootReducer)

const dispatchFirebase = async () => {
  let firebaseConfig = {
    apiKey: "AIzaSyAtHcFF255ETJsn_mq4w1L3JbP4lbajFn8",
    authDomain: "happy-4e7c8.firebaseapp.com",
    databaseURL: "https://happy-4e7c8.firebaseio.com",
    projectId: "happy-4e7c8",
    storageBucket: "happy-4e7c8.appspot.com",
    messagingSenderId: "320260755380",
    appId: "1:320260755380:web:a9d1554d6ff32a2b172ce1"
  };

  firebase.initializeApp(firebaseConfig);

  let database = firebase.database();

  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().useDeviceLanguage();
  firebase.auth().getRedirectResult().then((result) => {
    let token = '';
    let info = null;
    if (result.credential) {
      token = result.credential.accessToken;
      console.log(result)
      info = result;
    }
    store.dispatch({
      type: actionTypes.INIT_FIREBASE,
      database,
      provider,
      token,
      id: info ? info.additionalUserInfo.profile.id : null
      
    })
  })
  
}
dispatchFirebase();



ReactDOM.render(
  <Provider store={store}>
     <App/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
