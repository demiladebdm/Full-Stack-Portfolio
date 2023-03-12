const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const { response } = require('express');

//server used to send the emails
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mmmmmmm@gmail.com',
        pass: ''
    }
});

contactEmail.verify((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log('Ready to send')
    }
});

router.post('/contact', (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "mmmmm@gmail.com",
        subject: 'Contact Form Submission - Portfolio',
        html: `<p>Name: ${name}</p>
               <p>Name: ${email}</p>
               <p>Name: ${phone}</p>
               <p>Name: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code:200, status: 'Message Sent' });
        }
    });
});