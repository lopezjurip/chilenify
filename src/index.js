'use strict';

export default function chilenify(aString) {
  aString = aString.toLowerCase();
  aString = aString.replace(/hola/gi,"wena");
  aString = aString.replace(/mujer/gi,"bellaka");
  aString = aString.replace(/hombre/gi,"bellako");
  aString = aString.replace(/mina/gi,"washa");
  aString = aString.replace(/minitas/gi,"washitas");
  aString = aString.replace(/bakan/gi,"del korte");
  aString = aString.replace(/bacan/gi,"del korte");
  aString = aString.replace(/bkn/gi,"del korte");
  aString = aString.replace(/arregla/gi,"azicala");
  aString = aString.replace(/fino/gi,"fino y elegante");
  aString = aString.replace(/bailar/gi,"perrear");
  aString = aString.replace(/beso/gi,"kiss");
  aString = aString.replace(/besito/gi,"lanwetazo");
  aString = aString.replace(/compadre/gi,"socio");
  aString = aString.replace(/en serio/gi,"la pulenta");
  aString = aString.replace(/en serio/gi,"la pulenta");
  aString = aString.replace(/cacha /gi,"sapea ");
  aString = aString.replace(/buena /gi,"wena ");
  aString = aString.replace(/destacado/gi,"connotado");
  aString = aString.replace(/script/gi,"scrip");
  var perv = true;
  if (perv) aString = aString.toUpperCase();
  else aString = aString.toLowerCase();
  var last = aString.length;
  var result = "";
  var vowels = new Array('A','E','I','O','U');
  for (var i = 0; i<last; i++) {
    if (perv) {
      var isVowel = false;
      for(let e in vowels){
            if(vowels[e] == aString.charAt(i)) isVowel = true;
      }
      if (isVowel) result += flChar(aString.charAt(i).toLowerCase());
      else result += flChar(aString.charAt(i));
    }
    else result += flChar(aString.charAt(i));
  }
  if (result.length > 10) {
    if (!perv) result += ' \xF3\xE8z\xED\xED';
    else result += ' m\xE1Zn\xE1\xE1t\xE8d\xED\xEDgh\xF3 \xF3\xE8z\xED\xED';
  }
  return result;
}

function flChar(c) {
  if (c == 'a') {
    return '\xE1\xE1';
  }
  else if (c == 'e') {
    return '\xE8';
  }
  else if (c == 'i') {
    return '\xED\xED\xED';
  }
  else if (c == 'o') {
    return '\xF3';
  }
  else if (c == 'u') {
    return '\xFA\xFA';
  }
  /* Soporte para mayusculas
  else if (c == 'A') {
    return '\xC0';
  }
  else if (c == 'E') {
    return '\xC8';
  }
  else if (c == 'I') {
    return '\xCD\xCD\xCD';
  }
  else if (c == 'O') {
    return '\xD3';
  }
  else if (c == 'U') {
    return '\xDA';
  }
  */
  var perv = true;
  if (perv) {
    if (c=='S'||c=='s') return 'z';
    else if (c=='H'||c=='h') return '';
    else if (c=='R'||c=='r') return 'r';
    else if (c=='V'||c=='v') return 'b';
    else if (c=='B'||c=='b') return 'v';
  }
  return c;
}
