const fs = require("fs");
const path = require("path");

function deleteUploadedFile(folderName, filename) {
    const filePath = path.join(
        __dirname,
        "..",
        "..",
        "uploads",
        folderName,
        filename
    );

    fs.unlink(filePath, (err) => {
        if (err) {
            console.log("Error deleting file:", err.message);
        }
    });
}

module.exports = deleteUploadedFile;