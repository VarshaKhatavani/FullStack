// used in component 10-graph 11-grid

export const range = (start, end, step = 1) => {
  let output = [];

  if (typeof end === "undefined") {
    end = start; // 4
    start = 0; // 0
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  console.log(output);
  return output;
};
