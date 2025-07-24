i18next.init({
  lng: 'ko', // 초기 언어
  resources: {
    en: {
      translation: {
        "welcomeMessage": "Hello, welcome to my website!",
        "introText": "This website is my first step to not only receive starlight, but also to shine it back.",
        "aboutMe": "Hello, I’m Syan, an aspiring developer!",
        "aboutText": "I'm an aspiring developer named Syan, and this website is my very first personal project.<br>I started this project because I wanted to create something meaningful before joining the military.<br>Since I had an interest in web development, I decided to take on the challenge and give it a try.",
        "timeline1": "I became interested in programming.",
        "timeline2": "I studied C and wanted to develop embedded systems.",
        "timeline3": "I started learning HTML and Java and got into web/app development.",
        "timeline4": "I began my first personal web project before military service."
      }
    },
    ko: {
      translation: {
        "welcomeMessage": "안녕하세요, 저의 웹 사이트에 오신것을 환영합니다!!",
        "introText": "이 웹 사이트는 별빛을 받기만 하는게 아니라 저 또한 별들을 비추어주기 위한 첫 번째 발걸음 입니다.",
        "aboutMe": "안녕하세요, 개발자를 지망하는 syan이라고 합니다!",
        "aboutText": "저는 개발자를 희망하는 syan이라고 합니다. 이 웹은 제가 처음 도전하는 개인 프로젝트 입니다.<br>이 프로젝트를 시작하게 된 계기는 군대를 가기 전에 뭐라도 하나 하고 가고 싶은데 마침 웹 개발에 관심이 있었고 그래서 한번 해 볼까 하는 마음에 시작하게 된 프로젝트 입니다.",
        "timeline1": "프로그래밍에 관심을 갖게 되었어요.",
        "timeline2": "C 언어를 배우며 임베디드 개발에 관심을 가졌어요.",
        "timeline3": "웹과 앱 개발에 눈을 떴고 HTML, Java를 배우기 시작했어요.",
        "timeline4": "처음으로 나만의 웹 프로젝트에 도전하게 되었어요!"
      }
    }
  }
}, function(err, t) {
  updateContent();
});

function updateContent() {
  document.querySelector('h2').textContent = i18next.t('welcomeMessage');
  document.getElementById('introduce').textContent = i18next.t('introText');
  document.querySelector('#about-intro h2').textContent = i18next.t('aboutMe');
  document.getElementById('about-text').innerHTML = i18next.t('aboutText');
  
  const timelineTexts = [
    'timeline1',
    'timeline2',
    'timeline3',
    'timeline4'
  ];

  document.querySelectorAll('.timeline-item p').forEach((el, index) => {
    el.textContent = i18next.t(timelineTexts[index]);
  });
}

document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const lang = e.target.getAttribute('data-lang');
    i18next.changeLanguage(lang, () => {
      updateContent();
      document.getElementById('selectedLanguageText').textContent = e.target.textContent;
    });
  });
});