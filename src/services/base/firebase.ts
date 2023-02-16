import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'API_KEY',
  authDomain: 'AUTH_DOMAIN',
  databaseURL: 'DATABASE_URL',
  projectId: 'PROJECT_ID',
  storageBucket: 'STORAGE_BUCKET',
  messagingSenderId: 'MESSAGING_SENDER_ID',
  appId: 'APP_ID',
};

firebase.initializeApp(firebaseConfig);

export default firebase;

/**
 *
  import React, { useState, useEffect } from 'react';
  import firebase from './firebase';

  const ComponentName: React.FC = () => {
    const [permissionGranted, setPermissionGranted] = useState(false);

    useEffect(() => {
      if ('Notification' in window) {
        firebase
          .messaging()
          .requestPermission()
          .then(() => {
            console.log('Notification permission granted.');
            setPermissionGranted(true);
          })
          .catch(error => {
            console.error('Unable to get permission to notify.', error);
          });
      }
    }, []);
    return (
      // ...
    );
  };
  export default ComponentName;
 */
