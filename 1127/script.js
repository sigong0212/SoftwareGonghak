function processForm() {
  var userInput = document.fo.elements[0].value;
  var responseStr;

  if (userInput.endsWith("이")) {
      responseStr = "이비인후과에 가면 귀, 코, 목 등의 진료를 받을 수 있습니다.";
      document.querySelector('.glasscat img').src = 'src/ear.jpeg';
      document.querySelector('.glasscat2 img').src = 'src/ear2.jpeg';

   } else if (userInput.endsWith("지")) {
    responseStr = "지렁이는 비 오는 날 자주 볼 수 있어요";
    document.querySelector('.glasscat img').src = 'src/umb.jpeg';
    document.querySelector('.glasscat2 img').src = 'src/umb2.jpeg';
  } 
  else if (userInput.endsWith("오")) {
  responseStr = "오리는 꽥꽥 병아리는 삐약삐약";
  document.querySelector('.glasscat img').src = 'src/chick.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/chick2.jpeg';
}
else if (userInput.endsWith("다")) {
  responseStr = "다람쥐는 도토리를 좋아해요";
  document.querySelector('.glasscat img').src = 'src/squ.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/squ2.jpeg';

}
else if (userInput.endsWith("요")) {
  responseStr = "요리를 먹는 것은 언제나 즐거워";
  document.querySelector('.glasscat img').src = 'src/food.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/food2.jpeg';
}

else if (userInput.endsWith("내")) {
  responseStr = "내 이름은 코난, 탐정이죠";
  document.querySelector('.glasscat img').src = 'src/conan.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/conan2.jpeg';
}
else if (userInput.endsWith("랄")) {
  responseStr = "랄랄라 노래를 부르며 햇살 가득한 날에 산책하자";
  document.querySelector('.glasscat img').src = 'src/kid.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/kid2.jpeg';
}
else if (userInput.endsWith("마")) {
  responseStr = "마치 봄바람처럼 예쁜 미소를 가진 그녀는 꽃을 들고 있었다";
  document.querySelector('.glasscat img').src = 'src/pretty.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/pretty2.jpeg';
}


  else {
      responseStr = "안녕하세요.";
  }

  var outputContainer = document.getElementById('output-container');
  var outputParagraph = document.createElement('p');
  outputParagraph.innerText = '\"' + responseStr + '\"';

  outputContainer.innerHTML = '';
  outputContainer.appendChild(outputParagraph);
}