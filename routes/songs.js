///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const User = require("../models/User")
const Songs = require("../models/Songs")
const auth = require("./authMiddleware")
const Song = require("../models/Songs")

///////////////////////////////
// Router Specific Middleware
////////////////////////////////
router.use(auth)



///////////////////////////////
// Router Routes
////////////////////////////////
router.get("/", async (req, res) => {
    const songs = await Songs.find({user: req.session.user.id})
        console.log(songs)
    res.render("songs/index", {
        songs
    });
});

router.post("/", async (req, res) => {
    req.body.user = req.session.user.id
    await Song.create(req.body)
    res.redirect("/songs/")
});

router.get("/:id", async (req, res) => {
    const id = req.params.id
    const songs = await Songs.findOne({_id: id, user: req.session.user.id})
    if (song) {
        res.render("songs/show", {
            song
        })
    } else {
        res.status(400).json({error: "No song of This ID for this user"})
    }
})

router.put("/:id", async (req, res) => {
    await Song.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/songs/")
})

router.delete("/:id", async (req, res) => {
    await Song.findByIdAndRemove(req.params.id)
    res.redirect("/songs")
})



router.get("/dashboard", (req, res) => {
    res.render("dashboard")
})

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router