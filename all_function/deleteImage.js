const { error } = require("node:console")
const fs = require("node:fs")
const path = require("node:path")
module.exports = function (req,res) {
    console.log(req.params.name)
    if(!req.params.name) {
        return res.status(400).json({message : "Image not found"})
    }
    const ExistedImage = path.join(__dirname,"../uploads",req.params ? req.params.name : "undefined")
    console.log(ExistedImage)
    if(fs.existsSync(ExistedImage)) {
        try {
            fs.unlink(ExistedImage,function (err) {
                if(err) {
                    console.log(err)
                    return res.status(400).json({message: "Something went wrong, verify and try again", error : err})
                }
            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({message : "Something went wrong, verify and try again",error : error})
        }
    } else {
        return res.status(400).json({message : "Image not found"})
    }
    return res.json({message : "Image deleted successfully"})
}