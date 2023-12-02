function processForm() {
  var userInput = document.fo.elements[0].value;
  var responseStr;

  if (userInput.endsWith("이")) {
      responseStr = "이비인후과에 가면 귀, 코, 목 등의 진료를 받을 수 있습니다.";
  } else {
      responseStr = "안녕하세요.";
  }

  // 결과를 페이지에 추가
  var outputContainer = document.getElementById('output-container');
  var outputParagraph = document.createElement('p');
  outputParagraph.innerText = '\"' + responseStr + '\"';

  // 기존 내용 제거 후 새로운 결과 추가
  outputContainer.innerHTML = '';
  outputContainer.appendChild(outputParagraph);
}