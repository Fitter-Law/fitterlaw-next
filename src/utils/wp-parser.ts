import DOMPurify from 'isomorphic-dompurify';
import parse from 'html-react-parser';

export const cleanWordPressContent = (content: string) => {
  // Clean WordPress shortcodes
  content = content.replace(/\[[^\]]+\]/g, '');
  
  // Sanitize HTML
  content = DOMPurify.sanitize(content, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allowfullscreen', 'frameborder']
  });

  // Convert to React elements
  return parse(content);
};

export const getSlugFromUrl = (url: string) => {
  const parts = url.split('/');
  return parts[parts.length - 2] || parts[parts.length - 1];
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};