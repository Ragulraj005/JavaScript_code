const customIterable = {
  values: [10, 20, 30],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.values.length) {
          return { value: this.values[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// Using for...of loop with a custom iterable
for (const item of customIterable) {
  console.log(item); // Outputs each value in the custom iterable
}
