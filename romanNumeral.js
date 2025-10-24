function romanToInt(s) {
  const v = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  if (!s || typeof s !== 'string') throw new Error('Input must be a non-empty string');
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = v[s[i]];
    const next = v[s[i+1]];
    if (curr === undefined) throw new Error(`Invalid Roman numeral: "${s[i]}"`);
    total += next && curr < next ? -curr : curr; 
    //creating a note here so that i can run a commit and have some changes
    //heres some more notes
    //another note to make a new commit
  }
  return total;
}
module.exports = { romanToInt };
EOF