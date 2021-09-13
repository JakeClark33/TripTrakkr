// const inputCheck = require('./utils/inputCheck');
const express = require('express');
const router = express.Router();




router.get('/routes/api-routes/landmarks-routes', (req, res) => {
    const sql = `SELECT * FROM landmarks`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});


router.post('/routes/api-routes/favorites-routes', ({ body }, res) => {
    const errors = inputCheck(body, 'landmark');
    if (errors) {
        res.status(400).json({ error: errors});
        return;
    }
});


const sql = `INSERT INTO favorites (landmark_name, is_favorite)`;

const params = [body.landmark_name, body.is_favorite];

db.query(sql, params, (err, result) => {
    if (err) {
        res.status(400).json({ error: err.message });
        return;
    }
    res.json({
        message: 'success',
        data: body
    });
});

router.delete('/api/favorites/:id', (req, res) => {
    const sql = `DELETE FROM favorites WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({ error: res.message });
        } else if (!reult.affectedRows) {
            res.json({
                message: 'Favorite not found'
            });
        } else {
            res.json({
                message: 'deleted',
                charges: result.affectedRows,
                id: req.params.id
            });
        }
    });
});
module.exports = router;