var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM ingredients');
    res.json({
      status: 'success',
      results: results.rows.length,
      data: {
        ingredients: results.rows,
      },
    });
  } catch (err) {
    res.json({
      error: err.detail,
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM ingredients WHERE id = $1', [
      req.params.id,
    ]);
    res.json({
      status: 'success',
      results: results.rows.length,
      data: {
        ingredients: results.rows,
      },
    });
  } catch (err) {
    res.json({
      error: err.detail,
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, category, in_stock, priority } = req.body;
    const results = await db.query(
      'INSERT INTO ingredients (name, category, in_stock, priority) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, category, in_stock, priority]
    );
    res.json({
      status: 'success',
      results: results.rows.length,
      data: {
        ingredients: results.rows,
      },
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, category, in_stock, priority } = req.body;
    const { id } = req.params;
    const results = await db.query(
      'UPDATE ingredients SET name = $1, category = $2, in_stock = $3, priority = $4 WHERE id = $5 RETURNING *',
      [name, category, in_stock, priority, id]
    );
    res.json({
      status: 'success',
      results: results.rows.length,
      data: {
        ingredients: results.rows,
      },
    });
  } catch (err) {
    res.status(500).json({
      error: err.detail,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const results = await db.query('DELETE FROM ingredients WHERE id = $1', [
      req.params.id,
    ]);
  } catch (err) {
    res.json({
      error: err.detail,
    });
  }
});

module.exports = router;
