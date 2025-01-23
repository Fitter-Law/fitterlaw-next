import React from 'react';
import DOMPurify from 'isomorphic-dompurify';

const ContentProcessor = ({ content }) => {
  // Clean and sanitize WordPress content
  const cleanContent = DOMPurify.sanitize(content, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allowfullscreen', 'frameborder', 'target']
  });

  return (
    <div 
      className="wp-content"
      dangerouslySetInnerHTML={{ __html: cleanContent }} 
    />
  );
};

export default ContentProcessor;