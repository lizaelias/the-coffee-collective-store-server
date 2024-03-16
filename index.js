

const express =require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app =express();
const port = process.env.PORT||5000;



// middlewire

app.use(cors());
app.use(express.json());

// coffeeMoster
// jjGXQqS2HB4OWC5R





const uri = "mongodb+srv://coffeeMoster:jjGXQqS2HB4OWC5R@cluster0.asap9hb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const coffeeCollection =client.db('coffeeDataDB').collection('coffeeData')

   app.post('/newCoffee',async(req,res)=>{
       const newCoffee =req.body;
       console.log(newCoffee)
       const result = await coffeeCollection.insertOne(newCoffee)
       res.send(result);
      

   })








    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/',(req,res)=>{
    res.send('Simple Project Is Running');
})

app.listen(port,()=>{
    console.log(`Simple projects is running on port,${port}`)
})






//  https://i.ibb.co/7Np6wrG/tow-removebg-preview.png
// https://i.ibb.co/Bth2Y1X/one-removebg-preview.png
// https://i.ibb.co/c26HH5k/6-removebg-preview.png
// https://i.ibb.co/RbRKVW4/5-removebg-preview.png
// https://i.ibb.co/kQjSnM8/4-removebg-preview.png
// https://i.ibb.co/6FrYrK5/3-removebg-preview.png