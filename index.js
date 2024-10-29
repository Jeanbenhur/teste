import express from "express";
import admin from 'firebase-admin';
import { authenticateToken } from "./middleware/authenticate-jwt";


const app = express();
admin.initializeApp({
  credential: admin.credential.cert("serviceAccountKey.json")
});

app.get('/dadosdoaluno', authenticateToken, (request, response) => {

    admin.firestore()
    .collection('dadosdoaluno')
    .where('user,uid','==', request.user.uid)
    .orderBy('date', 'desc')
    .get()
    .then(snapshot =>{ 
        const dadosdoaluno = snapshot.docs.map(doc => ({
            ...doc.data(),
            uid: doc.id
        }))
        response.json(dadosdoaluno);
    })
    
})

app.listen(3000, () => console.log('API rest iniciada em http://localhost:3000'));