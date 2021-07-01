export function configLanguage(vn, en) {
  return { vn, en };
}

export function languageBasedDisplay(text, lang) {
  return lang === "vn" ? text.vn : text.en;
}