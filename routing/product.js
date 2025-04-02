const fileSystem = require("fs");
const { STATUS_CODE } = require("../constants/statusCode");
const path = require("path");
const renderNewProductPage = require("../views/renderNewProductPage");
const express = require("express");

const router = express.Router();

router.get("/add", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "../views", "/add-product.html"));
});

router.post("/add", (req, res) => {
  return addNewProduct(req, res);
})

router.get("/new", (req, res) => {
  return renderNewProductPage(res)
})


const addNewProduct = (request, response) => {
  const body = [];
  request.on("data", (chunk) => {
    body.push(chunk);
  });
  request.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const formData = parsedBody.split("&").map((entry) => {
      const [key, value] = entry.split("=");

      return `${key}: ${decodeURIComponent(value)}`;
    });

    fileSystem.writeFile(
      "product.txt",
      `${formData[0]}, ${formData[1]}`,
      (err) => {
        response.statusCode = STATUS_CODE.FOUND;
        response.setHeader("Location", "/product/new");
      }
    );
  });
};

module.exports = router;
