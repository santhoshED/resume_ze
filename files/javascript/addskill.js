'use strict';
const fs = require('fs');

module.exports = (req, res) => {
	const img = req.files.skill_img;
	const name = req.body.skill_name;

  global.database.TECHNOLOGIES[name] = img.name;

  fs.writeFile('./scripts/constants/masterdb.js', `database=${JSON.stringify(global.database)}; module.exports=database`, function (err) {
    if (err) return console.log(err);
    console.log('saved to masterdb');
  });

	img.mv(`/home/zemoso/resume_ze/images/full_stack/${img.name}`, function(err) {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.redirect('/')
    }
  });
}