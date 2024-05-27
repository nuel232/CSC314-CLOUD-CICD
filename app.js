const express = require('express');
const app = express();
const port = 8080;

// app.get('/', (req, res) => res.send(' THIS IS CSC 314 CLOUD COMPUTING DEVOPS; CI-CD PIPELINE CREATED WITH AWS. THIS PAGE INDICATES SUCCESS.\n\n YOURNAME Nwanwko Stephanie E\n\nMATRIC NUMBER vug/csc/22/8117'))

app.use(express.static('public'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
