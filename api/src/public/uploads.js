const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');// 4.4K (gzipped: 1.8K)
const globalVars = require('../services/globalVars');
const fs = require('fs-extra');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let destPath = './src/public/media/' + req.query.path
        console.log(req.query.path);
        fs.mkdirsSync(destPath);
        cb(null, destPath)
    },
    filename: (req, file, cb) => {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
}).single('file')

router.post('/', upload, (req, res) =>{
    
    //console.log(req.body)
    res.send("File successfully saved")
})


module.exports = router;