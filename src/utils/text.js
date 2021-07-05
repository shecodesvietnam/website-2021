export function simplify(text, wordCount = 10) {
  return text.split(/\s+/g).slice(0, wordCount).join(" ");
}
