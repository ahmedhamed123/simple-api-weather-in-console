
const { error } = require("console")
const request = require("request")

//_________________________________  geo code  __________________________________________________

const geoCode=require("./geoCode")

const forecast = require("./forecast")

const country= process.argv[2]

geoCode(country,(error,data)=>{
    console.log("Error : ", error)
    console.log("Data",data)

    forecast(data.latitude , data.longtitude , (error,data)=>{
        console.log("error : "+error)
        console.log("Data : "+data)
    })
})

//===========================================================









