const mongoose = require ('mongoose')
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_CONNECTION)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
       console.log(`error connecting to MongoDB: ${error}`) 
       process.exit(1)
    }
}
module.exports = connectDB