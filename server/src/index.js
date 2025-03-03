const express=require("express");
const cors=require("cors");
const axios=require("axios");

const app=express();

app.use(express.json());
app.use(cors());

//all currencies

app.get("/getAllCurrencies",async(req,res)=>{
    
    try{
        const nameURL="https://openexchangerates.org/api/currencies.json?app_id=391750caec2b4b3f9fcd6ba54eb82a47";

    const nameResponce=await axios.get(nameURL);
    const nameData=nameResponce.data;

    return res.json(nameData);

    }
    catch(err){
        
        console.error(err)
    }
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})