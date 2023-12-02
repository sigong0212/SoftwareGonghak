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
  responseStr = "다람쥐는 도토리를 무척이나 좋아해요";
  document.querySelector('.glasscat img').src = 'src/squ.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/squ2.jpeg';
}
else if (userInput.endsWith("요")) {
  responseStr = "요리를 먹는 것은 언제나 즐겁고 감사한 일이야";
  document.querySelector('.glasscat img').src = 'src/food.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/food2.jpeg';
}

else if (userInput.endsWith("내")) {
  responseStr = "내 이름은 코난, 탐정이죠. 진실은 언제나 하나";
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

else if (userInput.endsWith("야")) {
  responseStr = "야구 경기가 시작되자 관중들은 함성으로 구장을 가득 채웠다";
  document.querySelector('.glasscat img').src = 'src/baseball.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/baseball2.jpeg';
}
else if (userInput.endsWith("기")) {
  responseStr = "기차에 탄 어린이는 풍경을 바라보며 모험 가득한 꿈을 키워나갔다";
  document.querySelector('.glasscat img').src = 'src/train.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/train2.jpeg';
}

else if (userInput.endsWith("해")) {
  responseStr = "해바라기는 '일편단심' 이라는 뜻을 가지고 있대";
  document.querySelector('.glasscat img').src = 'src/sunflower.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/sunflower2.jpeg';
}
else if (userInput.endsWith("대")) {
  responseStr = "대나무 숲 속에서 바람이 불면, 고요함과 섞여 신비로운 공간이 된다.";
  document.querySelector('.glasscat img').src = 'src/daenamu.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/daenamu2.jpeg';
}

else if (userInput.endsWith("어")) {
  responseStr = "어부는 바다의 품에서 수확한 물고기들과 함께 하루를 마무리했다.";
  document.querySelector('.glasscat img').src = 'src/fisher.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/fisher2.jpeg';
}

else if (userInput.endsWith("보")) {
  responseStr = "보기 좋은 떡이 먹기도 좋다. 라는 속담이 있습니다.";
  document.querySelector('.glasscat img').src = 'src/fisher.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/fisher2.jpeg';
}

else if (userInput.endsWith("아")) {
  responseStr = "아침을 꼭 챙겨 먹는 것은 중요한 식습관이야.";
  document.querySelector('.glasscat img').src = 'src/breakfast.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/breakfast2.jpeg';
}

else if (userInput.endsWith("달")) {
  responseStr = "달콤함으로 감싸진 아이스크림은 얼음처럼 차갑게 씹혔다.";
  document.querySelector('.glasscat img').src = 'src/breakfast.jpeg';
  document.querySelector('.glasscat2 img').src = 'src/breakfast2.jpeg';
}







  else {
      responseStr = "아직 문장 입력을 못했어요. 죄송합니다.";
  }

  var outputContainer = document.getElementById('output-container');
  var outputParagraph = document.createElement('p');
  outputParagraph.innerText = '\"' + responseStr + '\"';

  outputContainer.innerHTML = '';
  outputContainer.appendChild(outputParagraph);
}