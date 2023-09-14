const randomNumber = max => {
  return Math.floor(Math.random() * (max + 1));
};

export const RandomColor = () => {
  let arr = [];
  let r = randomNumber(255);
  arr.push(r);
  let g = randomNumber(255);
  arr.push(g);
  let b = randomNumber(255);
  arr.push(b);

  return arr.join();
};
