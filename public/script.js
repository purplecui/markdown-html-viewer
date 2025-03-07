window.onload = () => {
  var converter = new showdown.Converter();
  var pad = document.getElementById("pad");
  var markdownArea = document.getElementById("markdown");

  var convertTextAreaToMarkdown = async () => {
    var markdownText = pad.value;
    let html = converter.makeHtml(markdownText);
    markdownArea.innerHTML = html;
  };

  pad.addEventListener("input", convertTextAreaToMarkdown);

  convertTextAreaToMarkdown();
};
