const express = require('express');
const router = express.Router();
const checkLogin = require('../app/controllers/CheckLogin');
const multer = require('multer');
const qluserController = require('../app/controllers/QluserController');

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

router.post('/deleteuser', checkLogin, qluserController.delete);
router.post('/postputuser', checkLogin, upload.single('image') , qluserController.postorput);
router.post('/search', checkLogin, qluserController.search);
// router.get('/search', checkLogin, qluserController.index);
router.get('/', checkLogin, qluserController.index);

module.exports = router;
