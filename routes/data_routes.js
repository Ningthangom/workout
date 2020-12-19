
const router = require("express").Router()

const Workout = require("../models/model.js")

router.post("/api/workouts",(req,res)=> {
    Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
    });

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
        $addFields: {
            totalDuration: {
            $sum: '$exercises.duration',
            },
        },
        },
    ])
        .then((dbWorkouts) => {
        res.json(dbWorkouts);
        })
        .catch((err) => {
        res.json(err);
        });
    });

router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        // "runValidators" will ensure new exercises meet our schema requirements
        { new: true, runValidators: true }
    )
        .then((dbWorkout) => {
        res.json(dbWorkout);
        })
        .catch((err) => {
        res.json(err);
        });
    });

router.get('/api/workouts/range', (req, res) => {

    Workout.find({})
    .then(data => {
        res.json(data)
    }).catch (err => {
        res.json(err)
    })

})
 

router.delete('/api/workouts', ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
  .then(()=> {
      res.json(true)
  }).catch((err) => {
      res.json(err)
  })

});


module.exports = router;