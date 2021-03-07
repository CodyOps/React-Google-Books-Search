const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    title: "The Hunger Games",
    authors: ["Suzanne Collins"],
    description:
      "The Hunger Games is an annual event in which one boy and one girl aged 12–18 from each of the twelve districts surrounding the Capitol are selected by lottery to compete in a televised battle royale to the death.",
    image:
      "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link:
      "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
  },
  {
    title: "To Kill a Mockingbird",
    authors: ["Harper Lee"],
    description:
      "To Kill a Mockingbird is primarily a novel about growing up under extraordinary circumstances in the 1930s in the Southern United States. The story covers a span of three years, during which the main characters undergo significant changes.",
    image: "",
    link: "",
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
