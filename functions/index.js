const functions = require('firebase-functions');
const admin = require('firebase-admin');
const account = require('./serviceAccount.json');
const firebase = require('firebase');

admin.initializeApp({
	credential: admin.credential.cert(account),
	databaseURL: 'https://plantsapp-4fb01.firebaseio.com'
});

firebase.initializeApp(account);

exports.getPlants = functions.https.onRequest((req, res) => {
	admin
		.firestore()
		.collection('plants')
		.get()
		.then((data) => {
			let plants = [];
			data.forEach((doc) => {
				plants.push(doc.data());
			});
			return res.json(plants);
		})
		.catch((err) => {
			console.error(err);
		});
});

exports.createPlant = functions.https.onRequest((req, res) => {
	if (req.method !== 'POST') {
		return res.json({ message: `method not allowed` });
	}
	const newPlant = {
		name: req.body.name
	};

	admin
		.firestore()
		.collection('Plants')
		.add(newPlant)
		.then((doc) => {
			return res.json({ message: `document ${doc.id} created successfully` });
		})
		.catch((err) => {
			res.status(500).json({ message: `something went wrong` });
			console.error(err);
		});
});
