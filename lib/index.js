const express = require("express")

const excuseManager = require("./excuseManager")

const router = express.Router()

/* GET home page. */
router.get("/", function (req, res) {
    const excuse = excuseManager.getExcuse()
    res.render("index", {
        title: "Ausrede",
        excuse,
        tweetUrl: "https://twitter.com/intent/tweet?text=" + encodeURIComponent(excuse + "\n\t– Generiert von ausrede.birkenstab.de")
    })
})

module.exports = router
