export default function addComma(price) {
  let result = [];
  const arrPrice = String(price).split('').reverse();
  const arrComma = [];
  let index = 0;
  arrPrice.forEach((item) => {
    if (index % 3 === 0 && index !== 0) {
      arrComma.push(',');
      index = 0;
    }
    index++;
    arrComma.push(item);
  });
  result = arrComma.reverse().join('');

  return result;
}
