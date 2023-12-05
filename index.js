const express = require("express");
var app = express();

const PORT = 8000;


app.get("/api/:date", (req,res) => {
    const currentDate = req.params.date;
    console.log(currentDate);

    const parsedDate = new Date(parseInt(currentDate));
    console.log("parsed date " + parsedDate)
    
    //check for invalid date
    if(isNaN(parsedDate.getTime())){
        return res.status(400).json({error : "Invalid date"})
    }

    res.json({
        unix : parsedDate.getTime(),
        utc : parsedDate.toUTCString()
    })
})


app.get("/api" , (req,res) => {

        const dateNow = new Date();

        return res.json({
            unix : dateNow.getTime(),
            utc : dateNow.toUTCString()
        })

})

app.listen(PORT, () => {
    console.log("Server started on Port " + PORT);
})

