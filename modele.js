const date = new Date()
function upload_file(fields,call_back) {
    let liste_of_image = []
        for(let element in fields) {
        
        const field = fields[`${element}`]
        const image_name = date.getTime() +`-${element}-`+field.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9.]/g, "-");  
        const final_directory = __dirname + "/uploads/" + image_name
        console.log(field)
        liste_of_image.push({
            field : field,
            image_name : image_name,
            final_directory : final_directory
        })
    }
    try {
        liste_of_image.forEach(function (js_massosp) {
        js_massosp.field.mv(js_massosp.final_directory,function(error) {
            if(error) {
                throw new Error(error)
            }
        })
    })
    call_back({
        code : 0,
        message : "Image added successfully",
        list: [...liste_of_image.map(function(element) {
            return element.image_name
        } )]
    })
    } catch (error) {
        console.log(error)
        call_back({
            code:1,
            message: "Semething went wrong",
        })
    }
}
module.exports = {
    unpload : upload_file
}