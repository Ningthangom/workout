const express = require("express");
const mongoose = require("mongoose");
const {MongoClient} = require('mongodb');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

/* mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost:3000/workout_db", {
  useNewUrlParser: true,
  useFindAndModify: false
}); */

/* mongoose
  .connect(
    'mongodb://localhost/workout_db',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('Mongo Error:'));
 */

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://Ningthanom:Ningthangom123@cluster0.dm7f2.mongodb.net/workout_db?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
 .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('Mongo Error:'));

  // route


app.get("/api/workouts", function (req, res) {
  res.send();
})


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
