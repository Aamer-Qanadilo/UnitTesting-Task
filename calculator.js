const add = (nums = "") => {
  let sum = 0;

  const numsArr = nums.split(",");

  if (numsArr.length > 2) return 0;

  numsArr.forEach((number) => {
    const num = Number(number);
    if (!isNaN(num)) {
      sum += num;
    }
  });
  return sum;
};

export default add;
