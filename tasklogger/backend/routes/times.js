const router = require("express").Router();
let Time = require("../models/time.model");

router.route("/").get((req, res) => {
  Time.find()
    .then((times) => res.json(times))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const tidate = req.body.tidate;

  const newTime = new Time({
    username,

    tidate,
  });

  newTime
    .save()
    .then(() => res.json("Time added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Time.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Time.findByIdAndDelete(req.params.id)
    .then(() => res.json("Time deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
