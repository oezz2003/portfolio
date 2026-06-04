import * as onceCore from "@once-ui-system/core";

console.log("Checking @once-ui-system/core exports:");
let undefinedCount = 0;
for (const [key, value] of Object.entries(onceCore)) {
  if (value === undefined) {
    console.log(`- ${key} is undefined`);
    undefinedCount++;
  } else {
    console.log(`- ${key} is defined`);
  }
}
console.log(`Total undefined exports: ${undefinedCount}`);
