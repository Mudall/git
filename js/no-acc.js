
document.querySelectorAll('.accordion').forEach(el => {
    el.setAttribute('open', true); // 초기 상태 유지

    el.addEventListener('toggle', function () {
        // 닫으려는 시도를 막고 다시 열림 상태로
        if (!el.open) {
        el.open = true;
        }
    });
});