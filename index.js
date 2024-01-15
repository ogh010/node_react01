//express 모듈 임포트
const express = require('express')
//express 애플리케이션 생성
const app = express()
//포트 정의
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ogh980607:wa369369wawa@cluster0.vusj0jd.mongodb.net/').then(()=>{console.log('몽고디비 연결..');})
.catch(err=>console.log(err))


//루트 경로 핸들링
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 서버 시작 및 포트 리스닝 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})