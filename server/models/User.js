const { Schema, model } = require('mongoose');

const Bcrypt = require('bcrypt');

const challengeSchema = require('./Challenge');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        match: [/.+@.+\..+/,'Must use a valid e-mail address.']
    },
    password: {
        type: String,
        required: true,
    },
    challenges: [ 
        {
        type: Schema.Types.ObjectId,
        ref: "Challenge",
        }
    ], 
}
{
    toJSON: {
        virtuals: true,
    },
});

userSchema.methods.isCorrectPassword = async function (password) {
    return Bcrypt.compare(password,this.password);
}
    userSchema.virtual("ChallengeCount").get(function() {
        return this.challenges.length
    })
    const User = model("User", userSchema);
    
    module.exports = User;