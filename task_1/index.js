import { encoded, translations } from "./data.js";

// console.log("Let's rock");
// console.log(translations);
//console.log(encoded, translations);

function translation(val) {
  for (const property in translations) {
    console.log(`${val}: ${translations[val]}`);
  }
}

function decoded(arr) {
  for (let item of arr) {
    for (let [key, value] of Object.entries(item)) {
      if (
        key.includes("Id") &&
        key !== "groupId" &&
        key !== "service" &&
        key !== "formatSize" &&
        key !== "ca"
      ) {
        // console.log(translations[value]);
        console.log(value);
        item[key] = translations[value];
      }
    }
  }
  return arr;
}
const enc = decoded(encoded);
console.log(enc);
