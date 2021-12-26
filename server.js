//configure express server
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

//start app by listening on heroku default port
const port = process.env.PORT || 8080;
app.listen(port, (req, res) => {
  console.log(`RUNNING on port ${port}`);
});
