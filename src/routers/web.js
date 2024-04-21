const express = require('express'); // define express
const router = express.Router();

//  khai bao route
router.get('/', (req, res) => {
    res.render('base.ejs');
  })
  
router.get('/user', (req, res) => {
    res.send('<h1> user </h1>');
  })


// export cac ham trong file
module.exports  = router;