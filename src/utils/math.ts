import katex from 'katex';

/**
 * Basic LaTeX to HTML renderer for inline ($...$) and block ($$...$$) math.
 * For more complex requirements, one could integrate 'marked' with a katex extension.
 */
export function renderMath(text: string): string {
  if (!text) return '';

  // Block math: $$ ... $$
  let rendered = text.replace(/\$\$(.*?)\$\$/gs, (_, math) => {
    try {
      return katex.renderToString(math, { displayMode: true, throwOnError: false });
    } catch (e) {
      return math;
    }
  });

  // Inline math: $ ... $
  rendered = rendered.replace(/\$(.*?)\$/g, (_, math) => {
    try {
      return katex.renderToString(math, { displayMode: false, throwOnError: false });
    } catch (e) {
      return math;
    }
  });

  return rendered;
}