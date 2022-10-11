const task1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("i'm task-1");
    }, 5000);
  }).then((x) => console.log(x));
};

const task2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("i'm task-2");
    }, 3000);
  }).then((x) => console.log(x));
};

const task3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("i'm task-3");
    }, 1000);
  }).then((x) => console.log(x));
};

async function asyncFn() {
    await task1();
    await task2();
    await task3();
}

asyncFn();
