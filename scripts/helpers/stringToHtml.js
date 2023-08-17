export default function stringToHtml(string, selector = "div") {
  return new DOMParser()
    .parseFromString(string, "text/html")
    .querySelector(selector);
}
