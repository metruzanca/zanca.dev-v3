import { getHighlighter } from 'shiki';

const THEME = 'github-dark';

function escapeHtml(code) {
  return code.replace(
    /[{}`]/g,
    (character) => ({ '{': '&lbrace;', '}': '&rbrace;', '`': '&grave;' }[character]),
  );

}

async function highlighter(code, lang, meta) {
  const shikiHighlighter = await getHighlighter({
    theme: THEME,
  });

  const html = shikiHighlighter.codeToHtml(code, {
    lang,
  });

  return escapeHtml(html);
}

export default highlighter;
