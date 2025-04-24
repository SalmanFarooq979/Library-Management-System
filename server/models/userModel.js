import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        lowercase: true
    },
    password: {
        type: String,
        required : true,
        select : false
    },
    role : {
        type : String,
        enum : ["Admin","User"],
        default : "User",
    },
    accountVarified : {
        type : Boolean,
        default : false
    },
    borrowBooks: [
        {
            bookId:{
                type : mongoose.Schema.Types.ObjectId,
                ref: "Borrow"
            },
            returned: {
                type : Boolean,
                default : false
            },
            bookTitle : String,
            borrowDate : Date,
            dueDate : Date,
        }
    ],
    avatar: {
        public_id : String,
        url : String
    },
    verificationCode : Number,
    verificationCodeExpired : Date,
    resetPasswordToken : String,
    resetPasswordTokenExpired : Date,
},
{
    timestamps: true,
}
);
export const User = mongoose.model("User",userSchema);