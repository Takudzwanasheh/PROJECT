const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const serviceAccount = require('./firebaseServiceAccountKey.json'); // Corrected the path and filename

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://uz-internship-tracker-default-rtdb.firebaseio.com' // Added quotes around the URL
});

const app = express();
app.use(cors());
app.use(express.json());

// API to log hours for a student
app.post('/log-hours', async (req, res) => {
    const { studentId, hours } = req.body;
    try {
        await admin.firestore().collection('students').doc(studentId).update({
            hours: admin.firestore.FieldValue.increment(hours)
        });
        res.status(200).send('Hours logged successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// API to get hours for a student
app.get('/get-hours/:studentId', async (req, res) => {
    const { studentId } = req.params;
    try {
        const studentDoc = await admin.firestore().collection('students').doc(studentId).get();
        if (!studentDoc.exists) {
            return res.status(404).send('Student not found');
        }
        const studentData = studentDoc.data();
        res.status(200).json({ hours: studentData.hours });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// API to add a new student
app.post('/add-student', async (req, res) => {
    const { studentId, name } = req.body;
    try {
        await admin.firestore().collection('students').doc(studentId).set({
            name: name,
            hours: 0 // Initialize hours to 0
        });
        res.status(201).send('Student added successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// API to delete a student
app.delete('/delete-student/:studentId', async (req, res) => {
    const { studentId } = req.params;
    try {
        await admin.firestore().collection('students').doc(studentId).delete();
        res.status(200).send('Student deleted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// API to get all students
app.get('/students', async (req, res) => {
    try {
        const studentsSnapshot = await admin.firestore().collection('students').get();
        const students = studentsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        res.status(200).json(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});