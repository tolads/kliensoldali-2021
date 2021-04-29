// console.log(1);
// window.setTimeout(() => console.log(2), 0);
// console.log(3);

// db.insert(doc, function (err, newDoc) {
//   if (err) {
//     console.log(":(");
//   } else {
//     console.log(":)");
//   }
// });

// db.insert(doc)
//   .then(() => {
//     console.log(":)")
//   })
//   .catch(() => {
//     console.log(":(")
//   })

// try {
//   await db.insert(doc);
//   console.log(":)")
// } catch (err) {
//   console.log(":(")
// }

export const promisify = (fn) => (...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
