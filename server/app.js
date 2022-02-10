const express = require('express');
const app = express();
const { connect: dbConnect } = require('./models');
const ProductModel = require('./models/product');

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 상품 조회
app.get('/product', async (req, res) => {
  const products = await ProductModel.find({}).exec();
  res.send(products);
});

// 하나의 상품 조회
app.get('/product/:id', async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.find({ _id: id }).exec();
  res.send(product);
});

// 상품 추가
app.post('/product', async (req, res) => {
  const { title, imgLink, detail, price } = req.body;
  await ProductModel.create({
    title,
    imgLink,
    detail,
    price,
  });
  res.send('생성 성공!');
});

// 상품 수정
app.put('/product/:id', async (req, res) => {
  const id = req.params.id;
  const { title, imgLink, detail, price } = req.body;
  await ProductModel.updateOne(
    { _id: id },
    {
      title,
      imgLink,
      detail,
      price,
    }
  );
  res.send('수정 성공!');
});

// 상품 삭제
app.delete('/product/:id', async (req, res) => {
  const id = req.params.id;
  await ProductModel.deleteOne({ _id: id }).exec();
  res.send('삭제 성공!');
});

app.listen(4000, () => {
  console.log('server success!!!');
});
