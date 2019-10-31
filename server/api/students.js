"use strict";

const router = require("express").Router();
const Students = require("../db/Students");
const Campuses = require("../db/Campuses");

// route serves up all students
router.get("/", async (req, res, next) => {
  try {
    const students = await Students.findAll();
    res.send(students);
  } catch (error) {
    next(error);
  }
});

// student with associated campus
router.get("/:id", async (req, res, next) => {
  try {
    Students.findById(req.params.id, {
      include: [{ model: Campuses }]
    }).then(student => {
      if (!student) return res.sendStatus(404);
      res.send(student);
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
