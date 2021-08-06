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
    const artists = user.artists
    res.render("artists/index", {
        artists
    })
})



router.post("/", async (req, res) => {
    const user = req.user 
    user.artists.push(req.body)
    user.save()
    res.redirect("/artists/")
})

router.get("/:id", async (req, res) => {
const id = req.params.id
const index = req.user.artists.findIndex((artist) => `${artist._id}` === id)

const artist = req.user.artists[index]
console.log(artist)
res.render("artists/show", {
    artist
})

})

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const index = req.user.artists.findIndex((artist) => `${artist._id}` === id)
    req.user.artists[index].text = req.body.text
    req.user.save()
    res.redirect("/artists")
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    const index = req.user.artists.findIndex((artist) => `${artist._id}` === id)
    req.user.artists.splice(index, 1)
    req.user.save()
    res.redirect("/artists")
})
///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router