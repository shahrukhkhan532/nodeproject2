const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            validate: {
                validator: v => (v && v.length > 3),
                message: props => `${props.value} is not valid`
            }
        },
        email: {
            type: String
        },
        phonenumber: {
            type: String
        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

UserSchema.virtual(`u_p`).get(function () {
    return `${this.username?.slice(0, 1).toUpperCase()} - ${this.phonenumber}`;
});

UserSchema.pre('insertMany', function(next){
    console.log(`Something you want to do before inserting ...`);
    next();
})

module.exports = mongoose.model("user", UserSchema);