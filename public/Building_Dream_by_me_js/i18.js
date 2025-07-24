document.querySelectorAll('#languageOption div').forEach(option => {
  option.addEventListener('click', () => {
    const selectedLang = option.getAttribute('data-lang');
    i18next.changeLanguage(selectedLang, () => {
      updateContent();
      document.getElementById('selectedLanguageText').textContent = option.textContent;
    });
  });
});