import React from "react";
import sanitizeHtml from "sanitize-html";

const defaultOptions = {
  allowedTags: ["p", "a", "b", "i"],
  allowedAttributes: {
    a: ["href"],
    img: ["src"]
  },
  selfClosing: ["img"],
  allowedSchemes: ["http", "https"],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ["href", "src"],
  allowProtocolRelative: true
};

const sanitize = (dirty, options) => ({
  __html: sanitizeHtml(dirty)
});

const SanitizeHTML = ({ html }) => (
  <div dangerouslySetInnerHTML={sanitize(html, defaultOptions)} />
);

export default SanitizeHTML;
