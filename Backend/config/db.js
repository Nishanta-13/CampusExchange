const mongoose= require('mongoose');

const connectDB=async()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`MongoDB connected: ${connectDB.connection.host}`);
        
    } catch (error) {
        console.log(`Connection failed: ${error.message}`);
        process.exit(1);
    }
};

module.exports=connectDB;