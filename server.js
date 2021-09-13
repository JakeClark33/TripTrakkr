const express = require('express');
const db = require('./db/connection');

routes.get('/routes/api-routes/landmarks-routes', (req, res) => {
    const sql = `SELECT * FROM landmarks`;

    db.query(sql, (err, rows) => {
        if(err) {
            res.status(500).json({error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

routes.get('/routes/api-routes/landmarks-routes/:id', (req, res) => {
    const sql = `SELECT * FROM landmarks WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if (err){
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});
