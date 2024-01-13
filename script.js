const encoderMap = {
    'a': '0b',
    'b': '1c',
    'c': '2d',
    'd': '3e',
    'e': '4f',
    'f': '5g',
    'g': '6h',
    'h': '7i',
    'i': '8j',
    'j': '9k',
    'k': 'al',
    'l': 'bm',
    'm': 'cn',
    'n': 'do',
    'o': 'ep',
    'p': 'fq',
    'q': 'gr',
    'r': 'hs',
    's': 'it',
    't': 'ju',
    'u': 'kv',
    'v': 'lw',
    'w': 'mx',
    'x': 'ny',
    'y': 'oz',
    'z': 'pA',
    ' ': 'qB',
    '!': 'rC',
    '@': 'sD',
    '#': 'tE',
    '$': 'uF',
    '%': 'vG',
    '^': 'wH',
    '&': 'xI',
    '*': 'yJ',
    '(': 'zK',
    ')': 'AM',
    '_': 'BN',
    '-': 'CO',
    '+': 'DP',
    '=': 'EQ',
    '{': 'FR',
    '}': 'GS',
    '"': 'HT',
    "'": 'IU',
    ':': 'JV',
    ';': 'KW',
    '?': 'LX',
    '<': 'MY',
    '>': 'NZ',
    ',': 'OA',
    '.': 'PB',
  };
  
  
  const decoderMap = {};
  for (const key in encoderMap) {
    const value = encoderMap[key];
    decoderMap[value] = key;
  }

  function encode() {
    const input = document.getElementById('input').value.toLowerCase();
    let encodedText = '';

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const encodedChar = encoderMap[char] || char;
      encodedText += encodedChar;
    }

    document.getElementById('output').value = encodedText;
  }

  function decode() {
    const input = document.getElementById('input').value;
    let decodedText = '';

    for (let i = 0; i < input.length; i += 2) {
      const encodedChar = input.substring(i, i + 2);
      const decodedChar = decoderMap[encodedChar] || encodedChar;
      decodedText += decodedChar;
    }

    document.getElementById('output').value = decodedText;
  }

  function copyToClipboard() {
    const output = document.getElementById('output');
    output.select();
    output.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand('copy');
    alert('Text copied to clipboard!');
  }

  
