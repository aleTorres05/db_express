const express = require("express");
const kodersUseCase = require("./koders.usecase");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const koders = await kodersUseCase.getAll();
    console.log(koders);

    response.json({
      message: "All Koders",
      data: {
        koders: koders,
      },
    });
  } catch (e) {
    response.status(e.status || 500);
    response.json({
      error: e.message,
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const newKoder = request.body;
    console.log(newKoder);
    const koders = kodersUseCase.add(newKoder);
    console.log(koders);

    response.json({
      message: "All Koders",
      data: {
        koders: koders,
      },
    });
  } catch (e) {
    response.status(e.status || 500);
    response.json({
      error: e.message,
    });
  }
});

module.exports = router;
