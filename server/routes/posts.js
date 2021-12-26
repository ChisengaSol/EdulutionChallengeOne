const express = require('express');
const router = express.Router();

const axios = require('axios');
const postAPI = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10';

router.get('/',(req,res) => {
  axios.get(`${postAPI}/posts`).then(posts => {
    //console.log(posts.data);
    res.status(200).json(posts.data);
  }).catch(err => {
    //console.log("");
    res.status(500).send(err);
  })
});

module.exports = router;
