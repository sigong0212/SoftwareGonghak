function processForm() {
  var userInput = document.fo.elements[0].value;
  var responseStr;

  if (userInput.endsWith("이")) {
      responseStr = "이비인후과에 가면 귀, 코, 목 등의 진료를 받을 수 있습니다.";
  } else {
      responseStr = "안녕하세요.";
  }

  var outputContainer = document.getElementById('output-container');
  var outputParagraph = document.createElement('p');
  outputParagraph.innerText = '\"' + responseStr + '\"';

  outputContainer.innerHTML = '';
  outputContainer.appendChild(outputParagraph);
}