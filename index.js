import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];
let name;

app.post("/sign-up", (req, res)=>{
    const user = req.body;
    name = req.body.username;
    users.push(user);
    res.send("OK");
});

app.post("/tweets", (req, res)=>{
    let userWPic = users.find(user=>user.username == name);
    tweets.push({
        username: name,
        avatar: userWPic.avatar,
        tweet: req.body.tweet
    })
    res.send("OK");
})

app.get("/tweets", (req, res)=>{
    let revTweets = [].concat(tweets).reverse();
    res.send(revTweets.slice(0,10));
})

app.listen(5000);