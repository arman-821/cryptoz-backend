const express = require('express');
const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer');
const { faker } = require('@faker-js/faker');
const cors=require('cors');

const app = express();
const port = 3001;
app.use(cors());
app.post('/generate', (req, res) => {
    const userCount = parseInt(req.query.count) || 10;


    const users = [];
    for (let i = 0; i < userCount; i++) {
        users.push({
            id: faker.string.uuid(),
            name: faker.internet.userName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            address: faker.location.streetAddress(),
            photo:faker.image.avatar(),
        });
    }

    const csvWriter = createObjectCsvWriter({
        path: 'users.csv',
        header: [
            { id: 'id', title: 'ID' },
            { id: 'name', title: 'Name' },
            { id: 'email', title: 'Email' },
            { id: 'phone', title: 'Phone' },
            { id: 'address', title: 'Address' }
        ]
    });

    csvWriter.writeRecords(users)
        .then(() => {
            res.download('users.csv', 'users.csv', (err) => {
                if (err) {
                    console.error('Error sending file:', err);
                }
                fs.unlinkSync('users.csv'); // Delete the file after sending it
            });
        })
        .catch((error) => {
            console.error('Error writing CSV file:', error);
            res.status(500).send('Error generating CSV file');
        });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
