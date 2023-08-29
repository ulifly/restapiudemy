const express = require('express');
const UserModel = require('../model/UserModel');

const userModel = ('../model/UserModel');

const router = express.Router();

router.post('/', (req, res) => {
  const user = new UserModel({
    title: req.body.title,
    description: req.body.description,
  });

  user.save()
    .then((data) => res.send(data))
    .catch((err) => console.error(err, '☠️ error al guardar'));
});

module.exports = router;
