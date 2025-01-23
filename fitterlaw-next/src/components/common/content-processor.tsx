<html><head></head><body>import React from 'react';
import DOMPurify from 'isomorphic-dompurify';

interface ContentProcessorProps {
  content: string;
}

const ContentProcessor = ({ content }: ContentProcessorProps) =&gt; {
  // Clean and sanitize WordPress content
  const cleanContent = DOMPurify.sanitize(content, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allowfullscreen', 'frameborder', 'target']
  });

  return (<div classname="wp-content" dangerouslysetinnerhtml="{{" __html:="" cleancontent="" }}="">);
};

export default ContentProcessor;</div></body></html>