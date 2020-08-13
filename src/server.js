// servidor
const express = require("express")
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require("./pages")


//setuping nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

// starts and setup of the servidor  
server
//receber os dados do req.body
    .use(express.urlencoded({ extended: true }))
    //configuring static files
    .use(express.static("public"))
    // setuping aplications routes
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    // servidor starts
    .listen(5000);