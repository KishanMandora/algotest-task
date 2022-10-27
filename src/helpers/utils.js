export const sortedObj = (data) =>
  Object.keys(data)
    .sort()
    .reduce((accumulator, key) => {
      accumulator[key] = data[key];

      return accumulator;
    }, {});
