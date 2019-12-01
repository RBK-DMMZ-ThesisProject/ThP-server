const app = require("./server.js");
const supertest = require("supertest");
const request = supertest(app);

app.listen(3000);

app.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});
