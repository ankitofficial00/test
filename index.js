import "dotenv/config";

import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/ice-tea", (req, res) => {
  res.send("which ice tea you prefer ?");
});

// creating a teas
let teas = [];
let nextId = 1;

// create a tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  console.log(req.body);
  const newTea = { id: nextId++, name, price };
  teas.push(newTea);
  return res.status(200).json(newTea);
});

// get all teas
app.get("/teas", (req, res) => {
  res.status(200).json(teas);
});
app.get("/twitter", (req, res) => {
  res.send("this is my twitter page ");
});

// get the tea with id
app.get("/teas/:id", (req, res) => {
  const tea = teas.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(400).send("something went wrong");
  }
  return res.json(tea);
});

// delete the tea with id
app.get("/teas/delete/:id", (req, res) => {
  const tea = teas.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    res.status(404).send("page not found");
  }
  teas.pop(tea);
  return res.json(teas);
});

// update the tea with id

app.post("/teas/update/:id", (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;
  const tea = teas.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("not found");
  }
  tea.name = name;
  tea.price = price;
  return res.status(200).json(tea);
});
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});


export default app;