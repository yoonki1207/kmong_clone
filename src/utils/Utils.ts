export const toKorChars = (str: string) => {
  var cCho = [
      "ㄱ",
      "ㄲ",
      "ㄴ",
      "ㄷ",
      "ㄸ",
      "ㄹ",
      "ㅁ",
      "ㅂ",
      "ㅃ",
      "ㅅ",
      "ㅆ",
      "ㅇ",
      "ㅈ",
      "ㅉ",
      "ㅊ",
      "ㅋ",
      "ㅌ",
      "ㅍ",
      "ㅎ",
    ],
    cJung = [
      "ㅏ",
      "ㅐ",
      "ㅑ",
      "ㅒ",
      "ㅓ",
      "ㅔ",
      "ㅕ",
      "ㅖ",
      "ㅗ",
      "ㅘ",
      "ㅙ",
      "ㅚ",
      "ㅛ",
      "ㅜ",
      "ㅝ",
      "ㅞ",
      "ㅟ",
      "ㅠ",
      "ㅡ",
      "ㅢ",
      "ㅣ",
    ],
    cJong = [
      "",
      "ㄱ",
      "ㄲ",
      "ㄳ",
      "ㄴ",
      "ㄵ",
      "ㄶ",
      "ㄷ",
      "ㄹ",
      "ㄺ",
      "ㄻ",
      "ㄼ",
      "ㄽ",
      "ㄾ",
      "ㄿ",
      "ㅀ",
      "ㅁ",
      "ㅂ",
      "ㅄ",
      "ㅅ",
      "ㅆ",
      "ㅇ",
      "ㅈ",
      "ㅊ",
      "ㅋ",
      "ㅌ",
      "ㅍ",
      "ㅎ",
    ],
    cho,
    jung,
    jong;

  var cnt = str.length,
    chars = [],
    cCode;
  for (var i = 0; i < cnt; i++) {
    cCode = str.charCodeAt(i);
    if (cCode == 32) {
      chars.push(" ");
      continue;
    } // 한글이 아닌 경우
    if (cCode < 0xac00 || cCode > 0xd7a3) {
      chars.push(str.charAt(i));
      continue;
    }
    cCode = str.charCodeAt(i) - 0xac00;

    jong = cCode % 28;
    // 종성
    jung = ((cCode - jong) / 28) % 21;

    // 중성
    cho = ((cCode - jong) / 28 - jung) / 21;
    // 초성

    //기본 코드 테스트가 ㅌㅔㅅ-ㅌ- 형식으로 저장됨
    // chars.push(cCho[cho], cJung[jung]);
    // if (cJong[jong] !== '') {
    //     chars.push(cJong[jong]);
    //     }

    // 이부분을 원하는 방향으로 바꿈.
    // 테스트라는 문장이
    // ㅌ,ㅔ,ㅅ,-,ㅌ,- 형식으로 저장되던 코드를
    // ㅌ,테,ㅅ,스,ㅌ,트 형식으로 저장되도록함 (타이핑효과를 위해서)
    chars.push(cCho[cho]);
    chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28));
    if (cJong[jong] !== "") {
      chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28 + jong));
    }
  }

  return chars;
};
//https://gahyun-web-diary.tistory.com/181
