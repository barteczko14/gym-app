// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
// 	apiKey: 'AIzaSyBRo3_WX5qi4hqLmTZm6nnTYaQlwNlHgv4',
// 	authDomain: 'gym-app-31164.firebaseapp.com',
// 	databaseURL: 'https://gym-app-31164-default-rtdb.firebaseio.com',
// 	projectId: 'gym-app-31164',
// 	storageBucket: 'gym-app-31164.appspot.com',
// 	messagingSenderId: '177661208888',
// 	appId: '1:177661208888:web:e4f858cea27d14509979cd',
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)
// const db = getFirestore(app)

import { getFirestore } from 'firebase/firestore'
import 'firebase/compat/auth'
import firebase from 'firebase/compat/app'

const app = firebase.initializeApp({
	apiKey: 'AIzaSyBRo3_WX5qi4hqLmTZm6nnTYaQlwNlHgv4',
	authDomain: 'gym-app-31164.firebaseapp.com',
	databaseURL: 'https://gym-app-31164-default-rtdb.firebaseio.com',
	projectId: 'gym-app-31164',
	storageBucket: 'gym-app-31164.appspot.com',
	messagingSenderId: '177661208888',
	appId: '1:177661208888:web:e4f858cea27d14509979cd',
})

export const db = getFirestore(app)
export const auth = app.auth()
export default app
