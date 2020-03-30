// export しないと declare global できない（どうして）
export const foo = 1;

declare global {
  interface Array<T> {
    first: () => T | undefined;
    last: () => T | undefined;
    permutation: (n?: number) => Array<T>;
    combination: (n: number) => Array<T>;
  }
}

Array.prototype.first = function() {
  return this[0];
};

Array.prototype.last = function() {
  return this[this.length - 1];
};

Array.prototype.permutation = function(n?: number): any[] {
  n = n === undefined ? this.length : n;
  if (n > this.length) return [];

  const permutationSub = function(n: number, arr: any[]): any[] {
    if (n === 0) return [[]];

    let returnArr: any[] = [];

    for (let i = 0; i < arr.length; ++i) {
      const arr_ = arr.slice();
      arr_.splice(i, 1);
      const tmp = permutationSub(n - 1, arr_).map(e => {
        return [arr[i]].concat(e);
      });
      returnArr = returnArr.concat(tmp);
    }

    return returnArr;
  };

  return permutationSub(n, this.slice());
};

Array.prototype.combination = function(n: number): any[] {
  if (n > this.length) return [];

  const combinationSub = function(n: number, arr: any[]): any[] {
    if (n === 0) return [[]];

    let returnArr: any[] = [];

    for (let i = 0; i < arr.length; ++i) {
      const arr_ = arr.slice(i + 1);
      const tmp = combinationSub(n - 1, arr_).map(e => {
        return [arr[i]].concat(e);
      });
      returnArr = returnArr.concat(tmp);
    }

    return returnArr;
  };

  return combinationSub(n, this.slice());
};
