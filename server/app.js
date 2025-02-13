const express = require("express");
const app = express();
const connectToDatabase = require("./database");
const Book = require("./model/bookModel");
const { multer, storage } = require("./middleware/multerConfig.js");
const upload = multer({ storage: storage });
const fs = require("fs");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
connectToDatabase();
const DeleteFromFolder = (reqfile, oldDatas, verb) => {
  if (reqfile || verb === "delete") {
    const oldImagepath = oldDatas.imageUrl;
    const localHostUrlLength = "http://localhost:3000/".length;
    const newOldImagePath = oldImagepath.slice(localHostUrlLength);
    fs.unlink(`storage/${newOldImagePath}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("file deleted");
      }
    });
  }
};
app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});
app.post("/book", upload.single("image"), async (req, res) => {
  let fileName;
  if (!req.file) {
    fileName =
      "https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";
  } else {
    fileName = "http://localhost:3000/" + req.file.filename;
  }
  const {
    bookName,
    bookPrice,
    isbnNumber,
    authorName,
    publishedAt,
    publication,
  } = req.body;

  await Book.create({
    bookName,
    bookPrice,
    isbnNumber,
    authorName,
    publishedAt,
    publication,
    imageUrl: fileName,
  });
  res.status(201).json({
    message: "success",
  });
});
app.get("/book", async (req, res) => {
  const books = await Book.find();
  console.log(books);
  res.status(200).json({
    message: "data get success",
    data: books,
  });
});
//single read
app.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  const book = await Book.findById(id);

  if (!book) {
    res.status(200).json({
      message: "data not found",
    });
  } else {
    res.status(200).json({
      message: "data get by id success",
      data: book,
    });
  }
});
app.delete("/book/:id", async (req, res) => {
  const id = req.params.id;
  const oldDatas = await Book.findById(id);

  console.log("this is request", oldDatas);
  DeleteFromFolder(req.file, oldDatas, "delete");
  await Book.findByIdAndDelete(id);
  res.status(200).json({
    message: "book deleted successfully",
  });
});
app.patch("/book/:id", upload.single("image"), async (req, res) => {
  const id = req.params.id;
  const {
    bookName,
    bookPrice,
    isbnNumber,
    authorName,
    publishedAt,
    publication,
  } = req.body;
  const oldDatas = await Book.findById(id);
  DeleteFromFolder(req.file, oldDatas, "update");
  let fileName;
  if (req.file) {
    fileName = "http://localhost:3000/" + req.file.filename;
  } else {
    fileName = oldDatas.imageUrl; // Keep old image if no new one is uploaded
  }
  await Book.findByIdAndUpdate(id, {
    bookName,
    bookPrice,
    authorName,
    publication,
    publishedAt,
    isbnNumber,
    imageUrl: fileName,
  });
  res.status(200).json({
    message: "book updated  successfully",
  });
});
app.use(express.static("./storage/"));
app.listen(3000, () => {
  console.log("nodejs server has started at port 3000");
});
