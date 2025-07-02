
// 팝업 온오프
document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".btn_pop_open");
    const popup = document.getElementById("popupLayer");
    const closeBtn = document.querySelector(".popup-close");

    if (openBtn && popup && closeBtn) {
        openBtn.addEventListener("click", function () {
            popup.style.display = "block";
            document.body.style.overflow = "hidden"; // 스크롤 방지
        });

        closeBtn.addEventListener("click", function () {
            popup.style.display = "none";
            document.body.style.overflow = ""; // 스크롤 복원
        });
    }
});




// 색인 검색
    const buttons = document.querySelectorAll('.index-buttons button');
    const lists = document.querySelectorAll('.index-list');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
        // 활성 버튼 표시
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const idx = button.dataset.index;

        // 해당 색인 리스트만 보이게, 나머지 숨기기
        lists.forEach(list => {
            if(list.dataset.indexList === idx) {
            list.hidden = false;
            } else {
            list.hidden = true;
            }
        });
        });
    });