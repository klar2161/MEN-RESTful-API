const router = require("express").Router();
const cat = require("../models/cat");

const { verifyToken } = require("../validation");


//CRUD operations

//Create a post of the cat - post 
router.post("/", (req, res)=> {
    data = req.body;
    cat.insertMany(data)
    .then(data => {res.status(201).send(data);})
    .catch(err => {res.status(500).send({message: err.message}); })
});

//Read all posts - get 
router.get("/",(req, res)=> {
    cat.find()
    .then(data => {res.send(data);})
    .catch(err => {res.status(500).send({message: err.message}); })
});

//Read all posts of the cats that are meant to be indoor - get
router.get("/indoorcat",(req, res)=> {
    cat.find({ indoorCat:  true })
    .then(data => {res.send(data);})
    .catch(err => {res.status(500).send({message: err.message}); })
});

//Read specific post - get
router.get("/:id",(req, res)=> {
    cat.findById(req.params.id)
    .then(data => {res.send(data);})
    .catch(err => {res.status(500).send({message: err.message}); })
});

//Update specific post - put 
router.put("/:id", verifyToken,(req, res)=> {

    const id = req.params.id;

    cat.findByIdAndUpdate(id, req.body)
    .then(data => {
        if(!data){
            res.status(404).send({ message: "Cannot update post with id=" + id + ". Maybe post was not found!"})
        }else{
            res.send({ message: "Post was successfully updated."})
        }
    })
    .catch(err => {res.status(500).send({message: "Error while updating post with id=" + id}); })
});

//Delete specific product - delete
router.delete("/:id", verifyToken ,(req, res)=> {

    const id = req.params.id;

    cat.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({ message: "Cannot delete post with id=" + id + ". Maybe post was not found!"})
        }else{
            res.send({ message: "Post was successfully deleted."})
        }
    })
    .catch(err => {res.status(500).send({message: "Error while deleting post with id=" + id}); })
});

module.exports = router;