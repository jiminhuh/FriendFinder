const fs = require("fs");
const path = require("path");

module.exports = (app) => {
    let friends = [];

    // Post , data from survey
    app.post("/api/friends", (req, res) => {
        // Grab data from client-side
        var newFriend = req.body;
        // adding to array to start, if there in no data inside array, add to friends.js file
        if(friends.length === 0) {
            friends.push(newFriend);
            res.send(friends);
            // Update friends.js file 
            fs.writeFile(path.join(__dirname, "../data/friends.js"), JSON.stringify(friends), (err) => {
                if(err) throw err;
                console.log("friends.js updated");
            })
        // Array Filter to see if there are any data that has the exact same name and photo (duplicate entries)
        } else if (friends.filter(e => (e.name === newFriend.name && e.photo === newFriend.photo)).length > 0) {
                res.send(`Hello ${newFriend.name}, Please use a different name & photo for your new profile. `);
            // not a duplicate -> add to array & write to friends.js file
            } else {
                friends.push(newFriend);
                    // Update friends.js file 
                fs.writeFile(path.join(__dirname, "../data/friends.js"), JSON.stringify(friends), (err) => {
                    if(err) throw err;
                    console.log("Updated!")
                })
                res.send(friends);
                
            }
        }
    );


    app.get("/api/friends", (req, res) => {
        return res.json(friends);
    });
}