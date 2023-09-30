const my_sql = require("mysql");
const cors = require("cors");
const express = require("express");
const multer = require("multer");
const path = require("path");


const app = express();
app.use(cors());
app.use(express.json());
app.use('/images',express.static('images'))



 
//Create a MySQL connection
const conn = my_sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "TravelGedeo",
});

// Define a route to handle login requests
app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Query the database to check if the username and password are valid
  const query = `SELECT * FROM admin WHERE username = ? AND pwd = ?`;

   //const results = await connection.query(querym, [username, password]);
   conn.query(query, [username, password], (err, results) => {

    if (err) {
      console.log(err);
      return res.json("error : "+err)
    }

  // If the user is authenticated, return a success response
  else if (results.length>0) {
    res.json({ message: 'valid' });
  } else {
    // If the user is not authenticated, return an error response
    res.json({ message: 'Invalid' });
  }
});})

// Define the multer middleware
const uploadTrip = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images/trips");
    },
    filename: (req, file, cb) => {
      console.log(req.body.option + "from file name");
      cb(
        null,
        file.fieldname + "_" + Date.now() + path.extname(file.originalname)
      );
    },
  }),
  limits: { fieldSize: "10000000" },
  fileFilter: (req, file, cb) => {
    const filetype = /jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF/;
    const mimeType = filetype.test(file.mimetype);
    const extname = filetype.test(path.extname(file.originalname));
    if (extname && mimeType)
     {
      return cb(null, true);
    }
    cb("Give proper file format upload");
  },
  
});
const uploadDES = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
    
      cb(null, "images/destination");
    },
    filename: (req, file, cb) => {
      console.log(req.body.option + "from file name");
      cb(
        null,
        file.fieldname + "_" + Date.now() + path.extname(file.originalname)
      );
    },
  }),
  limits: { fieldSize: "10000000" },
  fileFilter: (req, file, cb) => {
    const filetype = /jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF/;
    const mimeType = filetype.test(file.mimetype);
    const extname = filetype.test(path.extname(file.originalname));
    if (extname && mimeType) {
      return cb(null, true);
    }
    cb("Give proper file format upload");
  },
});
app.post("/addTripData", uploadTrip.single("file"), (req, res) => {
  
  let body = JSON.stringify(req.body, null, 2);

  body = JSON.parse(body);
 

  const datas = [];

  datas[0] = body.Header;
  datas[1] = body.english;
  datas[2] = "trips/" + req.file.filename;
  let query = `INSERT INTO Trip ( Header,description, img ) VALUES (?,?,?) `;

  //Query the database to check if the username and password are valid

  // const results = conn.query(query, datas);
     conn.query(query,datas, (err, results) => {

      if (err) {
        return res.json("error : " + err)
      }

    // If the user is authenticated, return a success response
    else if (results.affectedRows>0) {
      res.json({ message: 'inserted' });
    } else {
      // If the user is not authenticated, return an error response
      res.json({ message: 'not inserted' });
    }
    console.log(results.affectedRows);
  })
});
app.post("/addDesData", uploadDES.array("file", 2), (req, res) => {
  let body = JSON.stringify(req.body, null, 2);

  body = JSON.parse(body);


  const datas = [];

  datas[0] = body.Header;
  datas[1] = body.english;

  datas[2] = "destination/" + req.files[0].filename;
  datas[3] = req.body.amaharic;
  datas[4] = req.body.gedeuffa;

  datas[5] = "destination/" + req.files[1].filename;

  let query = `INSERT INTO destination ( Header,english , img1,amaharic,gedeuffa,img2 ) VALUES (?,?,?,?,?,?) `;

  //Query the database to check if the username and password are valid

   //const results = conn.query(query, datas);
     conn.query(query,datas, (err, results) => {

      if (err) {
        return res.json("error : " + err)
      }

    // If the user is authenticated, return a success response
    else if (results.affectedRows>0) {
      res.json({ message: 'inserted' });
    } else {
      // If the user is not authenticated, return an error response
      res.json({ message: 'not inserted' });
    }
   
  })
});



app.post("/getData", (req, res) => {
  
  let body = JSON.stringify(req.body, null, 2);
  body = JSON.parse(body);
  let query = ` select * from Trip  `;

 if (body.from=="destination") {
   query = ` select * from destination `;
 }
 
  

  //Query the database 

  conn.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
else if (results.length>0) {
 
  results.forEach(element => {
    if (body.from=="destination") {
      element.img1="http://localhost:5000/images/" +element.img1 ;
      element.img2="http://localhost:5000/images/" +element.img2 ;
    } 
  else {element.img="http://localhost:5000/images/" +element.img ;}

  });
  
  return res.json(results)
 
 
}
    
    // Handle the results of the query
   // console.log(results);

    // Close the database connection
   
  });

});

 
// Start the server
app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
