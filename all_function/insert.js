const { unpload } = require("../modele")
module.exports = function (req,res) {
    const files = req.files
    console.log(files)
    if(!files || Object.keys(files).length === 0) {
    return res.status(400).json({});
    } else {
        unpload(files,function(result) {
            if(result.code == 0) {
                return res.json({
                    message : result.message,
                    list : [...result.list]
                })
            } else if (result.code == 1) {
                return res.status(500).json({
                    message : result.message,
                    list : []
                })
            }
        })
    }

}