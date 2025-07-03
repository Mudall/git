// 아코디언 자동접힘
document.querySelectorAll('.accordion').forEach(item => {
    item.addEventListener('toggle', function () {
        if (this.open) {
            document.querySelectorAll('.accordion').forEach(other => {
                if (other !== this) other.removeAttribute('open');
            });
        }
    });
});