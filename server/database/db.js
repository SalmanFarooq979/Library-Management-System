import mongoose from 'mongoose'

export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName : "MERN LIBARAY MS"
    }).then(()=>{
        console.log("Database connected successfully!")
    }).catch(error=>{
         console.log("Error connecting Database ",error)
    })
}