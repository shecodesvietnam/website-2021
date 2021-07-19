export function simplify(text, wordCount = 10) {
  return text.split(/\s+/g).slice(0, wordCount).join(" ");
}

export function replaceHashtag(pattern, style) {
  return function replace(str) {
    return str.replace(pattern, function hashtag(h) {
      return `<span style="color: ${style.color}; font-size: ${style.fontSize}rem;">${h}</span>`;
    });
  };
}
