const express = require('express');
const app = express();
const cors = require('cors');

//mongoose connections
const Mongoose = require('mongoose').Mongoose;

//use dependencies
app.use(express.json());
app.use(cors());


//database connection to our own records per agency
let own_psa_instance = new Mongoose();
own_psa_instance.connect('mongodb://localhost:27017/own_psa',{useNewUrlParser:true,useUnifiedTopology:true});

let own_dfa_instance = new Mongoose();
own_dfa_instance.connect('mongodb://localhost:27017/own_dfa',{useNewUrlParser:true,useUnifiedTopology:true});

let own_phil_instance = new Mongoose();
own_phil_instance.connect('mongodb://localhost:27017/own_phil',{useNewUrlParser:true,useUnifiedTopology:true});


//response for successful database connection
own_psa_instance.connection
        .once('open',() => console.log('OWN_PSA_Connected'))
        .on('error',(error) => console.log("Your Error", error));  

own_dfa_instance.connection
        .once('open',() => console.log('OWN_DFA_Connected'))
        .on('error',(error) => console.log("Your Error", error));  

own_phil_instance.connection
        .once('open',() => console.log('OWN_PHIL_Connected'))
        .on('error',(error) => console.log("Your Error", error));  





//insert on our own agency record
app.post('/own/psa',async (req,res) => {
          const result =  await own_psa_instance.connection.collection('psa')
          
          .insertOne({
              uuid: req.body.uuid,
              firstName: req.body.firstName,
              middleName:req.body.middleName,
              lastName:req.body.lastName,
              dateofbirth:req.body.dateofbirth,
              placeofbirth:req.body.placeofbirth,
              mothermaiden:req.body.mothermaiden
            })
            res.send(result);  
      })

  
// fetch deatails from our own agency record
 app.get('/own/psa',(req,res) => {
     own_psa_instance.connection.collection('psa').find({}).toArray( (err, result) => {
        if (err) throw err;
       res.send(result)
      });
})   

//fetch data based on uuid
app.get('/own/psa/:uuid',(req,res) => {
  own_psa_instance.connection.collection('psa').find({uuid:req.params.uuid}).toArray( (err, result) => {
     if (err) throw err;
    res.send(result)
   });
})   

// called to save the data on our database if data exist in the agency
app.post('/own/psa/data',(req,res) => {
  own_psa_instance.connection.collection('psa').find({
    firstName: req.body.firstName,
    middleName:req.body.middleName,
    lastName:req.body.lastName,
    dateofbirth:req.body.dateofbirth,
    placeofbirth:req.body.placeofbirth,
    mothermaiden:req.body.mothermaiden
  }).toArray( (err, result) => {
     if (err) throw err;
    res.send(result)
   });
})  


// called for saving data to our database if the data exist in the dfa database
app.post('/own/dfa',async (req,res) => {
        const result =  await own_dfa_instance.connection.collection('dfa')
        .insertOne({
            firstName: req.body.firstName,
            middleName:req.body.middleName,
            lastName:req.body.lastName,
            dateofbirth:req.body.dateofbirth,
            placeofbirth:req.body.placeofbirth,
            mothermaiden:req.body.mothermaiden
          })
          res.send(result);  
    })

// fetch deatails from our own record of dfa agency
app.get('/own/dfa',(req,res) => {
   own_dfa_instance.connection.collection('dfa').find({}).toArray( (err, result) => {
      if (err) throw err;
     res.send(result)
    });
})    

//ending for DFA

// called for saving data to our database if the data exist in the philhealth database
app.post('/own/phil',async (req,res) => {
   const result =  await own_phil_instance.connection.collection('phil')
   .insertOne({
       firstName: req.body.firstName,
       middleName:req.body.middleName,
       lastName:req.body.lastName,
       dateofbirth:req.body.dateofbirth,
       placeofbirth:req.body.placeofbirth,
       mothermaiden:req.body.mothermaiden
     })
     res.send(result);  
})

// fetch deatails from our own agency record
app.get('/own/phil',(req,res) => {
own_phil_instance.connection.collection('phil').find({}).toArray( (err, result) => {
 if (err) throw err;
res.send(result)
});
})    
//ending for PhilHealth





//Every Agency Database connection to mongodb 
let psa_instance = new Mongoose();
psa_instance.connect('mongodb://localhost:27017/psa',{useNewUrlParser:true,useUnifiedTopology:true});

let dfa_instance = new Mongoose();
dfa_instance.connect('mongodb://localhost:27017/dfa',{useNewUrlParser:true,useUnifiedTopology:true});

let phil_instance = new Mongoose();
phil_instance.connect('mongodb://localhost:27017/phil',{useNewUrlParser:true,useUnifiedTopology:true});


let nbi_instance = new Mongoose();
nbi_instance.connect('mongodb://localhost:27017/nbi',{useNewUrlParser:true,useUnifiedTopology:true});


//response to succeesful database connection
psa_instance.connection
        .once('open',() => console.log('PSA_Connected'))
        .on('error',(error) => console.log("Your Error", error));
dfa_instance.connection
        .once('open',() => console.log('DFA_Connected'))
        .on('error',(error) => console.log("Your Error", error));  
phil_instance.connection
        .once('open',() => console.log('PHIL_Connected'))
        .on('error',(error) => console.log("Your Error", error)); 
nbi_instance.connection
        .once('open',() => console.log('NBI_Connected'))
        .on('error',(error) => console.log("Your Error", error)); 

// save data to psa agency database
app.post('/psa',async (req,res) => {
    const result =  await psa_instance.connection.collection('psas')
    .insertOne({
        firstName: req.body.firstName,
        middleName:req.body.middleName,
        lastName:req.body.lastName,
        dateofbirth:req.body.dateofbirth,
        placeofbirth:req.body.placeofbirth,
        mothermaiden:req.body.mothermaiden
      })
      res.send(result);  
})

// save data to dfa agency database
app.post('/dfa',async(req,res) => {
    const result =  await dfa_instance.connection.collection('dfas')

    .insertOne({
        firstName:req.body.firstName,
        middleName:req.body.middleName,
        lastName:req.body.lastName,
        dateofbirth:req.body.dateofbirth,
        placeofbirth:req.body.placeofbirth,
        mothermaiden:req.body.mothermaiden
      })
      res.send(result);
})

// save data to philhealth agency database
app.post('/phil',async(req,res) => {
   const result =  await phil_instance.connection.collection('phils')

   .insertOne({
       firstName:req.body.firstName,
       middleName:req.body.middleName,
       lastName:req.body.lastName,
       dateofbirth:req.body.dateofbirth,
       placeofbirth:req.body.placeofbirth,
       mothermaiden:req.body.mothermaiden
     })
     res.send(result);
})

//fetch the data request from nbi agency
app.post('/nbi',async(req,res) => {
   const result =  await nbi_instance.connection.collection('nbis')

   .insertOne({
       firstName:req.body.firstName,
       middleName:req.body.middleName,
       lastName:req.body.lastName,
       dateofbirth:req.body.dateofbirth,
       placeofbirth:req.body.placeofbirth,
       mothermaiden:req.body.mothermaiden,
       status:req.body.status
     })
     res.send(result);
})





// get PSA data from agency
app.get('/psa',(req,res) => {
     psa_instance.connection.collection('psas').find({}).toArray( (err, result) => {
        if (err) throw err;
       res.send(result)
      });
})

// get Dfa data from agency
app.get('/dfa',(req,res) => {
  dfa_instance.connection.collection('dfas').find({}).toArray( (err, result) => {
     if (err) throw err;
    // res.send(result)
    res.send(result)
   });
})

// get PHILHealth data from agency
app.get('/phil',(req,res) => {
   phil_instance.connection.collection('phils').find({}).toArray( (err, result) => {
      if (err) throw err;
     // res.send(result)
     res.send(result)
    });
 })

 // get NBI data from agency
app.get('/nbi',(req,res) => {
   nbi_instance.connection.collection('nbis').find({}).toArray( (err, result) => {
      if (err) throw err;
     // res.send(result)
     res.send(result)

    });
 })

//port server number
const port = process.env.PORT || 4000;
app.listen(port,() => console.log(`Listening on port: ${port}`));
