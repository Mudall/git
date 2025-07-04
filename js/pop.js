const buttons = document.querySelectorAll('.index-buttons button');
const lists = document.querySelectorAll('.index-list');
const title = document.getElementById('indexTitle');

function updateIndexView(indexKey) {
    let found = false;
    lists.forEach(list => {
        const isTarget = list.dataset.indexList === indexKey;
        list.hidden = !isTarget;
        if (isTarget) {
            const count = list.querySelectorAll('li').length;
            title.innerHTML = `${indexKey} <span>${count}건</span> `;
            found = true;
        }
    });

    if (!found) {
        title.innerHTML = `${indexKey} <span>0</span>`;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const idx = button.dataset.index;
        updateIndexView(idx);

        // 최상단으로 스크롤
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// 초기 활성 상태 자동 실행 (초기화용)
document.addEventListener('DOMContentLoaded', () => {
    const active = document.querySelector('.index-buttons button.active');
    if (active) {
        updateIndexView(active.dataset.index);
    }
});
