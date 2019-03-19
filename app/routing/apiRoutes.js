const fs = require("fs");

module.exports = (app) => {
    let friends = [];

    app.post("/api/friends", (req, res) => {
        var newFriend = req.body;
        if(friends.length === 0) {
            friends.push(newFriend);
            res.send(friends);
        } else {
            friends.forEach((friend) => {
                if(friend.name === newFriend.name && friends.photo === newFriend.photo) {
                    res.send(`Hello ${newFriend.name}, Please use a different name & photo for your new profile. `);
                } else {
                    friends.push(newFriend);
                    res.send(friends);
                }
            }) 
        }
    });


    app.get("/api/friends", (req, res) => {
        return res.json(friends);
    });
}