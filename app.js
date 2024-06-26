var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var goalsRouter = require("./routes/goals");
var tasksRouter = require("./routes/tasks");
const router = express.Router();
var mongoose = require("mongoose");
var cors = require("cors");

var app = express();

// MongoDB Atlas connection
const mongoURI = 'mongodb+srv://williamsvega:ZgvCOqEeE1RcCi03@cluster0.ga309iv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(cors());
app.use("/", router);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

router.use((req, res, next) => {
  if (
    !req.headers.authorization ||
    req.headers.authorization !== "mL5XpgYV4oBNBjTv"
  ) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});

app.use("/", indexRouter);
app.use("/goals", goalsRouter);
app.use("/tasks", tasksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
