///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const User = require("../models/User")
const auth = require("./authMiddleware")

///////////////////////////////
// Router Specific Middleware
////////////////////////////////
router.use(auth)
router.use( async (req, res, next) => {
    req.user = await User.findById(req.session.user.id)
    next()
})


///////////////////////////////
// Router Routes
////////////////////////////////
router.get("/", async (req, res) => {
    const user = req.user
    const tracks = user.tracks
    res.render("tracks/index", {
        tracks
    })
})



router.post("/", async (req, res) => {
    const user = req.user 
    user.tracks.push(req.body)
    user.save()
    res.redirect("/tracks/")
})

router.get("/:id", async (req, res) => {
const id = req.params.id
const index = req.user.tracks.findIndex((track) => '${track._id}' === id)

const track = req.user.tracks[index]
console.log(track)
res.render("tracks/show", {
    track
})

})

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const index = req.user.tracks.findIndex((track) => '${track._id}' === id)
    req.user.tracks[index].text = req.body.text
    req.user.save()
    res.redirect("/tracks")
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    const index = req.user.tracks.findIndex((track) => '${track._id}' === id)
    req.user.tracks.splice(index, 1)
    req.user.save()
    res.redirect("/tracks")
})
///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router