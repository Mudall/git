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
