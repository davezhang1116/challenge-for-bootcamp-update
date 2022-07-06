document.getElementById("comment-button").onclick = function () {
  var comment = document.getElementById("comment").value;
  const div = document.getElementById("my-comment");
  const strong = document.createElement("strong");
  strong.setAttribute(
    "style",
    "color:white;position: absolute; left: 30%; font-size: 24px;"
  );
  strong.textContent = "You have commented: " + comment;
  div.append(strong);
};
