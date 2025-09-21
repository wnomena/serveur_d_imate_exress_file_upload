const fileUpload = require("express-fileupload")
const insert = require("./all_function/insert")
const get_image = require("./all_function/getImage")
const deleteImage = require("./all_function/deleteImage")
const express = require("express")
const app = express()
const port = 8080
app.use(fileUpload())
app.use(express.json())

app.route("/")
    .post(insert)
    .put(insert)
app.get("/get/image/:name",get_image)
app.delete("/delete/image/:name",deleteImage)
app.listen(port, function() {
    console.log("Application ecoutant sur le port:" + port)
})