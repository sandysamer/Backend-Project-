const express = require("express");

const {
    register,
    login
} = require("../controllers/authController");

const multerUpload = require("../middleware/multer-middleware");

const router = express.Router();

router.post(
    "/register",
    multerUpload.single("imageUrl"),
    register
);

router.post("/login", login);

module.exports = router;

