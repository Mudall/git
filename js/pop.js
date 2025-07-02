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
