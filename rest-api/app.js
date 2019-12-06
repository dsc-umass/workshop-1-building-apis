var express = require("express");
var app = express();

app.get("/add", (req, res, next) => {
    
    res.json(num1 + num2);

});


app.listen(3000, () => {
 console.log("Server running on port 3000");
});