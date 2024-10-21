const express = require("express");
const router = express.Router();
const connection = require("../db");

router
  .route("/")
  .get((req, res) => {
    const query = "SELECT * FROM TBL_PERSON";
    connection.query(query, (err, results) => {
      if (err) {
        console.error("쿼리 실행 실패:", err);
        return;
      }
      res.json(results);
    });
  })
  .post((req, res) => {
    const { name, gender, phone, addr } = req.body;
    const query =
      "INSERT INTO TBL_PERSON(NAME,GENDER,PHONE,ADDR) VALUES (?,?,?,?)";

    connection.query(query, [name, gender, phone, addr], (err, results) => {
      if (err) {
        console.error("쿼리 실행 실패:", err);
        return;
      }
      res.json(true);
    });
  });
router
  .route("/:id")
  .delete((req, res) => {
    const id = req.params.id;
    const query = "DELETE FROM TBL_PERSON WHERE ID = ?";
    connection.query(query, [id], (err, results) => {
      if (err) {
        console.error("쿼리 실행 실패:", err);
        return;
      }
      res.json(true);
    });
  })
  .put((req, res) => {
    const id = req.params.id;
    const { gender } = req.body;
    console.log(gender);
    const query = "UPDATE TBL_PERSON SET GENDER = ? WHERE ID = ? ";
    connection.query(query, [gender, id], (err, results) => {
      if (err) {
        console.error("쿼리 실행 실패:", err);
        res.json(false);
        return;
      }
      res.json(true);
    });
  });

module.exports = router;
