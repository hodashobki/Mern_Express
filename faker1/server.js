const express = require("express");
var faker = require('faker');
const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});
const calssmembers = [
  { firstName: "Ahmad",  lastName: "Shobki"    },
  { firstName: "Mohammad", lastName: "Shobki"   },
  { firstName: "Laila",  lastName: "Shobki"    },
  { firstName: "Dyala", lastName: "Shobki"     },
  { firstName: "Adnan", lastName: "Shobki" }
];

class User{
  constructor(){
    // var randomName = faker.name.findName(); 
    // var randomEmail = faker.internet.email(); 
    // var randomCard = faker.helpers.createCard(); 
    // this.id=faker.random()*(100-1)+1;
    this.id = Math.floor(Math.random() * (1000 - 1) + 1);
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}
class Company {
  constructor(){
    this.id = Math.floor(Math.random() * (100 - 1) + 1);
    this.name = faker.company.companyName();
    this.address = {
      
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state() ,
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    };
  }
}
app.get("/api/:users/:new", (req, res) => {
  res.json( new User() );
});

app.get("/api/:companies/:new/:new",(req,res)=>{
  res.json(new Company());
});
 


app.get("/api/:user/:company/:new/:new",(req,res)=>
{
  res.json({Company:new Company(),User:new User()});

});

app.get("/api", (req, res) => {
  res.send("Will it work");
});
// class Members:
 app.get("/api/allclass",(req,res)=>{
  res.json(calssmembers);
 }) ;
 app.post("/api/addmember",(req,res)=>{
   calssmembers.push(req.body);
 })
app.get("/api/classmember/:id",(req,res)=>{
  res.json(calssmembers[req.params.id]);
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
