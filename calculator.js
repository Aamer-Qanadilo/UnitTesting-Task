const add = (nums = "") => {
  let sum = 0;

  if (typeof nums !== "string")
    throw new Error(
      "Invalid Input Parameter. (Should pass a string of numbers separated by commas: '1,2').",
    );

  const numsArr = nums.split(",");
  const negatives = [];

  numsArr.forEach((number) => {
    const num = Number(number);
    if (!isNaN(num)) {
      if (num > 0 && num <= 1000) sum += num;
      if (num < 0) negatives.push(num);
    }
  });

  if (negatives.length)
    throw new Error(`negatives not allowed [${negatives.join(", ")}]`);
  return sum;
};

export default add;
