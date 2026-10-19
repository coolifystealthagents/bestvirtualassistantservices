export function parseBlogPage(rawPage, pageCount) {
  if (!/^[1-9]\d*$/.test(rawPage)) return null;
  const page = Number(rawPage);
  if (!Number.isSafeInteger(page) || page > pageCount) return null;
  return page;
}