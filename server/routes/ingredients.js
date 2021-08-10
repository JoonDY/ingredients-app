var express = require('express');
const app = require('../app');
var router = express.Router();
const db = require("../db");

router.get('/', async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM ingredients");
    res.json({
      status: 'success',
      results: results.rows.length,  
      data: {
        ingredients: results.rows
      }  
    })
  } catch (err) {
    console.log(err)
  } 
});

router.get('/:id', async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM ingredients WHERE id = $1", [req.params.id]);
      res.json({
        status: 'success',
        results: results.rows.length,
        data: {
          ingredients: results.rows
        }
      })
  } catch (err) {
    console.log(err)
  } 
});

router.post('/', async (req, res) => {
  try {
    const results = await db.query("INSERT INTO ingredients (name, quantity) VALUES ($1, $2) RETURNING *", [req.body.name, req.body.quantity]);
    res.json({
      status: 'success',
      results: results.rows.length,
      data: {
        ingredients: results.rows
      }
     })
  } catch (err) {
    console.log(err)
  } 
});

router.put('/:id', async (req, res) => {
  try {
    const results = await db.query("UPDATE ingredients SET name = $1, quantity = $2 WHERE id = $3 RETURNING *", [req.body.name, req.body.quantity, req.params.id]);
    res.json({
      status: 'success',
      results: results.rows.length,
      data: {
        ingredients: results.rows
      }
     })
  } catch (err)  {
    console.log(err)
  };
});

router.delete('/:id', async (req, res) => {
  try{
    const results = await db.query("DELETE FROM ingredients WHERE id = $1", [req.params.id]);
    res.send('Deleted')
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;