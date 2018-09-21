const express = require("express");
const port = process.env.PORT || 8080;
const path = require ("path");
const cors=require("cors");
const fetch=require("node-fetch");
const request = require('request');

const lastgearsused = require("./handlers/user/lastgearsused");
const customadvice = require("./handlers/user/customadvice");
const lastactivities = require("./handlers/user/lastactivities");
const activities = require("./handlers/user/activities");
const gears = require("./handlers/user/gears");

const feedbacksstats = require("./handlers/decathlon/feedbacksstats");
const topproducts = require("./handlers/decathlon/topproducts");
const myproducts = require("./handlers/decathlon/myproducts");
let redirectURL;

if (process.env.NODE_ENV !== "production") {
  /**
   * This allows us to use the .env.local pattern offered by React.
   * Meaning we don't need to source our .env.local file and it does not
   * need to contain `export`, it can look like that:
   *
   * REACT_APP_PUBLISHABLE_KEY="mykey"
   * REACT_APP_SECRET_KEY="myscecretkey"
   */

  const path = require("path");
  require("dotenv").config({ path: path.resolve(process.cwd(), ".env.local") });
}

const app = express();


app.use(express.static('build/'));


app.use(function(request, result, next) {
  result.header("Access-Control-Allow-Origin", "*"); // Put an origin here, * means everything which is bad.
  result.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Needed by ExpressJS
  next();
});

app.use(require("body-parser").json());
app.use(require("body-parser").urlencoded({ extended: false }));

app.use(express.static('build/'));


/////////////////////////////////
//GOOGLE Connect               //
////////////////////////////////

app.post('/googleConnectBack', (req, result) => {
  const token=req.body.token;
  request(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`,
    function(error,res,body){
      if(res.statusCode===200){
        if(JSON.parse(body).aud==="464385487433-dilss92cm4s8msm84a24bujpv3v1tb9e.apps.googleusercontent.com"){
          result.status(201).json({userInfo:JSON.parse(body)});
        }else{
          result.status(401).json("TOKEN NOT OK");
        }
      }
    });
});


app.get(
  "/api", function(req, res) {
    res.sendFile(path.join(__dirname + '/handlers/listapis.html'));
});

  //////////////////////////////////
  // API FOR GEONAUTE ACCOUNT    //
  ////////////////////////////////
  app.get("/api/user/validate_code/:code",
  function (req,result){
    const client=process.env.CLIENT_ID;
    const secret=process.env.SECRET;
    let code=req.params.code;
    //console.log(req.params.code);
    fetch(`https://account.geonaute.com/oauth/accessToken?client_id=${client}&redirect_uri=localhost:3000/home&client_secret=${secret}&code=${code}&grant_type=authorization_code`)
      .then(resu=>resu.json())
      .then(rejson=>{
        fetch(`https://account.geonaute.com/api/me?access_token=${rejson.access_token}`)
        .then(final=>final.json())
        .then(pouet=>result.json(pouet))
      }
      )
  });

/////////////////////////////////
// API FOR USERS              //
/////////////////////////////////
app.get(
  "/api/user/lastgearsused",
  lastgearsused
);
app.get(
  "/api/user/customadvice",
  customadvice
);
app.get(
  "/api/user/lastactivities",
  lastactivities
);
app.get(
  "/api/user/activities",
  activities.activities
);
app.get(
  "/api/user/activities/:id",
  activities.activitiesId
);
app.get(
  "/api/user/gears",
  gears.gears
);
app.get(
  "/api/user/gears/:id",
  gears.gearsId
);

/////////////////////////////////
// API FOR DKT                 //
/////////////////////////////////
app.get(
  "/api/dkt/topproducts",
  topproducts
);
app.get(
  "/api/dkt/feedbacksstats",
  feedbacksstats
);
app.get(
  "/api/dkt/myproducts",
  myproducts.myproducts
);
app.get(
  "/api/dkt/myproducts/:id",
  myproducts.myproductsId
);
app.get(
  "/api/dkt/myproducts/:id/stats",
  myproducts.myproductsIdStats
);
app.get(
  "/api/dkt/myproducts/:id/myfeedbacks",
  myproducts.myproductsIdMyfeedbacks
);
/////////////////////////////////

app.get('*', (request, result) => {
  result.sendFile(path.resolve('./build/index.html'))
});

app.listen(port,function(){
  console.log("server listening on the port"+ port);
});
