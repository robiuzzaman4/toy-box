const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

const corsConfig = {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"]
}
app.use(cors(corsConfig));
// app.options("", cors(corsConfig));
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wjbyitu.mongodb.net/?retryWrites=true&w=majority`;
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
        // await client.connect();

        const toyCollection = client.db("toyDB").collection("toys");

        // search api
        app.get("/toys/search", async (req, res) => {
            let searchText = {};
            if (req.query?.toyName) {
                searchText = req.query.toyName;
            }
            const result = await toyCollection
                .find({
                    toyName: { $regex: `${searchText}`, $options: "i" }
                })
                .sort({ _id: 1 })
                .toArray();

            res.send(result);
        })

        // all toys
        app.get("/allToys", async (req, res) => {
            const limit = 20;
            const result = await toyCollection.find().limit(limit).toArray();
            res.send(result);
        })

        app.get("/toys", async (req, res) => {
            const query = { subCategory: req.query.subCategory };
            const result = await toyCollection.find(query).toArray();
            res.send(result);
        })

        app.get("/toys/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await toyCollection.findOne(query);
            res.send(result);
        })

        app.post("/toys", async (req, res) => {
            const newToy = req.body;
            newToy.toyPrice = Number(newToy.toyPrice);
            newToy.toyQuantity = Number(newToy.toyQuantity);
            newToy.toyRating = Number(newToy.toyRating)
            const result = await toyCollection.insertOne(newToy);
            res.send(result);
        })

        // my toys
        app.get("/myToys", async (req, res) => {
            let query = {};
            if (req.query?.email) {
                query = { sellerEmail: req.query.email };
            }
            const result = await toyCollection.find(query).toArray();
            res.send(result);
            console.log(result);
        })

        app.delete("/myToys/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await toyCollection.deleteOne(query);
            res.send(result);
        })

        app.patch("/myToys/:id", async (req, res) => {
            const id = req.params.id;
            const toy = req.body;
            const filter = { _id: new ObjectId(id) };
            const updatedToy = {
                $set: {
                    toyPrice: Number(toy.toyPrice),
                    toyQuantity: Number(toy.toyQuantity),
                    toyDetails: toy.toyDetails
                }
            }
            const result = await toyCollection.updateOne(filter, updatedToy);
            res.send(result);
        })

        app.get("/myToys/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await toyCollection.findOne(query);
            res.send(result);
        })

        app.get("/myToySort", async (req, res) => {
            const sortBy = req.query.sortBy;
            let sortOption = {};

            if (sortBy === "lowToHigh") {
                sortOption = { toyPrice: 1 };
            } else if (sortBy === "highToLow") {
                sortOption = { toyPrice: -1 };
            }

            const result = await toyCollection.find({}).sort(sortOption).toArray();
            res.send(result);
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.get("/", (req, res) => {
    res.send("Toybox server is running");
})

app.listen(port, () => {
    console.log(`Toybox server is running on port: ${port}`);
})