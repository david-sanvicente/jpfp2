"use strict";

const router = require("express").Router();
const Students = require("../db/Students");
const Campuses = require("../db/Campuses");

// route serves up all campuses
router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campuses.findAll();
    res.send(campuses);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    Campuses.findById(req.params.id, {
      include: [{ model: Students }]
    }).then(campus => {
      if (!campus) return res.sendStatus(404);
      res.send(campus);
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
