// car and cat
verify(/(cat)|(car)/, ["my car", "bad cats"], ["camper", "high art"]);

// pop and prop
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);

// ferret, ferry, and ferrari
verify(
  /ferr(y|ari|et)/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]
);

// Any word ending in ious
verify(
  /\w+ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]
);

// A whitespace character followed by a period, comma, colon, or semicolon
verify(/ (\.|,|:|;)/, ["bad punctuation ."], ["escape the period"]);

// A word longer than six letters
verify(/\w{7}/, ["hottentottententen"], ["no", "hotten totten tenten"]);

// A word without the letter e (or E)
verify(
  /\b[^\We]+\b/i,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape", "BEET"]
);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
  for (let str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
}

let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."
