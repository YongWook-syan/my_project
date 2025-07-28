i18next
  .use(i18nextHttpBackend)
  .init({
    lng: 'ko', // 초기 언어
    fallbackLng: 'ko',
    debug: true,
    backend: {  // 라이브러리 등록??
      loadPath: '/locales/{{lng}}/translation.json'
    }
  }, function(err, t) {
    if (err) return console.error(err);
    updateContent();
  });

function updateContent() {
  document.getElementById('hero-title').innerHTML = i18next.t('heroTitle');
  document.getElementById('introduce').innerHTML = i18next.t('introduce');
  document.getElementById('about-title').innerHTML = i18next.t('aboutTitle');
  document.getElementById('about-text').innerHTML = i18next.t('aboutText');
  document.getElementById('record-title').innerHTML = i18next.t('recordTitle');
  document.getElementById('record-text').innerHTML = i18next.t('recordText');
  document.getElementById('contact').innerHTML = i18next.t('Contact');
  document.getElementById('ending').innerHTML = i18next.t('Ending');
  document.querySelectorAll('.timeline-item').forEach(item => {
    const timeline_index = item.getAttribute('data-index');
    const yearText = i18next.t(`timeline.${timeline_index}.year`);
    const mainText = i18next.t(`timeline.${timeline_index}.text`);

    item.querySelector('.timeline-year').textContent = yearText;
    item.querySelector('p').textContent = mainText;
  });
  document.querySelectorAll('.bottom-item').forEach(item => {
    const bottom_index = item.getAttribute('data-index');
    const bottomText = i18next.t(`bottomMenu.${bottom_index}`);

    const link = item.querySelector('a');
  if (link) {
    link.textContent = bottomText;
  } else {
    item.textContent = bottomText;
  }
  });
  document.querySelectorAll('.side-nav-item').forEach(item => {
    const side_index = item.getAttribute('data-index');
    const side_nav_Text = i18next.t(`side-nav.${side_index}`);
    item.textContent = side_nav_Text;
  });
  document.querySelectorAll('.floating-item').forEach(item => {
    const floating_index = item.getAttribute('data-index');
    const floatingText = i18next.t(`side-nav.${floating_index}`);
    item.textContent = floatingText;
  });
}