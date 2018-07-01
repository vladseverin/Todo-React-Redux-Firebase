export const API_KEY = process.env.API_KEY;
export const AUTH_DOMAIN = process.env.AUTH_DOMAIN;
export const DATABASE_URL = process.env.DATABASE_URL;

export const FirebaseConfig = {
  apiKey: process.env.NODE_ENV === 'production' ? API_KEY : "AIzaSyC6ASXQqPFqIa-rHWajpsJkf7sA0VZAOrQ",
  authDomain: process.env.NODE_ENV === 'production' ? AUTH_DOMAIN : "react-redux-firebase-6ae9c.firebaseapp.com",
  databaseURL: process.env.NODE_ENV === 'production' ? DATABASE_URL : "https://react-redux-firebase-6ae9c.firebaseio.com",
}