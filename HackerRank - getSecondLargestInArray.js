nums = [2, 10, 5, 9, 9, 9];

function getSecondLargest(nums) {
  //remove os duplicados
  nums = [...new Set(nums)];

  //calback
  function compararNumeros(a, b) {
    return a - b;
  }
  // ordena de acordo com callback
  nums.sort(compararNumeros);

  const arrayLenght = nums.length;
  const secondBigger = nums[arrayLenght - 2];

  return secondBigger;
}
