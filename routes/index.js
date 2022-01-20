const express = require('express');
const router = express();
const db = require('../confing/db')

//http://Localhost:4000/ 으로 접속시 응답메시지 출력
router.get('/BoardList', (req,res) => {
    const sql = 'SELECT idx, title, content, writer, write_date FROM table1';
    db.query(sql, (err, data ) => {
        if(!err) {
            res.send(data);
        } else {
            res.send(err);
        }
    })
//res.send({ test: "this is test!!"});
})

//store로 db 관리를 함으로 호출할 필요 없다.
//router.get('/BoardContent', (req,res) => {
// const sql = 'SELECT idx, title, content, writer, write_date FROM `table1` WHERE `idx` = ?';
// const params = req.query.idx
// db.query(sql, params, (err, data) => { 
// if(!err) {
//      res.send(data)
//      }
//  })

// log 찍기 위해 사용..
const util = require('util')

router.post('/BoardUpdate', (req,res) => {
    const sql = 'UPDATE `table1` SET `title` = ?, `content` = ?, `writer` = ?, `write_date` = ? WHERE `idx` = ?';
    const params = [req.query.title, req.query.content, sqe.qeury.writer, req.query.write_date, req.query.idx]
    console.log(sql, params, (err, data) => {
        if(!err) {
            res.send(data)
        } else {
            res.send(err)
        }
    })
})

router.get('/BoardDelete', (req,res) => {
    const sql = 'DELETE FROM `table1` WHERE `idx` =?';
    const params = req.query.idx
    db.query(sql, params, (err, data) => {
        if(!err) {
            res.send(data)
        } else {
            res.send(err)
        }
    })
})

module.exports = router;