const express = require('express');
const router = express.Router();
const checkLogin = require('../app/controllers/CheckLogin');
const multer = require('multer');
const qlspController = require('../app/controllers/QlspController');

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


router.post('/deleteproduct',checkLogin,qlspController.delete);

router.post('/postproduct',checkLogin,upload.single('image'),qlspController.postorput);

router.post('/search',checkLogin,qlspController.search);
router.get('/search',checkLogin,qlspController.index);

router.use('/',checkLogin,qlspController.index);

module.exports = router;