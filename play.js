// ! challenge 1

let evenNumbersAverage = (arr) => {
  let even = arr.filter((e) => {
    return e % 2 === 0;
  });
  let result =
    even.reduce((a, e) => {
      return a + e;
    }) / even.length;
  return result;
};

// ! challenge 2

let longestWord = (arr) => {
  return arr.reduce((a, e) => {
    return a + " " + e;
  });
};

// ! challenge 3

let numberOfPages = (arr) => {
  let number = arr.map((e) => {
    return (e = e.pages);
  });
  let result =
    number.reduce((a, e) => {
      return a + e;
    }) / number.length;
  return Math.round(result);
};

// ! challenge 4

let frequency = (arr) => {
  let c = {};
  for (let i of arr) {
    c[i] = arr
      .filter((e) => {
        return e == i;
      })
      .map((e) => {
        return (e = 1);
      })
      .reduce((a, e) => {
        return a + e;
      });
  }
  return c;
};

// ! challenge 5

let peopleCount = (arr) => {
  let c = {};
  for (let i of arr) {
    c[i.city] = arr
      .filter((e) => {
        return e.city === i.city;
      })
      .map((e) => {
        return (e = 1);
      })
      .reduce((a, e) => {
        return a + e;
      });
  }
  return c;
};
