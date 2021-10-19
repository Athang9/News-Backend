// const mongoose = require("mongoose");

// mongoose
//   .connect(
//     "mongodb+srv://Athang:Athang@123@cluster0.potmz.mongodb.net/News?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("Database Connected baray"))
//   .catch((err) => console.log("Error happened", err));

const mongoose = require("mongoose");
// "mongodb+srv://Athang:Athang@12345@cluster0.potmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
// "mongodb+srv://Athang:Athang@123@cluster0.potmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

mongoose
  .connect(
    "mongodb+srv://Athang:athang123@cluster0.potmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
