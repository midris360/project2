///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const AuthRouter = require("./auth")
const TracksRouter = require("./tracks")
const SongsRouter = require("./songs")

///////////////////////////////
// Router Specific Middleware
////////////////////////////////
router.use("/auth", AuthRouter)
router.use("/tracks", TracksRouter)
router.use("/songs", SongsRouter)



///////////////////////////////
// Router Routes
////////////////////////////////
router.get("/", (req, res) => {
    res.render("home")
})

router.get("/dashboard", (req, res) => {
    res.render("dashboard")
})

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router