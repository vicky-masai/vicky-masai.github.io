import { useToast } from "@chakra-ui/react";
import "./Fancy.css";
import React, { useState } from "react";
import Backlink from "./Backlink";
import { useEffect } from "react";
import AdSenseComponent from "./AdSenseComponent";
function Fancy() {
  const toast = useToast();
  const [text, setText] = useState("");
  const [tt, setTt] = useState("");
  const [fancyText, setFancyText] = useState("");
  const [fancyText2, setFancyText2] = useState("");
  const [fancyText3, setFancyText3] = useState("");
  const [fancyText4, setFancyText4] = useState("");
  const [fancyText5, setFancyText5] = useState("");
  const [fancyText6, setFancyText6] = useState("");
  const [fancyText7, setFancyText7] = useState("");
  const [fancyText8, setFancyText8] = useState("");
  const [fancyText9, setFancyText9] = useState("");
  const [fancyText10, setFancyText10] = useState("");
  const [fancyText11, setFancyText11] = useState("");
  const [fancyText12, setFancyText12] = useState("");
  const [fancyText13, setFancyText13] = useState("");
  const [fancyText14, setFancyText14] = useState("");
  const [fancyText15, setFancyText15] = useState("");
  const [fancyText16, setFancyText16] = useState("");
  const [fancyText17, setFancyText17] = useState("");
  const [fancyText18, setFancyText18] = useState("");
  const [fancyText19, setFancyText19] = useState("");
  const [fancyText20, setFancyText20] = useState("");
  const [fancyText21, setFancyText21] = useState("");
  const [fancyText22, setFancyText22] = useState("");
  const [fancyText23, setFancyText23] = useState("");
  const [fancyText24, setFancyText24] = useState("");
  const [fancyText25, setFancyText25] = useState("");
  const [fancyText26, setFancyText26] = useState("");
  const [fancyText27, setFancyText27] = useState("");
  const [fancyText28, setFancyText28] = useState("");

  const fancyLetters = {
    a: "a͓̽",
    b: "b͓̽",
    c: "c͓̽",
    d: "d͓̽",
    e: "e͓̽",
    f: "f͓̽",
    g: "g͓̽",
    h: "h͓̽",
    i: "i͓̽",
    j: "j͓̽",
    k: "k͓̽",
    l: "l͓̽",
    m: "m͓̽",
    n: "n͓̽",
    o: "o͓̽",
    p: "p͓̽",
    q: "q͓̽",
    r: "r͓̽",
    s: "s͓̽",
    t: "t͓̽",
    u: "u͓̽",
    v: "v͓̽",
    w: "w͓̽",
    x: "x͓̽",
    y: "y͓̽",
    z: "z͓̽",
  };
  const fancy2 = {
    a: "𝓪",
    b: "𝓫",
    c: "𝓬",
    d: "𝓭",
    e: "𝓮",
    f: "𝓯",
    g: "𝓰",
    h: "𝓱",
    i: "𝓲",
    j: "𝓳",
    k: "𝓴",
    l: "𝓵",
    m: "𝓶",
    n: "𝓷",
    o: "𝓸",
    p: "𝓹",
    q: "𝓺",
    r: "𝓻",
    s: "𝓼",
    t: "𝓽",
    u: "𝓾",
    v: "𝓿",
    w: "𝔀",
    x: "𝔁",
    y: "𝔂",
    z: "𝔃",
  };

  const fancy3 = {
    a: "Д",
    b: "Б",
    c: "C",
    d: "D",
    e: "Ξ",
    f: "F",
    g: "G",
    h: "H",
    i: "I",
    j: "J",
    k: "Ҝ",
    l: "L",
    m: "M",
    n: "И",
    o: "Ф",
    p: "P",
    q: "Ǫ",
    r: "Я",
    s: "S",
    t: "Γ",
    u: "Ц",
    v: "V",
    w: "Щ",
    x: "Ж",
    y: "У",
    z: "Z",
  };

  const fancy4 = {
    a: "𝒶",
    b: "𝒷",
    c: "𝒸",
    d: "𝒹",
    e: "𝑒",
    f: "𝒻",
    g: "𝑔",
    h: "𝒽",
    i: "𝒾",
    j: "𝒿",
    k: "𝓀",
    l: "𝓁",
    m: "𝓂",
    n: "𝓃",
    o: "𝑜",
    p: "𝓅",
    q: "𝓆",
    r: "𝓇",
    s: "𝓈",
    t: "𝓉",
    u: "𝓊",
    v: "𝓋",
    w: "𝓌",
    x: "𝓍",
    y: "𝓎",
    z: "𝓏",
  };
  const fancy5 = {
    a: "𝕒",
    b: "𝕓",
    c: "𝕔",
    d: "𝕕",
    e: "𝕖",
    f: "𝕗",
    g: "𝕘",
    h: "𝕙",
    i: "𝕚",
    j: "𝕛",
    k: "𝕜",
    l: "𝕝",
    m: "𝕞",
    n: "𝕟",
    o: "𝕠",
    p: "𝕡",
    q: "𝕢",
    r: "𝕣",
    s: "𝕤",
    t: "𝕥",
    u: "𝕦",
    v: "𝕧",
    w: "𝕨",
    x: "𝕩",
    y: "𝕪",
    z: "𝕫",
  };
  const fancy6 = {
    a: "𝘢",
    b: "𝘣",
    c: "𝘤",
    d: "𝘥",
    e: "𝘦",
    f: "𝘧",
    g: "𝘨",
    h: "𝘩",
    i: "𝘪",
    j: "𝘫",
    k: "𝘬",
    l: "𝘭",
    m: "𝘮",
    n: "𝘯",
    o: "𝘰",
    p: "𝘱",
    q: "𝘲",
    r: "𝘳",
    s: "𝘴",
    t: "𝘵",
    u: "𝘶",
    v: "𝘷",
    w: "𝘸",
    x: "𝘹",
    y: "𝘺",
    z: "𝘻",
  };
  const fancy7 = {
    a: "𝙖",
    b: "𝙗",
    c: "𝙘",
    d: "𝙙",
    e: "𝙚",
    f: "𝙛",
    g: "𝙜",
    h: "𝙝",
    i: "𝙞",
    j: "𝙟",
    k: "𝙠",
    l: "𝙡",
    m: "𝙢",
    n: "𝙣",
    o: "𝙤",
    p: "𝙥",
    q: "𝙦",
    r: "𝙧",
    s: "𝙨",
    t: "𝙩",
    u: "𝙪",
    v: "𝙫",
    w: "𝙬",
    x: "𝙭",
    y: "𝙮",
    z: "𝙯",
  };

  const fancy8 = {
    a: "𝚊",
    b: "𝚋",
    c: "𝚌",
    d: "𝚍",
    e: "𝚎",
    f: "𝚏",
    g: "𝚐",
    h: "𝚑",
    i: "𝚒",
    j: "𝚓",
    k: "𝚔",
    l: "𝚕",
    m: "𝚖",
    n: "𝚗",
    o: "𝚘",
    p: "𝚙",
    q: "𝚚",
    r: "𝚛",
    s: "𝚜",
    t: "𝚝",
    u: "𝚞",
    v: "𝚟",
    w: "𝚠",
    x: "𝚡",
    y: "𝚢",
    z: "𝚣",
  };

  const fancy9 = {
    a: "ⓐ",
    b: "ⓑ",
    c: "ⓒ",
    d: "ⓓ",
    e: "ⓔ",
    f: "ⓕ",
    g: "ⓖ",
    h: "ⓗ",
    i: "ⓘ",
    j: "ⓙ",
    k: "ⓚ",
    l: "ⓛ",
    m: "ⓜ",
    n: "ⓝ",
    o: "ⓞ",
    p: "ⓟ",
    q: "ⓠ",
    r: "ⓡ",
    s: "ⓢ",
    t: "ⓣ",
    u: "ⓤ",
    v: "ⓥ",
    w: "ⓦ",
    x: "ⓧ",
    y: "ⓨ",
    z: "ⓩ",
  };
  const fancy10 = {
    a: "🅰",
    b: "🅱",
    c: "🅲",
    d: "🅳",
    e: "🅴",
    f: "🅵",
    g: "🅶",
    h: "🅷",
    i: "🅸",
    j: "🅹",
    k: "🅺",
    l: "🅻",
    m: "🅼",
    n: "🅽",
    o: "🅾",
    p: "🅿",
    q: "🆀",
    r: "🆁",
    s: "🆂",
    t: "🆃",
    u: "🆄",
    v: "🆅",
    w: "🆆",
    x: "🆇",
    y: "🆈",
    z: "🆉",
  };
  const fancy11 = {
    a: "ᗩ",
    b: "ᗷ",
    c: "ᑕ",
    d: "ᗪ",
    e: "ᗴ",
    f: "ᖴ",
    g: "Ǥ",
    h: "ᕼ",
    i: "Ꭵ",
    j: "ᒎ",
    k: "ᛕ",
    l: "ᒪ",
    m: "ᗰ",
    n: "ᑎ",
    o: "ᗝ",
    p: "ᑭ",
    q: "Ɋ",
    r: "ᖇ",
    s: "ᔕ",
    t: "丅",
    u: "ᑌ",
    v: "ᐯ",
    w: "ᗯ",
    x: "᙭",
    y: "Ƴ",
    z: "乙",
  };
  const fancy12 = {
    a: "ａ",
    b: "ｂ",
    c: "ｃ",
    d: "ｄ",
    e: "ｅ",
    f: "ｆ",
    g: "ｇ",
    h: "ｈ",
    i: "ｉ",
    j: "ｊ",
    k: "ｋ",
    l: "ｌ",
    m: "ｍ",
    n: "ｎ",
    o: "ｏ",
    p: "ｐ",
    q: "ｑ",
    r: "ｒ",
    s: "ｓ",
    t: "ｔ",
    u: "ｕ",
    v: "ｖ",
    w: "ｗ",
    x: "ｘ",
    y: "ｙ",
    z: "ｚ",
  };
  const fancy13 = {
    a: "𝐚",
    b: "𝐛",
    c: "𝐜",
    d: "𝐝",
    e: "𝐞",
    f: "𝐟",
    g: "𝐠",
    h: "𝐡",
    i: "𝐢",
    j: "𝐣",
    k: "𝐤",
    l: "𝐥",
    m: "𝐦",
    n: "𝐧",
    o: "𝐨",
    p: "𝐩",
    q: "𝐪",
    r: "𝐫",
    s: "𝐬",
    t: "𝐭",
    u: "𝐮",
    v: "𝐯",
    w: "𝐰",
    x: "𝐱",
    y: "𝐲",
    z: "𝐳",
  };
  const fancy14 = {
    a: "𝘢",
    b: "𝘣",
    c: "𝘤",
    d: "𝘥",
    e: "𝘦",
    f: "𝘧",
    g: "𝘨",
    h: "𝘩",
    i: "𝘪",
    j: "𝘫",
    k: "𝘬",
    l: "𝘭",
    m: "𝘮",
    n: "𝘯",
    o: "𝘰",
    p: "𝘱",
    q: "𝘲",
    r: "𝘳",
    s: "𝘴",
    t: "𝘵",
    u: "𝘶",
    v: "𝘷",
    w: "𝘸",
    x: "𝘹",
    y: "𝘺",
    z: "𝘻",
  };
  const fancy15 = {
    a: "𝙖",
    b: "𝙗",
    c: "𝙘",
    d: "𝙙",
    e: "𝙚",
    f: "𝙛",
    g: "𝙜",
    h: "𝙝",
    i: "𝙞",
    j: "𝙟",
    k: "𝙠",
    l: "𝙡",
    m: "𝙢",
    n: "𝙣",
    o: "𝙤",
    p: "𝙥",
    q: "𝙦",
    r: "𝙧",
    s: "𝙨",
    t: "𝙩",
    u: "𝙪",
    v: "𝙫",
    w: "𝙬",
    x: "𝙭",
    y: "𝙮",
    z: "𝙯",
  };

  const fancy16 = {
    a: "𝚊",
    b: "𝚋",
    c: "𝚌",
    d: "𝚍",
    e: "𝚎",
    f: "𝚏",
    g: "𝚐",
    h: "𝚑",
    i: "𝚒",
    j: "𝚓",
    k: "𝚔",
    l: "𝚕",
    m: "𝚖",
    n: "𝚗",
    o: "𝚘",
    p: "𝚙",
    q: "𝚚",
    r: "𝚛",
    s: "𝚜",
    t: "𝚝",
    u: "𝚞",
    v: "𝚟",
    w: "𝚠",
    x: "𝚡",
    y: "𝚢",
    z: "𝚣",
  };
  const fancy17 = {
    a: "ⓐ",
    b: "ⓑ",
    c: "ⓒ",
    d: "ⓓ",
    e: "ⓔ",
    f: "ⓕ",
    g: "ⓖ",
    h: "ⓗ",
    i: "ⓘ",
    j: "ⓙ",
    k: "ⓚ",
    l: "ⓛ",
    m: "ⓜ",
    n: "ⓝ",
    o: "ⓞ",
    p: "ⓟ",
    q: "ⓠ",
    r: "ⓡ",
    s: "ⓢ",
    t: "ⓣ",
    u: "ⓤ",
    v: "ⓥ",
    w: "ⓦ",
    x: "ⓧ",
    y: "ⓨ",
    z: "ⓩ",
  };
  const fancy18 = {
    a: "🅰",
    b: "🅱",
    c: "🅲",
    d: "🅳",
    e: "🅴",
    f: "🅵",
    g: "🅶",
    h: "🅷",
    i: "🅸",
    j: "🅹",
    k: "🅺",
    l: "🅻",
    m: "🅼",
    n: "🅽",
    o: "🅾",
    p: "🅿",
    q: "🆀",
    r: "🆁",
    s: "🆂",
    t: "🆃",
    u: "🆄",
    v: "🆅",
    w: "🆆",
    x: "🆇",
    y: "🆈",
    z: "🆉",
  };

  const fancy19 = {
    a: "ᗩ",
    b: "ᗷ",
    c: "ᑕ",
    d: "ᗪ",
    e: "ᗴ",
    f: "ᖴ",
    g: "Ǥ",
    h: "ᕼ",
    i: "Ꭵ",
    j: "ᒎ",
    k: "ᛕ",
    l: "ᒪ",
    m: "ᗰ",
    n: "ᑎ",
    o: "ᗝ",
    p: "ᑭ",
    q: "Ɋ",
    r: "ᖇ",
    s: "ᔕ",
    t: "丅",
    u: "ᑌ",
    v: "ᐯ",
    w: "ᗯ",
    x: "᙭",
    y: "Ƴ",
    z: "乙",
  };
  const fancy20 = {
    a: "ａ",
    b: "ｂ",
    c: "ｃ",
    d: "ｄ",
    e: "ｅ",
    f: "ｆ",
    g: "ｇ",
    h: "ｈ",
    i: "ｉ",
    j: "ｊ",
    k: "ｋ",
    l: "ｌ",
    m: "ｍ",
    n: "ｎ",
    o: "ｏ",
    p: "ｐ",
    q: "ｑ",
    r: "ｒ",
    s: "ｓ",
    t: "ｔ",
    u: "ｕ",
    v: "ｖ",
    w: "ｗ",
    x: "ｘ",
    y: "ｙ",
    z: "ｚ",
  };
  const fancy21 = {
    a: "𝐚",
    b: "𝐛",
    c: "𝐜",
    d: "𝐝",
    e: "𝐞",
    f: "𝐟",
    g: "𝐠",
    h: "𝐡",
    i: "𝐢",
    j: "𝐣",
    k: "𝐤",
    l: "𝐥",
    m: "𝐦",
    n: "𝐧",
    o: "𝐨",
    p: "𝐩",
    q: "𝐪",
    r: "𝐫",
    s: "𝐬",
    t: "𝐭",
    u: "𝐮",
    v: "𝐯",
    w: "𝐰",
    x: "𝐱",
    y: "𝐲",
    z: "𝐳",
  };
  const fancy22 = {
    a: "z",
    b: "ʎ",
    c: "x",
    d: "ʍ",
    e: "ʌ",
    f: "n",
    g: "ʇ",
    h: "s",
    i: "ɹ",
    j: "b",
    k: "d",
    l: "o",
    m: "u",
    n: "ɯ",
    o: "l",
    p: "ʞ",
    q: "ɾ",
    r: "ı",
    s: "ɥ",
    t: "ɓ",
    u: "ɟ",
    v: "ǝ",
    w: "p",
    x: "ɔ",
    y: "q",
    z: "ɐ",
  };
  const fancy23 = {
    a: "ɐ",
    b: "q",
    c: "ɔ",
    d: "p",
    e: "ǝ",
    f: "ɟ",
    g: "ƃ",
    h: "ɥ",
    i: "ᴉ",
    j: "ɾ",
    k: "ʞ",
    l: "l",
    m: "ɯ",
    n: "u",
    o: "o",
    p: "d",
    q: "b",
    r: "ɹ",
    s: "s",
    t: "ʇ",
    u: "n",
    v: "ʌ",
    w: "ʍ",
    x: "x",
    y: "ʎ",
    z: "z",
  };
  const fancy24 = {
    a: "🄰",
    b: "🄱",
    c: "🄲",
    d: "🄳",
    e: "🄴",
    f: "🄵",
    g: "🄶",
    h: "🄷",
    i: "🄸",
    j: "🄹",
    k: "🄺",
    l: "🄻",
    m: "🄼",
    n: "🄽",
    o: "🄾",
    p: "🄿",
    q: "🅀",
    r: "🅁",
    s: "🅂",
    t: "🅃",
    u: "🅄",
    v: "🅅",
    w: "🅆",
    x: "🅇",
    y: "🅈",
    z: "🅉",
  };
  const fancy25 = {
    a: "ᴀ",
    b: "ʙ",
    c: "ᴄ",
    d: "ᴅ",
    e: "ᴇ",
    f: "ғ",
    g: "ɢ",
    h: "ʜ",
    i: "ɪ",
    j: "ᴊ",
    k: "ᴋ",
    l: "ʟ",
    m: "ᴍ",
    n: "ɴ",
    o: "ᴏ",
    p: "ᴘ",
    q: "ǫ",
    r: "ʀ",
    s: "s",
    t: "ᴛ",
    u: "ᴜ",
    v: "ᴠ",
    w: "ᴡ",
    x: "x",
    y: "ʏ",
    z: "ᴢ",
  };

  const fancy26 = {
    a: "₳",
    b: "฿",
    c: "₵",
    d: "Đ",
    e: "Ɇ",
    f: "₣",
    g: "₲",
    h: "Ⱨ",
    i: "ł",
    j: "J",
    k: "₭",
    l: "Ⱡ",
    m: "₥",
    n: "₦",
    o: "Ø",
    p: "₱",
    q: "Q",
    r: "Ɽ",
    s: "₴",
    t: "₮",
    u: "Ʉ",
    v: "V",
    w: "₩",
    x: "Ӿ",
    y: "Ɏ",
    z: "Ⱬ",
  };
  const fancy27 = {
    a: "α",
    b: "в",
    c: "¢",
    d: "∂",
    e: "є",
    f: "f",
    g: "g",
    h: "н",
    i: "ι",
    j: "נ",
    k: "к",
    l: "ℓ",
    m: "м",
    n: "и",
    o: "σ",
    p: "ρ",
    q: "q",
    r: "я",
    s: "ѕ",
    t: "т",
    u: "υ",
    v: "ν",
    w: "ω",
    x: "χ",
    y: "у",
    z: "z",
  };

  const fancy28 = {
    a: "𝖆",
    b: "𝖇",
    c: "𝖈",
    d: "𝖉",
    e: "𝖊",
    f: "𝖋",
    g: "𝖌",
    h: "𝖍",
    i: "𝖎",
    j: "𝖏",
    k: "𝖐",
    l: "𝖑",
    m: "𝖒",
    n: "𝖓",
    o: "𝖔",
    p: "𝖕",
    q: "𝖖",
    r: "𝖗",
    s: "𝖘",
    t: "𝖙",
    u: "𝖚",
    v: "𝖛",
    w: "𝖜",
    x: "𝖝",
    y: "𝖞",
    z: "𝖟",
  };

  function normal(text) {
    let fancy_text = text;
    for (const letter in fancyLetters) {
      fancy_text = fancy_text.replace(
        new RegExp(letter, "gi"),
        fancyLetters[letter]
      );
    }
    setFancyText(fancy_text);

    let fancy_text2 = text;
    for (const letter in fancy2) {
      fancy_text2 = fancy_text2.replace(
        new RegExp(letter, "gi"),
        fancy2[letter]
      );
    }
    setFancyText2(fancy_text2);

    let fancy_text3 = text;
    for (const letter in fancy3) {
      fancy_text3 = fancy_text3.replace(
        new RegExp(letter, "gi"),
        fancy3[letter]
      );
    }
    setFancyText3(fancy_text3);

    let fancy_text4 = text;
    for (const letter in fancy4) {
      fancy_text4 = fancy_text4.replace(
        new RegExp(letter, "gi"),
        fancy4[letter]
      );
    }
    setFancyText4(fancy_text4);

    let fancy_text5 = text;
    for (const letter in fancy5) {
      fancy_text5 = fancy_text5.replace(
        new RegExp(letter, "gi"),
        fancy5[letter]
      );
    }
    setFancyText5(fancy_text5);

    let fancy_text6 = text;
    for (const letter in fancy6) {
      fancy_text6 = fancy_text6.replace(
        new RegExp(letter, "gi"),
        fancy6[letter]
      );
    }
    setFancyText6(fancy_text6);

    let fancy_text7 = text;
    for (const letter in fancy7) {
      fancy_text7 = fancy_text.replace(
        new RegExp(letter, "gi"),
        fancy7[letter]
      );
    }
    setFancyText7(fancy_text7);

    let fancy_text8 = text;
    for (const letter in fancy8) {
      fancy_text3 = fancy_text8.replace(
        new RegExp(letter, "gi"),
        fancy8[letter]
      );
    }
    setFancyText8(fancy_text8);

    let fancy_text9 = text;
    for (const letter in fancy9) {
      fancy_text9 = fancy_text9.replace(
        new RegExp(letter, "gi"),
        fancy9[letter]
      );
    }
    setFancyText9(fancy_text9);

    let fancy_text10 = text;
    for (const letter in fancy10) {
      fancy_text10 = fancy_text10.replace(
        new RegExp(letter, "gi"),
        fancy10[letter]
      );
    }
    setFancyText10(fancy_text10);

    let fancy_text11 = text;
    for (const letter in fancy11) {
      fancy_text11 = fancy_text11.replace(
        new RegExp(letter, "gi"),
        fancy11[letter]
      );
    }
    setFancyText11(fancy_text11);

    let fancy_text12 = text;
    for (const letter in fancy12) {
      fancy_text12 = fancy_text12.replace(
        new RegExp(letter, "gi"),
        fancy12[letter]
      );
    }
    setFancyText12(fancy_text12);

    let fancy_text13 = text;
    for (const letter in fancy13) {
      fancy_text13 = fancy_text13.replace(
        new RegExp(letter, "gi"),
        fancy13[letter]
      );
    }
    setFancyText13(fancy_text13);

    let fancy_text14 = text;
    for (const letter in fancy14) {
      fancy_text14 = fancy_text14.replace(
        new RegExp(letter, "gi"),
        fancy14[letter]
      );
    }
    setFancyText14(fancy_text14);

    let fancy_text15 = text;
    for (const letter in fancy15) {
      fancy_text15 = fancy_text15.replace(
        new RegExp(letter, "gi"),
        fancy15[letter]
      );
    }
    setFancyText15(fancy_text15);

    let fancy_text16 = text;
    for (const letter in fancy16) {
      fancy_text16 = fancy_text16.replace(
        new RegExp(letter, "gi"),
        fancy16[letter]
      );
    }
    setFancyText16(fancy_text16);

    let fancy_text17 = text;
    for (const letter in fancy17) {
      fancy_text17 = fancy_text17.replace(
        new RegExp(letter, "gi"),
        fancy17[letter]
      );
    }
    setFancyText17(fancy_text17);

    let fancy_text18 = text;
    for (const letter in fancy18) {
      fancy_text18 = fancy_text18.replace(
        new RegExp(letter, "gi"),
        fancy18[letter]
      );
    }
    setFancyText18(fancy_text18);

    let fancy_text19 = text;
    for (const letter in fancy19) {
      fancy_text19 = fancy_text19.replace(
        new RegExp(letter, "gi"),
        fancy19[letter]
      );
    }
    setFancyText19(fancy_text19);

    let fancy_text20 = text;
    for (const letter in fancy20) {
      fancy_text20 = fancy_text20.replace(
        new RegExp(letter, "gi"),
        fancy20[letter]
      );
    }
    setFancyText20(fancy_text20);

    let fancy_text21 = text;
    for (const letter in fancy21) {
      fancy_text21 = fancy_text21.replace(
        new RegExp(letter, "gi"),
        fancy21[letter]
      );
    }
    setFancyText21(fancy_text21);

    let fancy_text22 = text;
    for (const letter in fancy22) {
      fancy_text22 = fancy_text22.replace(
        new RegExp(letter, "gi"),
        fancy22[letter]
      );
    }
    setFancyText22(fancy_text22);

    let fancy_text23 = text;
    for (const letter in fancy23) {
      fancy_text23 = fancy_text23.replace(
        new RegExp(letter, "gi"),
        fancy23[letter]
      );
    }
    setFancyText23(fancy_text23);

    let fancy_text24 = text;
    for (const letter in fancy24) {
      fancy_text24 = fancy_text24.replace(
        new RegExp(letter, "gi"),
        fancy24[letter]
      );
    }
    setFancyText24(fancy_text24);

    let fancy_text25 = text;
    for (const letter in fancy25) {
      fancy_text25 = fancy_text25.replace(
        new RegExp(letter, "gi"),
        fancy25[letter]
      );
    }
    setFancyText25(fancy_text25);

    let fancy_text26 = text;
    for (const letter in fancy26) {
      fancy_text26 = fancy_text26.replace(
        new RegExp(letter, "gi"),
        fancy26[letter]
      );
    }
    setFancyText26(fancy_text26);

    let fancy_text27 = text;
    for (const letter in fancy27) {
      fancy_text27 = fancy_text27.replace(
        new RegExp(letter, "gi"),
        fancy27[letter]
      );
    }
    setFancyText27(fancy_text27);

    let fancy_text28 = text;
    for (const letter in fancy28) {
      fancy_text28 = fancy_text28.replace(
        new RegExp(letter, "gi"),
        fancy28[letter]
      );
    }
    setFancyText28(fancy_text28);
  }

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    setTt(text);
    toast({
      title: text,
      description: "Copied",
      status: "success",
      duration: 900,
      isClosable: true,
      className: "bg-blue text-white",
    });
  };


  useEffect(()=>{
    normal("bgmi name generator")
  },[])
  return (
    <div className="mn">
      <center>
        {" "}
        <h2>{tt ? tt : "Bgmi Name Generator for Game User Name"}</h2>
      </center>
      <center><AdSenseComponent /></center>
      <center>
        {" "}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Vicky Paswan"
        />
      </center>
      <center>
        {" "}
        <button onClick={() => normal(text)}>Generate</button>
      </center>
      <center><AdSenseComponent /></center>

      <div
        className="mm"
        style={{
          height: "100%",
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px 0px",
          textAlign: "center",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <p
          style={{ borderTop: "1px solid white" }}
          onClick={(e) => copy(e.currentTarget.textContent)}
        >
          ꧁𓊈𒆜
          {fancyText12 ? fancyText12 : "ｆａｎｃｙ ｔｅｘｔ"}
          𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ
          {fancyText20 ? fancyText20 : "ｆａｎｃｙ ｔｅｘｔ"}
          ══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂
          {fancyText20 ? fancyText20 : "ｆａｎｃｙ ｔｅｘｔ"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText12 ? fancyText12 : "ｆａｎｃｙ ｔｅｘｔ"}
          𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄
          {fancyText20 ? fancyText20 : "ｆａｎｃｙ ｔｅｘｔ"}
          ▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬
          {fancyText20 ? fancyText20 : "ｆａｎｃｙ ｔｅｘｔ"}
          ☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒
          {fancyText20 ? fancyText20 : "ｆａｎｃｙ ｔｅｘｔ"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄
          {fancyText20 ? fancyText20 : "ｆａｎｃｙ ｔｅｘｔ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎
          {fancyText20 ? fancyText20 : "ｆａｎｃｙ ｔｅｘｔ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText20 ? fancyText20 : "ｆａｎｃｙ ｔｅｘｔ"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░
          {fancyText20 ? fancyText20 : "ｆａｎｃｙ ｔｅｘｔ"}
          ░▒▓█▇▆▅▄▃▂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒
          {fancyText20 ? fancyText20 : "ｆａｎｃｙ ｔｅｘｔ"}
          ༒𒆜꧂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒
          {fancyText ? fancyText : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText2 ? fancyText2 : "𝓯𝓪𝓷𝓬𝔂 𝓽𝓮𝔁𝓽༒"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText3 ? fancyText3 : "FДИCУ ΓΞЖΓ"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText4 ? fancyText4 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText5 ? fancyText5 : "𝕗𝕒𝕟𝕔𝕪 𝕥𝕖𝕩𝕥"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText6 ? fancyText6 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText7 ? fancyText7 : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText8 ? fancyText8 : "fancy text"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText9 ? fancyText9 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText10 ? fancyText10 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText11 ? fancyText11 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒
          {fancyText12 ? fancyText12 : "ｆａｎｃｙ ｔｅｘｔ"}
          ༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText13 ? fancyText13 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText14 ? fancyText14 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText15 ? fancyText15 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText16 ? fancyText16 : "𝚏𝚊𝚗𝚌𝚢 𝚝𝚎𝚡𝚝"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText17 ? fancyText17 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText18 ? fancyText18 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText19 ? fancyText19 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText21 ? fancyText21 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText22 ? fancyText22 : "ɯɐɯɔq ɓʌɔɓ"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText23 ? fancyText23 : "ɟɐnɔʎ ʇǝxʇ"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText24 ? fancyText24 : "🄵🄰🄽🄲🅈 🅃🄴🅇🅃"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText25 ? fancyText25 : "ғᴀɴᴄʏ ᴛᴇxᴛ"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText26 ? fancyText26 : "₣₳₦₵Ɏ ₮ɆӾ₮"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText27 ? fancyText27 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}༒𒆜꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𒆜༒{fancyText28 ? fancyText28 : "𝖋𝖆𝖓𝖈𝖞 𝖙𝖊𝖝𝖙"}༒𒆜꧂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText ? fancyText : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText2 ? fancyText2 : "𝓯𝓪𝓷𝓬𝔂 𝓽𝓮𝔁𝓽"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText3 ? fancyText3 : "FДИCУ ΓΞЖΓ"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText4 ? fancyText4 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText5 ? fancyText5 : "𝕗𝕒𝕟𝕔𝕪 𝕥𝕖𝕩𝕥"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText6 ? fancyText6 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}
          ░▒▓█▇▆▅▄▃▂
        </p>
        <center><AdSenseComponent /></center>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText7 ? fancyText7 : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText8 ? fancyText8 : "fancy text"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText9 ? fancyText9 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText10 ? fancyText10 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText11 ? fancyText11 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░
          {fancyText12 ? fancyText12 : "ｆａｎｃｙ ｔｅｘｔ"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText13 ? fancyText13 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText14 ? fancyText14 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText15 ? fancyText15 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText16 ? fancyText16 : "𝚏𝚊𝚗𝚌𝚢 𝚝𝚎𝚡𝚝"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText17 ? fancyText17 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}
          ░▒▓█▇▆▅▄▃▂
        </p>
        <center><AdSenseComponent /></center>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText18 ? fancyText18 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText19 ? fancyText19 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText21 ? fancyText21 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText22 ? fancyText22 : "ɯɐɯɔq ɓʌɔɓ"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText23 ? fancyText23 : "ɟɐnɔʎ ʇǝxʇ"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText24 ? fancyText24 : "🄵🄰🄽🄲🅈 🅃🄴🅇🅃"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText25 ? fancyText25 : "ғᴀɴᴄʏ ᴛᴇxᴛ"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText26 ? fancyText26 : "₣₳₦₵Ɏ ₮ɆӾ₮"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText27 ? fancyText27 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▂▃▄▅▆▇█▓▒░{fancyText28 ? fancyText28 : "𝖋𝖆𝖓𝖈𝖞 𝖙𝖊𝖝𝖙"}
          ░▒▓█▇▆▅▄▃▂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText ? fancyText : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText2 ? fancyText2 : "𝓯𝓪𝓷𝓬𝔂 𝓽𝓮𝔁𝓽"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText3 ? fancyText3 : "FДИCУ ΓΞЖΓ"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText4 ? fancyText4 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText5 ? fancyText5 : "𝕗𝕒𝕟𝕔𝕪 𝕥𝕖𝕩𝕥"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText6 ? fancyText6 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText7 ? fancyText7 : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText8 ? fancyText8 : "fancy text"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText9 ? fancyText9 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText10 ? fancyText10 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText11 ? fancyText11 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText12 ? fancyText12 : "ｆａｎｃｙ ｔｅｘｔ"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText13 ? fancyText13 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText14 ? fancyText14 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText15 ? fancyText15 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText16 ? fancyText16 : "𝚏𝚊𝚗𝚌𝚢 𝚝𝚎𝚡𝚝"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText17 ? fancyText17 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText18 ? fancyText18 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText19 ? fancyText19 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText21 ? fancyText21 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText22 ? fancyText22 : "ɯɐɯɔq ɓʌɔɓ"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText23 ? fancyText23 : "ɟɐnɔʎ ʇǝxʇ"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText24 ? fancyText24 : "🄵🄰🄽🄲🅈 🅃🄴🅇🅃"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText25 ? fancyText25 : "ғᴀɴᴄʏ ᴛᴇxᴛ"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText26 ? fancyText26 : "₣₳₦₵Ɏ ₮ɆӾ₮"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText27 ? fancyText27 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}◢
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ◤{fancyText28 ? fancyText28 : "𝖋𝖆𝖓𝖈𝖞 𝖙𝖊𝖝𝖙"}◢
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎
          {fancyText ? fancyText : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText2 ? fancyText2 : "𝓯𝓪𝓷𝓬𝔂 𝓽𝓮𝔁𝓽"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText3 ? fancyText3 : "FДИCУ ΓΞЖΓ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText4 ? fancyText4 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText5 ? fancyText5 : "𝕗𝕒𝕟𝕔𝕪 𝕥𝕖𝕩𝕥"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText6 ? fancyText6 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText7 ? fancyText7 : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText8 ? fancyText8 : "fancy text"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText9 ? fancyText9 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText10 ? fancyText10 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText11 ? fancyText11 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎
          {fancyText12 ? fancyText12 : "ｆａｎｃｙ ｔｅｘｔ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText13 ? fancyText13 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText14 ? fancyText14 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText15 ? fancyText15 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText16 ? fancyText16 : "𝚏𝚊𝚗𝚌𝚢 𝚝𝚎𝚡𝚝"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText17 ? fancyText17 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText18 ? fancyText18 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText19 ? fancyText19 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText21 ? fancyText21 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText22 ? fancyText22 : "ɯɐɯɔq ɓʌɔɓ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText23 ? fancyText23 : "ɟɐnɔʎ ʇǝxʇ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText24 ? fancyText24 : "🄵🄰🄽🄲🅈 🅃🄴🅇🅃"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText25 ? fancyText25 : "ғᴀɴᴄʏ ᴛᴇxᴛ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText26 ? fancyText26 : "₣₳₦₵Ɏ ₮ɆӾ₮"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText27 ? fancyText27 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          Vɪᴘ᭄☯︎{fancyText28 ? fancyText28 : "𝖋𝖆𝖓𝖈𝖞 𝖙𝖊𝖝𝖙"}࿐
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄
          {fancyText ? fancyText : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText2 ? fancyText2 : "𝓯𝓪𝓷𝓬𝔂 𝓽𝓮𝔁𝓽"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText3 ? fancyText3 : "FДИCУ ΓΞЖΓ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText4 ? fancyText4 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText5 ? fancyText5 : "𝕗𝕒𝕟𝕔𝕪 𝕥𝕖𝕩𝕥"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText6 ? fancyText6 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText7 ? fancyText7 : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText8 ? fancyText8 : "fancy text"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText9 ? fancyText9 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText10 ? fancyText10 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText11 ? fancyText11 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄
          {fancyText12 ? fancyText12 : "ｆａｎｃｙ ｔｅｘｔ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText13 ? fancyText13 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText14 ? fancyText14 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText15 ? fancyText15 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText16 ? fancyText16 : "𝚏𝚊𝚗𝚌𝚢 𝚝𝚎𝚡𝚝"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText17 ? fancyText17 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText18 ? fancyText18 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText19 ? fancyText19 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText21 ? fancyText21 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText22 ? fancyText22 : "ɯɐɯɔq ɓʌɔɓ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText23 ? fancyText23 : "ɟɐnɔʎ ʇǝxʇ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText24 ? fancyText24 : "🄵🄰🄽🄲🅈 🅃🄴🅇🅃"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText25 ? fancyText25 : "ғᴀɴᴄʏ ᴛᴇxᴛ"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText26 ? fancyText26 : "₣₳₦₵Ɏ ₮ɆӾ₮"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText27 ? fancyText27 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}࿐
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ༄ᶦᶰᵈ᭄{fancyText28 ? fancyText28 : "𝖋𝖆𝖓𝖈𝖞 𝖙𝖊𝖝𝖙"}࿐
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒
          {fancyText ? fancyText : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText2 ? fancyText2 : "𝓯𝓪𝓷𝓬𝔂 𝓽𝓮𝔁𝓽"}⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText3 ? fancyText3 : "FДИCУ ΓΞЖΓ"}⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText4 ? fancyText4 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText5 ? fancyText5 : "𝕗𝕒𝕟𝕔𝕪 𝕥𝕖𝕩𝕥"}⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText6 ? fancyText6 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText7 ? fancyText7 : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText8 ? fancyText8 : "fancy text"}⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText9 ? fancyText9 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText10 ? fancyText10 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText11 ? fancyText11 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒
          {fancyText12 ? fancyText12 : "ｆａｎｃｙ ｔｅｘｔ"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText13 ? fancyText13 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText14 ? fancyText14 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText15 ? fancyText15 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText16 ? fancyText16 : "𝚏𝚊𝚗𝚌𝚢 𝚝𝚎𝚡𝚝"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText17 ? fancyText17 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText18 ? fancyText18 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText19 ? fancyText19 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText21 ? fancyText21 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText22 ? fancyText22 : "ɯɐɯɔq ɓʌɔɓ"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText23 ? fancyText23 : "ɟɐnɔʎ ʇǝxʇ"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText24 ? fancyText24 : "🄵🄰🄽🄲🅈 🅃🄴🅇🅃"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText25 ? fancyText25 : "ғᴀɴᴄʏ ᴛᴇxᴛ"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText26 ? fancyText26 : "₣₳₦₵Ɏ ₮ɆӾ₮"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText27 ? fancyText27 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}
          ⁣༒💕💖꧂⁣
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁💖💞༒{fancyText28 ? fancyText28 : "𝖋𝖆𝖓𝖈𝖞 𝖙𝖊𝖝𝖙"}
          ⁣༒💕💖꧂⁣
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬
          {fancyText ? fancyText : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText2 ? fancyText2 : "𝓯𝓪𝓷𝓬𝔂 𝓽𝓮𝔁𝓽"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText3 ? fancyText3 : "FДИCУ ΓΞЖΓ"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText4 ? fancyText4 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText5 ? fancyText5 : "𝕗𝕒𝕟𝕔𝕪 𝕥𝕖𝕩𝕥"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText6 ? fancyText6 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText7 ? fancyText7 : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText8 ? fancyText8 : "fancy text"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText9 ? fancyText9 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText10 ? fancyText10 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText11 ? fancyText11 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬
          {fancyText12 ? fancyText12 : "ｆａｎｃｙ ｔｅｘｔ"}
          ☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText13 ? fancyText13 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText14 ? fancyText14 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText15 ? fancyText15 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText16 ? fancyText16 : "𝚏𝚊𝚗𝚌𝚢 𝚝𝚎𝚡𝚝"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText17 ? fancyText17 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText18 ? fancyText18 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText19 ? fancyText19 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText21 ? fancyText21 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText22 ? fancyText22 : "ɯɐɯɔq ɓʌɔɓ"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText23 ? fancyText23 : "ɟɐnɔʎ ʇǝxʇ"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText24 ? fancyText24 : "🄵🄰🄽🄲🅈 🅃🄴🅇🅃"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText25 ? fancyText25 : "ғᴀɴᴄʏ ᴛᴇxᴛ"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText26 ? fancyText26 : "₣₳₦₵Ɏ ₮ɆӾ₮"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText27 ? fancyText27 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}☬༒❤•༆꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁༆•❤༒☬{fancyText28 ? fancyText28 : "𝖋𝖆𝖓𝖈𝖞 𝖙𝖊𝖝𝖙"}☬༒❤•༆꧂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄
          {fancyText ? fancyText : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText2 ? fancyText2 : "𝓯𝓪𝓷𝓬𝔂 𝓽𝓮𝔁𝓽"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText3 ? fancyText3 : "FДИCУ ΓΞЖΓ"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText4 ? fancyText4 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText5 ? fancyText5 : "𝕗𝕒𝕟𝕔𝕪 𝕥𝕖𝕩𝕥"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText6 ? fancyText6 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText7 ? fancyText7 : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText8 ? fancyText8 : "fancy text"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText9 ? fancyText9 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText10 ? fancyText10 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText11 ? fancyText11 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄
          {fancyText12 ? fancyText12 : "ｆａｎｃｙ ｔｅｘｔ"}
          ▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText13 ? fancyText13 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText14 ? fancyText14 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText15 ? fancyText15 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText16 ? fancyText16 : "𝚏𝚊𝚗𝚌𝚢 𝚝𝚎𝚡𝚝"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText17 ? fancyText17 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText18 ? fancyText18 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText19 ? fancyText19 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText21 ? fancyText21 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText22 ? fancyText22 : "ɯɐɯɔq ɓʌɔɓ"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText23 ? fancyText23 : "ɟɐnɔʎ ʇǝxʇ"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText24 ? fancyText24 : "🄵🄰🄽🄲🅈 🅃🄴🅇🅃"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText25 ? fancyText25 : "ғᴀɴᴄʏ ᴛᴇxᴛ"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText26 ? fancyText26 : "₣₳₦₵Ɏ ₮ɆӾ₮"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText27 ? fancyText27 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}▀▄▀▄▀▄
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▀▄▀▄▀▄{fancyText28 ? fancyText28 : "𝖋𝖆𝖓𝖈𝖞 𝖙𝖊𝖝𝖙"}▀▄▀▄▀▄
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀{fancyText ? fancyText : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText2 ? fancyText2 : "𝓯𝓪𝓷𝓬𝔂 𝓽𝓮𝔁𝓽"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText3 ? fancyText3 : "FДИCУ ΓΞЖΓ"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText4 ? fancyText4 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText5 ? fancyText5 : "𝕗𝕒𝕟𝕔𝕪 𝕥𝕖𝕩𝕥"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText6 ? fancyText6 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText7 ? fancyText7 : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText8 ? fancyText8 : "fancy text"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText9 ? fancyText9 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText10 ? fancyText10 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText11 ? fancyText11 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText13 ? fancyText13 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText14 ? fancyText14 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText15 ? fancyText15 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText16 ? fancyText16 : "𝚏𝚊𝚗𝚌𝚢 𝚝𝚎𝚡𝚝"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText17 ? fancyText17 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText18 ? fancyText18 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText19 ? fancyText19 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText20 ? fancyText20 : "ｆａｎｃｙ ｔｅｘｔ"}
          𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText21 ? fancyText21 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText22 ? fancyText22 : "ɯɐɯɔq ɓʌɔɓ"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText23 ? fancyText23 : "ɟɐnɔʎ ʇǝxʇ"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText24 ? fancyText24 : "🄵🄰🄽🄲🅈 🅃🄴🅇🅃"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText25 ? fancyText25 : "ғᴀɴᴄʏ ᴛᴇxᴛ"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText26 ? fancyText26 : "₣₳₦₵Ɏ ₮ɆӾ₮"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText27 ? fancyText27 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}𓂀
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          𓂀 {fancyText28 ? fancyText28 : "𝖋𝖆𝖓𝖈𝖞 𝖙𝖊𝖝𝖙"}𓂀
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText ? fancyText : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText2 ? fancyText2 : "𝓯𝓪𝓷𝓬𝔂 𝓽𝓮𝔁𝓽"}⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText3 ? fancyText3 : "FДИCУ ΓΞЖΓ"}⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText4 ? fancyText4 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText5 ? fancyText5 : "𝕗𝕒𝕟𝕔𝕪 𝕥𝕖𝕩𝕥"}⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText6 ? fancyText6 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText7 ? fancyText7 : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText8 ? fancyText8 : "fancy text"}⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText9 ? fancyText9 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText10 ? fancyText10 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText11 ? fancyText11 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂
          {fancyText12 ? fancyText12 : "ｆａｎｃｙ ｔｅｘｔ"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText13 ? fancyText13 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText14 ? fancyText14 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText15 ? fancyText15 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText16 ? fancyText16 : "𝚏𝚊𝚗𝚌𝚢 𝚝𝚎𝚡𝚝"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText17 ? fancyText17 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText18 ? fancyText18 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText19 ? fancyText19 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText21 ? fancyText21 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText22 ? fancyText22 : "ɯɐɯɔq ɓʌɔɓ"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText23 ? fancyText23 : "ɟɐnɔʎ ʇǝxʇ"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText24 ? fancyText24 : "🄵🄰🄽🄲🅈 🅃🄴🅇🅃"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText25 ? fancyText25 : "ғᴀɴᴄʏ ᴛᴇxᴛ"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText26 ? fancyText26 : "₣₳₦₵Ɏ ₮ɆӾ₮"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText27 ? fancyText27 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}
          ⠐⢾░▒▓█{" "}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          █▓▒­░⡷⠂{fancyText28 ? fancyText28 : "𝖋𝖆𝖓𝖈𝖞 𝖙𝖊𝖝𝖙"}
          ⠐⢾░▒▓█{" "}
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText ? fancyText : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText2 ? fancyText2 : "𝓯𝓪𝓷𝓬𝔂 𝓽𝓮𝔁𝓽"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText3 ? fancyText3 : "FДИCУ ΓΞЖΓ"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText4 ? fancyText4 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText5 ? fancyText5 : "𝕗𝕒𝕟𝕔𝕪 𝕥𝕖𝕩𝕥"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText6 ? fancyText6 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText7 ? fancyText7 : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText8 ? fancyText8 : "fancy text"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText9 ? fancyText9 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText10 ? fancyText10 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText11 ? fancyText11 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ
          {fancyText12 ? fancyText12 : "ｆａｎｃｙ ｔｅｘｔ"}
          ══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText13 ? fancyText13 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText14 ? fancyText14 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText15 ? fancyText15 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText16 ? fancyText16 : "𝚏𝚊𝚗𝚌𝚢 𝚝𝚎𝚡𝚝"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText17 ? fancyText17 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText18 ? fancyText18 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText19 ? fancyText19 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText21 ? fancyText21 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText22 ? fancyText22 : "ɯɐɯɔq ɓʌɔɓ"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText23 ? fancyText23 : "ɟɐnɔʎ ʇǝxʇ"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText24 ? fancyText24 : "🄵🄰🄽🄲🅈 🅃🄴🅇🅃"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText25 ? fancyText25 : "ғᴀɴᴄʏ ᴛᴇxᴛ"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText26 ? fancyText26 : "₣₳₦₵Ɏ ₮ɆӾ₮"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText27 ? fancyText27 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}══━一
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ▄︻デ{fancyText28 ? fancyText28 : "𝖋𝖆𝖓𝖈𝖞 𝖙𝖊𝖝𝖙"}══━一
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText ? fancyText : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText2 ? fancyText2 : "𝓯𝓪𝓷𝓬𝔂 𝓽𝓮𝔁𝓽"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText3 ? fancyText3 : "FДИCУ ΓΞЖΓ"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText4 ? fancyText4 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText5 ? fancyText5 : "𝕗𝕒𝕟𝕔𝕪 𝕥𝕖𝕩𝕥"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText6 ? fancyText6 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText7 ? fancyText7 : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText8 ? fancyText8 : "fancy text"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText9 ? fancyText9 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText10 ? fancyText10 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText11 ? fancyText11 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText13 ? fancyText13 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}𒆜𓊉꧂
        </p>
      <center><AdSenseComponent /></center>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText14 ? fancyText14 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText15 ? fancyText15 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText16 ? fancyText16 : "𝚏𝚊𝚗𝚌𝚢 𝚝𝚎𝚡𝚝"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText17 ? fancyText17 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText18 ? fancyText18 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText19 ? fancyText19 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜
          {fancyText20 ? fancyText20 : "ｆａｎｃｙ ｔｅｘｔ"}
          𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText21 ? fancyText21 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText22 ? fancyText22 : "ɯɐɯɔq ɓʌɔɓ"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText23 ? fancyText23 : "ɟɐnɔʎ ʇǝxʇ"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText24 ? fancyText24 : "🄵🄰🄽🄲🅈 🅃🄴🅇🅃"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText25 ? fancyText25 : "ғᴀɴᴄʏ ᴛᴇxᴛ"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText26 ? fancyText26 : "₣₳₦₵Ɏ ₮ɆӾ₮"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText27 ? fancyText27 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}𒆜𓊉꧂
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          ꧁𓊈𒆜{fancyText28 ? fancyText28 : "𝖋𝖆𝖓𝖈𝖞 𝖙𝖊𝖝𝖙"}𒆜𓊉꧂
        </p>

        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText ? fancyText : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText2 ? fancyText2 : "𝓯𝓪𝓷𝓬𝔂 𝓽𝓮𝔁𝓽"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText3 ? fancyText3 : "FДИCУ ΓΞЖΓ"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText4 ? fancyText4 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText5 ? fancyText5 : "𝕗𝕒𝕟𝕔𝕪 𝕥𝕖𝕩𝕥"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText6 ? fancyText6 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText7 ? fancyText7 : "f͓̽a͓̽n͓̽c͓̽y͓̽ t͓̽e͓̽x͓̽t͓̽"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText8 ? fancyText8 : "fancy text"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText9 ? fancyText9 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText10 ? fancyText10 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText11 ? fancyText11 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText12 ? fancyText12 : "ｆａｎｃｙ ｔｅｘｔ"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText13 ? fancyText13 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText14 ? fancyText14 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText15 ? fancyText15 : "𝘧𝘢𝘯𝘤𝘺 𝘵𝘦𝘹𝘵"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText16 ? fancyText16 : "𝚏𝚊𝚗𝚌𝚢 𝚝𝚎𝚡𝚝"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText17 ? fancyText17 : "ⓕⓐⓝⓒⓨ ⓣⓔⓧⓣ"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText18 ? fancyText18 : "🅵🅰🅽🅲🆈 🆃🅴🆇🆃"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText19 ? fancyText19 : "ᖴᗩᑎᑕƳ 丅ᗴ᙭丅"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText20 ? fancyText20 : "ｆａｎｃｙ ｔｅｘｔ"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText21 ? fancyText21 : "𝐟𝐚𝐧𝐜𝐲 𝐭𝐞𝐱𝐭"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText22 ? fancyText22 : "ɯɐɯɔq ɓʌɔɓ"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText23 ? fancyText23 : "ɟɐnɔʎ ʇǝxʇ"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText24 ? fancyText24 : "🄵🄰🄽🄲🅈 🅃🄴🅇🅃"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText25 ? fancyText25 : "ғᴀɴᴄʏ ᴛᴇxᴛ"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText26 ? fancyText26 : "₣₳₦₵Ɏ ₮ɆӾ₮"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText27 ? fancyText27 : "𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉"}
        </p>
        <p onClick={(e) => copy(e.currentTarget.textContent)}>
          {fancyText28 ? fancyText28 : "𝖋𝖆𝖓𝖈𝖞 𝖙𝖊𝖝𝖙"}
        </p>
      </div>
      <center><AdSenseComponent /></center>

      <div className="ft">
        <header>
          <img
            src="../img/bgmi-name-generator.png"
            alt="fancy text img"
            width="100%"
            height="auto"
          />
          <br />

          <h1>BGMI Name Generator</h1>
          <p>Create unique and stylish BGMI usernames effortlessly!</p>
        </header>

        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Welcome to the BGMI Name Generator, your go-to tool for creating
            cool and unique usernames for Battlegrounds Mobile India (BGMI).
            Your in-game identity is crucial, and with our generator, you can
            stand out with style. Read on to discover how to use the tool and
            find answers to frequently asked questions.
          </p>
        </section>
        <center><AdSenseComponent /></center>

        <section id="how-to-use">
          <h2>How to Use</h2>
          <p>
            Using our BGMI Name Generator is simple and quick. Just follow these
            steps:
          </p>
          <ol>
            <li>
              Visit our tool at{" "}
              <a
                href="https://iamvicky.dev/bgmi-name-generator/"
                target="_blank"
              >
                https://iamvicky.dev/bgmi-name-generator/
              </a>
            </li>
            <li>
              Enter your preferred keywords or let the generator suggest some
              for you.
            </li>
            <li>
              Choose your desired style or let the tool surprise you with a
              random name.
            </li>
            <li>Click the "Generate" button.</li>
            <li>
              Explore the generated BGMI usernames and pick your favorite.
            </li>
            <li>
              Copy the chosen name and use it as your BGMI in-game username.
            </li>
          </ol>
        </section>

        <section id="faq">
          <h2>FAQs</h2>
          <div class="faq-item">
            <h3>Q: Can I use spaces in my BGMI username?</h3>
            <p>
              A: No, BGMI usernames cannot contain spaces. Our generator
              automatically removes spaces to ensure compatibility with the
              game.
            </p>
          </div>
          <div class="faq-item">
            <h3>Q: Are there any character limitations for BGMI usernames?</h3>
            <p>
              A: Yes, BGMI usernames can be up to 20 characters long. Our tool
              ensures that generated names adhere to this limit.
            </p>
          </div>
          <div class="faq-item">
            <h3>Q: Can I use special characters in my BGMI username?</h3>
            <p>
              A: Yes, you can use some special characters. Our generator
              provides options that are allowed by the game.
            </p>
          </div>
        </section>
        <center><AdSenseComponent /></center>

        <section id="footer">
          <p>
            Ready to make your mark in BGMI? Use our BGMI Name Generator now and
            show off your unique style in the battlegrounds!
          </p>
          <p>
            For any further assistance, contact us at{" "}
            <a href="mailto:hajipurtech@gmail.com">hajipurtech@gmail.com</a>
          </p>
        </section>

        <h3>Important Links</h3>
        <div className="ftm">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://iamvicky.dev/">About us</a>
            </li>
            <li>
              <a href="https://iamvicky.dev/privacy-policy.html">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://iamvicky.dev/disclaimer.html">Disclaimer</a>
            </li>
            <li>
              <a href="https://iamvicky.dev/contact.html">Contact</a>
            </li>
          </ul>
          <Backlink />
        </div>
        <br />
        <hr />
        <br />
        <center>
          <p
            style={{ color: "whitesmoke", fontWeight: "100", fontSize: "15px" }}
          >
            Copyright © 2022 <a href="https://iamvicky.dev">iamvicky.dev</a>
          </p>
        </center>
      </div>
    </div>
  );
}

export default Fancy;
