require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 7070
const path = require('path');
const expressLayouts = require("express-ejs-layouts")
const https = require('node:https');


const app = express()
const DIST = path.join(__dirname , "dist")

// Set View engine
app.use(expressLayouts)
app.set('layout', './layouts/general')
app.set('view engine', 'ejs');

app.use(cors())
app.use('/dist', express.static(DIST))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
   res.render("home")
})

app.post("/", (req, res)=> {
   var ip = `${req.body.ip}`;
   var api_key = 'at_9gN0aW9elopOZMcQudeEwjMhpcOSn';
   var api_url = 'https://geo.ipify.org/api/v1?';
   var url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;
   
   https.get(url, function(response) {
      var str = '';
      response.on('data', function(chunk) {
         str += chunk; 
      });
      response.on('end', function() {
         const IP_DATA = JSON.parse(str)
         
         let ip_address = IP_DATA.ip
         let ip_location = IP_DATA.location
         let ip_isp = IP_DATA.isp
         res.render('result', {
            ip_address,
            ip_location,
            ip_isp,
            blank : "-"
         })
      });
   }).end();
})

app.listen(port, () => console.log(`Server listening on port ${port}`) );