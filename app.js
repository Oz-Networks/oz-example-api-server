const express = require("express");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.post("/report", (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const report = req.body;

    // Process report data

    // Example report data : 
    // { 
    //     "handle": null, 
    //     "safe": false, 
    //     "siteCategory": "safe", 
    //     "reviewText": "test report", 
    //     "fullPath": "/dashboard", 
    //     "reviewedProfile": null, 
    //     "profileIds": [], 
    //     "addresses": [], 
    //     "socialType": "domain", 
    //     "domain": "https://sydintel.com", 
    //     "label": null, 
    //     "action": "report" 
    // }


    console.log("Got report : " + JSON.stringify(report))

    return res.status(200).json({})

})
