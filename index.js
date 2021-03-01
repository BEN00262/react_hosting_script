/**
 * REFERENCE: https://create-react-app.dev/docs/deployment/
 * DATE: 2/2/2021
 * AUTHOR: John Kerama <johnnesta2018@gmail.com>
 */

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT,() => {
  console.log(`Server started on port ${PORT}`);
});