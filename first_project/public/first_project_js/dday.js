document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date('2027-02-04');
    targetDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diff = Math.floor((targetDate - today) / (1000 * 60 * 60 * 24));

    const ddayElement = document.getElementById('dday');
    if (diff === 0) {
        ddayElement.textContent = '오늘은 아니고 한 일주일 뒤 부터 합니다.';
    }else if (diff > 0) {
      ddayElement.textContent = `D-${diff}`;
    } else {
      ddayElement.textContent = `D+${Math.abs(diff)}`;
    }
});