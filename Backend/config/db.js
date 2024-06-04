import mongoose from "mongoose";


export const connectDB =async () =>{
    await mongoose.connect("mongodb+srv://harshithkumarkumar30:xO4QlAZpsM1yP7tV@cluster0.jnfhddl.mongodb.net/food-app")
    .then(()=> console.log("DB Connected"));
}