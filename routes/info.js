const express = require('express');
const router = express.Router();
const multer = require('multer');
const infoController = require('../app/controllers/InfoController');
const checkLogin = require('../app/controllers/CheckLogin');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Image') // Đường dẫn thư mục để lưu tệp tin trên server
    },
    filename: function (req, file, cb) {
        let fileName = file.originalname;
        let arr = fileName.split('.');
        let newFileName = arr[0] + '-' + Date.now() + '.' + arr[1];
        cb(null, newFileName); // Đặt tên tệp tin được lưu trên server
    }
});
const upload = multer({ storage: storage });

router.post('/update', upload.single('image'),infoController.update)

router.get('/',checkLogin,infoController.index);

module.exports = router;