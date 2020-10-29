const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const auth = require('http-auth');

const router = express.Router();
const { check, validationResult } = require('express-validator');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
});
const Registration = mongoose.model('Registration', registrationSchema);

// const registration = new Registration(req.body);
// registration.save(function (err) {
//   if (err) return handleError(err);
  // saved!
// });

// if (errors.isEmpty()) {
//   const registration = new Registration(req.body);
//   registration.save()
//     .then(() => { res.send('Thank you for your registration!');
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send('Sorry! Something went wrong.');
//     });
// }
// } else {
//   ...
// }

// ...

// router.get('/', (req, res) => {
//   res.send('It works!');
// });



// POST Route
router.post('/registrationSchema', (req, res) => {
  const registration = new Registration(req.body);
  registration.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// GET Route
router.get('/', (req, res) => {
  const registration = new Registration(req.body);
  Registration.find()
   .then((registrations) => {
  res.render('index', { title: 'Listing registrations', registrations });
})
  .catch(() => { res.send('Sorry! Something went wrong.'); });
});

// router.post('/',
//   [
//     check('name')
//       .isLength({ min: 1 })
//       .withMessage('Please enter a name'),
//     check('email')
//       .isLength({ min: 1 })
//       .withMessage('Please enter an email'),
//   ],
//   (req, res) => {
//     registration.save()
//       // if (err) return handleError(err);
//
//     console.log(req.body);
//     const errors = validationResult(req);
//
//     if (errors.isEmpty()) {
//       res.render('form', { title: 'Registration form' });
//     }
//     else {
//         res.render('form', {
//           title: 'Registration form',
//           errors: errors.array(),
//           data: req.body,
//         });
//     }
//
//   }
// );

module.exports = router;
