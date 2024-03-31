import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },
    quantity: {
        type: Number,
        required: [true, "Please provide a quantity"]
    },
    timestamp : {
        type : Date,
        default: Date.now()
    }
})

const Users = mongoose.models.users || mongoose.model("users",userSchema)
export default Users