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

// campus with associated students
router.get("/:id", async (req, res, next) => {
  try {
    Campuses.findById(req.params.id, {
      include: [{ model: Students }]
    }).then(campus => {
      if (!campus) return res.sendStatus(404);
      res.json(campus);
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    // Campuses.create(req.body).then(campus => res.send(campus));
    const campus = await Campuses.create(req.body);
    res.send(campus);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    Campuses.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.sendStatus(204);
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    Campuses.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    }).then(() => {
      res.sendStatus(204);
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
