  const request=require("request")

const forecast = (latitude,longtitude , callback)=>{
    const url = "http://api.weatherapi.com/v1/current.json?key=190a41d827ca409c813153730242602&q="+latitude +" , " +longtitude


    request((url),(error,response) =>{
        const data1=JSON.parse(response.body)
        if(error){
            callback("error...", undefined)
        }else if(data1.error){
    
            callback(data1.error.message , undefined)
        }
        else{

            callback(undefined , data1.location.name +" it is : " + data1.current.condition.text + " , and temp is : "+data1.current.temp_c)

        }
    })
}




module.exports = forecast