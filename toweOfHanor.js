towerOfHanoi = function (rodA, rodC, rodB, n) {
  // base
  if (n <= 0) {
    return;
  }

  towerOfHanoi(rodA, rodB, rodC, n - 1);

  console.log(`Move Disk-${n} FROM ${rodA} TO ${rodC}`);

  towerOfHanoi(rodB, rodC, rodA, n - 1);
};

console.log(towerOfHanoi("source", "destination", "extra", 3));
