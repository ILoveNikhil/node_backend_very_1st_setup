import mongoose from "mongoose";

export const connectDB = () =>{
  mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_name}`,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then((con) =>console.log(`Database Connected: ${con.connection.host} and database name is ${process.env.DB_name}`))
  .catch((err) => console.log(err));
}