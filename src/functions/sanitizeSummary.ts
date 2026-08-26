import DOMPurify from "dompurify";

// Function to sanitize the HTML summary returned by the API before rendering it
const sanitizeSummary = (summary: string | null | undefined): string => {
  if (!summary) {
    return "";
  }

  return DOMPurify.sanitize(summary, {
    ALLOWED_TAGS: [
      "p",
      "br",
      "b",
      "strong",
      "i",
      "em",
      "u",
      "span",
      "ul",
      "ol",
      "li",
    ],
    ALLOWED_ATTR: [],
  });
};
export default sanitizeSummary;
