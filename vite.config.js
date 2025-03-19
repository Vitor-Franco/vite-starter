import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

import MarkdownIt from 'markdown-it';
import { readFile } from 'node:fs/promises';

const md = new MarkdownIt();

const renderMarkdown = async (file) => {
  const content = await readFile(file, 'utf-8');
  return md.render(content);
};

function markdownToHtml() {
  return {
    name: 'markdown-to-html',
    resolveId(id) {
      if (id.endsWith('.md')) {
        return id;
      }

      return null;
    },
    async load(id) {
      if (id.endsWith('.md')) {
        const rendered = await renderMarkdown(id);
        return `export default ${JSON.stringify(rendered)}`;
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [imagetools(), markdownToHtml()],
});
