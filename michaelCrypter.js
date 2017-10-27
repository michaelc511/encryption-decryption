function michaelCrypter(theString) {
  let inputString = theString;
  let returnString = '';
  let obj = {
    a: 'b',
    b: 'c',
    c: 'd',
    d: 'e',
    f: 'i',
    g: 'j',
    h: 'k',
    i: 'l',
    j: 'm',
    k: 'n',
    l: 'o',
    m: 'p',
    n: 'q',
    o: 'r',
    p: 's',
    q: 't',
    r: 'u',
    s: 'v',
    t: 'w',
    u: 'x',
    v: 'y',
    w: 'z',
    x: 'f',
    y: 'g',
    z: 'h'
  };

  let arr = inputString.split('');
  arr.forEach(element => {
    returnString += obj[element];
  });

  return returnString;
}
