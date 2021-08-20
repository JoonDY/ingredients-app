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
    res.json({
      error: err.detail
    })
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
    res.json({
      error: err.detail
    })
  } 
});

router.post('/', async (req, res) => {
  try {
    const results = await db.query("INSERT INTO ingredients (name, category) VALUES ($1, $2) RETURNING *", [req.body.name, req.body.category]);
    res.json({
      status: 'success',
      results: results.rows.length,
      data: {
        ingredients: results.rows
      }
     })
  } catch (err)  {
    res.status(500).json({
      err
    })
  };
});

router.put('/:id', async (req, res) => {
  try {
    const results = await db.query("UPDATE ingredients SET name = $1, in_stock = $2 WHERE id = $3 RETURNING *", [req.body.name, req.body.in_stock, req.params.id]);
    res.json({
      status: 'success',
      results: results.rows.length,
      data: {
        ingredients: results.rows
      }
     })
  } catch (err)  {
    res.status(500).json({
      error: err.detail
    })
  };
});

router.delete('/:id', async (req, res) => {
  try{
    const results = await db.query("DELETE FROM ingredients WHERE id = $1", [req.params.id]);
    res.send('Deleted')
  } catch (err) {
    res.json({
      error: err.detail
    })
  }
});

module.exports = router;