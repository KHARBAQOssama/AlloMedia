const jwt = require('jsonwebtoken');
const {verifyEmailVueGenerator} = require('./emailVueGenerator');

const emailVerificationMessage = (email) => {
    const payload = {
        email
    }
    const token = jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn : 600,
    })
    const message = {
        from: `Allo Media ${process.env.MAIL_USERNAME}`,
        to: email,
        subject: "Email Verification",
        html: verifyEmailVueGenerator(token)
    };

    return message;
}

module.exports = {
    emailVerificationMessage,
    // resetPasswordMessage,
}