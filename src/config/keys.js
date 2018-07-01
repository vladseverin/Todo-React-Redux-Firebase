export const FirebaseConfig = {
  apiKey: process.env.NODE_ENV === 'production' ? process.env.API_KEY : "AIzaSyC6ASXQqPFqIa-rHWajpsJkf7sA0VZAOrQ",
  authDomain: process.env.NODE_ENV === 'production' ? process.env.AUTH_DOMAIN : "react-redux-firebase-6ae9c.firebaseapp.com",
  databaseURL: process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : "https://react-redux-firebase-6ae9c.firebaseio.com",
}