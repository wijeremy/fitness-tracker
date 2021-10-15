const router = require('express').Router();
const Workout = require('../../models/Workout');

// ROUTING

router.get('/workouts', (req, res) => {
  const getData = async () => {
    try {
      const data = await Workout.find({});
      res.json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  getData();
});

router.put('/workouts/:id', (req, res) => {
  const _id = req.params.id;
  const payload = req.body;
  const update = async () => {
    try {
      const data = await Workout.findOneAndUpdate({ _id }, payload);
      res.json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  update();
});

router.delete('/workouts/:id', (req, res) => {
  const _id = req.params.id;
  const destroy = async () => {
    try {
      const data = await Workout.findByIdAndDelete({ _id });
      res.json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  destroy();
});

router.post('/workouts', (req, res) => {
  const workout = req.body;
  const create = async () => {
    try {
      const data = await Workout.create(workout);
      console.log(data);
      res.json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  create();
});

router.get('/stats', (req, res) => res.json('stats'));

module.exports = router;
