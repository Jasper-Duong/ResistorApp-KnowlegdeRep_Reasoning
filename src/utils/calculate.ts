export const horizontal = (rVals: number[]): number => {
  return rVals.reduce((prev, curr) => prev + curr, 0);
};
export const vertical = (rVals: number[]): number => {
  
  const sum = horizontal(rVals);
  const product = rVals.reduce((prev, curr) => prev * curr, 1);
  console.log(sum, product);
  return product / sum;
};
