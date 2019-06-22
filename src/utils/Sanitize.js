import React from "react";
import sanitizeHtml from "sanitize-html";

const defaultOptions = {
  allowedTags: ["b", "i", "em", "strong", "a", "p"],
  allowedAttributes: {
    a: ["href"]
  },
  allowedIframeHostnames: ["www.youtube.com"]
};

const sanitize = (dirty, options) => ({
  __html: sanitizeHtml(dirty)
});

const SanitizeHTML = ({ html, options }) => (
  <div dangerouslySetInnerHTML={sanitize(html, defaultOptions)} />
);

export default SanitizeHTML;
