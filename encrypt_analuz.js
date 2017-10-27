function encrypt_analuz(leString) {
  let inputString = leString.split(''); // to prevent mutations
  let leSpanishTwist = '';
  leSpanishTwist = inputString.reverse();
  leSpanishTwist = leSpanishTwist.join('') + 'chachacha';
  return leSpanishTwist;
}
