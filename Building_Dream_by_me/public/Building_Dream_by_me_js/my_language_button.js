document.addEventListener('DOMContentLoaded', function() {
    // DOMContentLoaded 이벤트는 HTML 문서의 모든 요소가 로드되고 파싱되었을 때 발생합니다.
    // 이는 JavaScript 코드가 HTML 요소에 접근하기 전에 실행되지 않도록 보장합니다.

    // 1. 필요한 DOM 요소들을 가져옵니다.
    const languageToggleButton = document.getElementById('languageToggle'); // 'languageToggle' ID를 가진 언어 선택 버튼 요소를 가져옵니다.
    const selectedLanguageText = document.getElementById('selectedLanguageText'); // 'selectedLanguageText' ID를 가진, 현재 선택된 언어를 표시하는 텍스트 요소를 가져옵니다.
    const languageOptions = document.getElementById('languageOption'); // 'languageOption' ID를 가진, 언어 옵션들을 포함하는 드롭다운 메뉴 전체 요소를 가져옵니다.
    const langOptions = languageOptions.querySelectorAll('div[data-lang]'); // 'languageOptions' 내부에 있는 'data-lang' 속성을 가진 모든 'div' 요소를 가져옵니다. 이들은 각각의 언어 선택 항목(예: English, 한국어)이 됩니다.
    const htmlElement = document.documentElement; // HTML 문서의 최상위 요소인 <html> 태그를 가져옵니다. 이 요소의 'lang' 속성을 변경하여 문서의 언어를 설정합니다.

    // 2. 페이지 로드 시 localStorage에 저장된 언어 설정을 불러옵니다.
    // 'localStorage'는 웹 브라우저에 데이터를 영구적으로 저장할 수 있게 해주는 웹 스토리지 API입니다.
    // 이전에 선택된 언어가 'selectedLanguageCode' 키로 localStorage에 저장되어 있다면 그 값을 사용하고, 없다면 기본값으로 'ko' (한국어)를 사용합니다.
    const savedLangCode = localStorage.getItem('selectedLanguageCode') || 'ko';
    // 이전에 선택된 언어 이름이 'selectedLanguageName' 키로 localStorage에 저장되어 있다면 그 값을 사용하고, 없다면 기본값으로 '한국어'를 사용합니다.
    const savedLangName = localStorage.getItem('selectedLanguageName') || '한국어';
    
    selectedLanguageText.textContent = savedLangName; // 가져온 언어 이름을 현재 선택된 언어를 표시하는 텍스트 요소에 업데이트합니다.
    htmlElement.lang = savedLangCode; // <html> 태그의 'lang' 속성을 가져온 언어 코드로 업데이트합니다. 이는 검색 엔진 최적화(SEO) 및 스크린 리더와 같은 보조 기술에 중요한 정보를 제공합니다.

    // 3. 언어 토글 버튼 클릭 이벤트 리스너를 추가합니다.
    languageToggleButton.addEventListener('click', function() {
        // 'languageOptions' 요소에 'show' 클래스를 토글합니다.
        // 'show' 클래스가 없으면 추가하고, 있으면 제거하여 드롭다운 메뉴를 보이거나 숨깁니다.
        const isShowing = languageOptions.classList.toggle('show');
        
        // 접근성(Accessibility)을 위한 ARIA(Accessible Rich Internet Applications) 속성을 업데이트합니다.
        // 'aria-expanded': 버튼에 의해 제어되는 확장 가능한 요소(드롭다운 메뉴)가 현재 확장되었는지(true) 또는 축소되었는지(false)를 나타냅니다.
        languageToggleButton.setAttribute('aria-expanded', isShowing);
        // 'aria-hidden': 요소가 사용자에게 시각적으로나 스크린 리더에 의해 숨겨져 있는지(true) 또는 표시되는지(false)를 나타냅니다.
        // 드롭다운이 숨겨져 있을 때(isShowing이 false일 때), aria-hidden은 true가 되어 스크린 리더가 이 요소를 읽지 않도록 합니다.
        languageOptions.setAttribute('aria-hidden', !isShowing);
    });

    // 4. 각 언어 옵션(English, 한국어 등)에 클릭 이벤트 리스너를 추가합니다.
    langOptions.forEach(option => { // 모든 언어 옵션 요소에 대해 반복합니다.
        option.addEventListener('click', function() {
            // 클릭된 옵션 요소의 'data-lang' 속성 값(예: 'en', 'ko')을 가져옵니다.
            const selectedLangCode = this.dataset.lang;
            // 클릭된 옵션 요소의 텍스트 내용(예: 'English', '한국어')을 가져옵니다.
            const selectedLangName = this.textContent;

            // UI 업데이트: 선택된 언어 텍스트를 변경합니다.
            selectedLanguageText.textContent = selectedLangName;
            // HTML lang 속성을 업데이트하여 검색 엔진 및 보조 기술에 현재 페이지의 언어 정보를 제공합니다.
            htmlElement.lang = selectedLangCode;
                      
            // localStorage에 현재 선택된 언어 코드와 이름을 저장합니다.
            // 이렇게 하면 사용자가 페이지를 새로고침하거나 나중에 다시 방문했을 때도 이전에 선택했던 언어가 유지됩니다.
            localStorage.setItem('selectedLanguageCode', selectedLangCode);
            localStorage.setItem('selectedLanguageName', selectedLangName);

            // 언어 선택이 완료된 후 드롭다운 메뉴를 숨깁니다.
            languageOptions.classList.remove('show');
            // ARIA 속성을 초기화하여 드롭다운이 닫힌 상태임을 알립니다.
            languageToggleButton.setAttribute('aria-expanded', 'false');
            languageOptions.setAttribute('aria-hidden', 'true');
        });
    });

    // 5. 드롭다운 외부 영역 클릭 시 드롭다운을 닫는 이벤트 리스너를 추가합니다.
    document.addEventListener('click', function(event) {
        // 클릭된 영역이 언어 토글 버튼 내부(languageToggleButton.contains(event.target))도 아니고,
        // 드롭다운 메뉴 내부(languageOptions.contains(event.target))도 아닌 경우를 확인합니다.
        if (!languageToggleButton.contains(event.target) && !languageOptions.contains(event.target)) {
            languageOptions.classList.remove('show'); // 'show' 클래스를 제거하여 드롭다운을 숨깁니다.
            // ARIA 속성을 초기화하여 드롭다운이 닫힌 상태임을 알립니다.
            languageToggleButton.setAttribute('aria-expanded', 'false');
            languageOptions.setAttribute('aria-hidden', 'true');
        }
    });
});