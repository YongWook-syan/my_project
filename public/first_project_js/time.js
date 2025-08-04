function updateTime() {
    const now = new Date();  // 현재 시간 가져오기
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').textContent = formattedTime;
  }

  // 최초 실행
  updateTime();

  // 1초마다 시간 업데이트
  setInterval(updateTime, 1000);