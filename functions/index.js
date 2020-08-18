const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});


exports.getPlants = functions.https.onRequest((req, res) => {
    admin.firestore().collection('plants').get().then(data => {
        let plants = []
        data.forEach(doc => {
            plants.push(doc.data())
        })
        return res.json(plants)
    })
        .catch(err => {
            console.error(err)
        })
})