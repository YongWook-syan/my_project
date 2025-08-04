const floatingMenu = document.getElementById('floating-menu');
const toggleFloatingBtn = document.getElementById('toggleFloating');

// PC/모바일 버튼 클릭
toggleFloatingBtn.addEventListener('click', () => {
  floatingMenu.classList.toggle('active');
  updateFloatingIcon();
});

// 모바일 제스처
/*let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
  const touchEndY = e.changedTouches[0].clientY;
  const dy = touchEndY - touchStartY;

  if (window.innerWidth <= 768) {
    // ↑ 위로 올리면 메뉴 열기
    if (dy < -80) {
      floatingMenu.classList.add('active');
      updateFloatingIcon();
    }
    // ↓ 아래로 내리면 메뉴 닫기
    if (dy > 80) {
      floatingMenu.classList.remove('active');
      updateFloatingIcon();
    }
  }
});*/

// 아이콘 업데이트 함수
function updateFloatingIcon() {
  if (floatingMenu.classList.contains('active')) {
    toggleFloatingBtn.textContent = '×'; // 열렸을 때
  } else {
    toggleFloatingBtn.textContent = '≡'; // 닫혔을 때
  }
}

// 사이드바 열기 버튼
const sideNav = document.getElementById('side-nav');
const toggleSideBtn = document.getElementById('toggleSide');

toggleSideBtn.addEventListener('click', () => {
  sideNav.classList.toggle('active');
  // 아이콘 변경
  if (sideNav.classList.contains('active')) {
    toggleSideBtn.textContent = '×';
  } else {
    toggleSideBtn.textContent = '≡';
  }
});