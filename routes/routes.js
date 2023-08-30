const express = require('express');
const UserModel = require('../model/UserModel');

const router = express.Router();

// get all users

router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    console.log({ message: err });
  }
});

// create a user
router.post('/', (req, res) => {
  const user = new UserModel({
    title: req.body.title,
    description: req.body.description,
  });

  user.save()
    .then((data) => res.send(data))
    .catch((err) => console.error(err, '☠️ error al guardar'));
});

// get one user
router.get('/:userId', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;

// update the user

router.patch('/:userId', async (req, res) => {
  try {
    const updateUser = await UserModel.updateOne(
      { _id: req.params.userId },
      { $set: { title: req.body.title, description: req.body.description } },
    );
    res.json(updateUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete the user
router.delete('/:userId', async (req, res) => {
  try {
    const deleteUser = await UserModel.deleteOne({ _id: req.params.userId });
    res.json(deleteUser);
  } catch (err) {
    res.json({ message: err });
  }
});
