/**
 * Converts markdown to plain text by removing all markdown syntax
 * Suitable for structured data and Rich Results
 */
export const convertMarkdownToPlainText = (markdown: string): string => {
  if (!markdown) {
    return '';
  }

  let text = markdown;

  // Remove headers (h1-h6) - keep only the text
  text = text.replace(/^#{1,6}\s+(.+)$/gm, '$1');

  // Remove bold - **text** or __text__
  text = text.replace(/\*\*(.*?)\*\*/g, '$1');
  text = text.replace(/__(.*?)__/g, '$1');

  // Remove italic - *text* or _text_
  text = text.replace(/\*(.*?)\*/g, '$1');
  text = text.replace(/_(.*?)_/g, '$1');

  // Convert links - [text](url) to "text (url)"
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)');

  // Remove list markers
  text = text.replace(/^\d+\.\s+/gm, '');
  text = text.replace(/^[-*+]\s+/gm, '');

  // Replace multiple newlines with single space
  text = text.replace(/\n+/g, ' ');

  // Clean up extra whitespace
  text = text.replace(/\s+/g, ' ').trim();

  return text;
};
