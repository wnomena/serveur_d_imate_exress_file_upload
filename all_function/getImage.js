
const fs = require("node:fs")
const path = require("node:path")
module.exports = function (req,res)  {
    const ImageLink = path.join(__dirname,"../uploads",req.params ? req.params.name : "undefined")
    console.log(ImageLink)
    if(fs.existsSync(ImageLink)) {
        try {
            return res.sendFile(ImageLink)
        } catch (error) {
            return res.status(400).json({message: "Image not found"})
        }
    } else {
        
        return res.status(400).json({message: "Something went wrong, try later !"})
    }
}