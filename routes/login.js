const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/LoginController');
const checkLogin = require('../app/controllers/CheckLogin');
const multer = require('multer');

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

router.post('/login', loginController.login);

router.post('/signup', upload.single('image'), loginController.signup);

router.get('/', loginController.index);

module.exports = router;