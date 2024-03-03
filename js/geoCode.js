const request = require("request")

const geoCode = (address,callback)=>{
    const geoCodeUrl= "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"


    request({url : geoCodeUrl }, (error , Response) =>{
    
        const data1 =JSON.parse(Response.body)
        if(error){
            callback("Error , unable to conect geocode service",undefined)
        }
        //********* */
        else if(data1.message){
            callback(data1.message,undefined)
        }
        //********* */
        else if(data1.features.length ==0){
            callback("unable to find location",undefined)
        }
        //******** */
        else{
            callback(undefined,{
                longtitude : data1.features[0].center[0]  ,
                latitude : data1.features[0].center[1]
            })
        }
        //--------------
    })
}

module.exports=geoCode
