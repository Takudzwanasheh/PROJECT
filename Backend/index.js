const express = require ('express');
const admin =require('firebase-admin');
const cors = require('cors');
const serviceAccount = require('/.firebaseServiceAccountKey.jsn');
 admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL:https//uz-internship-tracker-default-rtdb.firebaseio.com
});
 const app = express();
 app.use(cors());
 app.use(express.json)

 app.post('log-hours'),async(req,res)=>{
    const{ studentId,hours}=req.body;
    try{
        await admin.firestore().collection('students').doc(studentId).update({
            hours:admin.firestore.FieldValue.increment(hours)
        });
        res.status(200).send('hours logged successfully');}
        catch(error){
            res.status(500).send(error.message);
        }
 };
 const PORT = process.env.PORT || 5000;
 app.listen(PORT,()=> {
    console.log('Server running on port $ {PORT}'

    );
 }
);
