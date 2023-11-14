
import { getFirestore } from 'firebase/firestore'
import 'firebase/compat/auth'
import firebase from 'firebase/compat/app'

const app = firebase.initializeApp({
	apiKey: "AIzaSyD4JvaqJpKdRjzcGeV-XHgn09GDXAQg6zs",
	authDomain: "gym-app-170c6.firebaseapp.com",
	projectId: "gym-app-170c6",
	storageBucket: "gym-app-170c6.appspot.com",
	messagingSenderId: "814482018734",
	appId: "1:814482018734:web:eb782108da907a2b8f783f"
})

export const db = getFirestore(app)
export default app
