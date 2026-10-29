export function parseBlogPage(rawPage, pageCount) {
  if (!/^[1-9]\d*$/.test(rawPage)) return null;
  const page = Number(rawPage);
  if (!Number.isSafeInteger(page) || page > pageCount) return null;
  return page;
}

export function blogPageDescription(posts) {
  const rawTitle = posts[0]?.title || 'virtual assistant workflows';
  const topic = rawTitle
    .replace(/^Field Guide:\s*/i, '')
    .replace(/Virtual Assistant Placement And Managed Services/gi, 'virtual assistant services')
    .replace(/\s+/g, ' ')
    .trim();
  const words = topic.split(' ');
  let concise = words.shift() || 'virtual';
  while (words.length && `${concise} ${words[0]}`.length <= 96) concise += ` ${words.shift()}`;
  return `Read “${concise}” and related virtual assistant workflow guides.`;
}