import express from "express";

var app = express();

app.get("/users", (req, res, next) => {
    console.log("GET /users");
    res.json(["Tony","Dani","Pete","Rani","Dale","Jared","more..."]);
   });

app.get("/healthcheck", (req, res, next) => {
    console.log("GET /healthcheck");
    res.status(200).end();
});

var count = 0;
function writeLog() {
    console.log(`${count}`);
    count++;
}
setInterval(writeLog, 1000);

var port = process.env.PORT ?? 3080;

app.listen(port, () => {
 console.log("Server running on port " + port);
});

