// 7.6.1 Light, More Light (pg. 157)
const assert = require("assert");
const program = require("../challenges/7-6-1.light");

// 0 - means end of input. Omitting for these test cases since we're sending all inputs as an array.
const input = [3, 6241, 8191];
const expected = ["no", "yes", "no"];

const output = program(input);

assert.deepStrictEqual(output, expected);
