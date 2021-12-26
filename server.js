
const express = require('express');
const path = require('path');
const app = express();

//get post routes
const routes = require('./server/routes/routes');
app.use(express.static(path.join(__dirname,'dist/challengeone/')));
app.use('/routes',routes);

app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname,'dist/challengeone/index.html'));
});

const port = process.env.PORT || 4600;
app.listen(port, (req, res) => {
  console.log(`RUNNING on port ${port}`);
});
