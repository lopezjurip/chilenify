'use strict';

const vowels = ['A','E','I','O','U'];

const matches = [
  [/hola/gi, 'wena'],
  [/mujer/gi, 'bellaka'],
  [/hombre/gi, 'bellako'],
  [/mina/gi, 'washa'],
  [/minitas/gi, 'washitas'],
  [/bakan/gi, 'del korte'],
  [/bacan/gi, 'del korte'],
  [/bkn/gi, 'del korte'],
  [/arregla/gi, 'azicala'],
  [/fino/gi, 'fino y elegante'],
  [/bailar/gi, 'perrear'],
  [/beso/gi, 'kiss'],
  [/besito/gi, 'lanwetazo'],
  [/compadre/gi, 'socio'],
  [/en serio/gi, 'la pulenta'],
  [/en serio/gi, 'la pulenta'],
  [/cacha /gi, 'sapea '],
  [/buena /gi, 'wena '],
  [/destacado/gi, 'connotado'],
  [/script/gi, 'scrip'],
];

export default function chilenify(string, { perv } = { perv: false }) {
  string = matches.reduce(
    (current, [key, val]) => current.replace(key, val),
    string.toLowerCase() // intitial
  );

  if (perv) string = string.toUpperCase();
  else string = string.toLowerCase();

  let result = string.split().reduce((char, current) => {
    if (perv) {
      const isVowel = vowels.includes(char);
      if (isVowel) return current += prettyChar(char.toLowerCase(), perv);
      else return current += prettyChar(char, perv);
    }
    return current += prettyChar(char, perv);
  }, '');

  if (result.length > 10) {
    if (!perv) result += ' \xF3\xE8z\xED\xED';
    else result += ' m\xE1Zn\xE1\xE1t\xE8d\xED\xEDgh\xF3 \xF3\xE8z\xED\xED';
  }
  return result;
}

function prettyChar(char ,perv) {
  switch (char) {
    case 'a':
      return '\xE1\xE1';
    case 'e':
      return '\xE8';
    case 'i':
      return '\xED\xED\xED';
    case 'o':
      return '\xF3';
    case 'u':
      return '\xFA\xFA';
    case 'A':
        return '\xC0';
    case 'E':
        return '\xC8';
    case 'I':
        return '\xCD\xCD\xCD';
    case 'O':
        return '\xD3';
    case 'U':
        return '\xDA';
    default: {
      if (perv) {
        if (char == 'S' || char == 's') return 'z';
        else if (char == 'H' || char == 'h') return '';
        else if (char == 'R' || char == 'r') return 'r';
        else if (char == 'V' || char == 'v') return 'b';
        else if (char == 'B' || char == 'b') return 'v';
      }
      return char;
    }
  }
}
