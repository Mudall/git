document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('details.accordion');
    const accTab = document.querySelector('.acc-tab');
    const tabList = accTab.querySelector('ul');
    const tabItems = tabList.querySelectorAll('li');
    const tabLinks = tabList.querySelectorAll('a');
    const btnOpen = accTab.querySelector('.on');
    const btnClose = accTab.querySelector('.off');
    const dim = document.querySelector('.acc-dim');

    // 아코디언 항상 열리게 유지
    accordions.forEach(el => {
        el.setAttribute('open', true);
        el.addEventListener('toggle', () => {
            if (!el.open) el.open = true;
        });
    });

    // 열기 버튼
    btnOpen.addEventListener('click', (e) => {
        e.preventDefault();
        accTab.classList.add('open');
        dim.hidden = false;
        btnOpen.hidden = true;
        btnClose.hidden = false;
    });

    // 닫기 버튼
    btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        accTab.classList.remove('open');
        dim.hidden = true;
        btnOpen.hidden = false;
        btnClose.hidden = true;
    });

    // 딤 클릭 시 닫기
    dim.addEventListener('click', () => {
        accTab.classList.remove('open');
        dim.hidden = true;
        btnOpen.hidden = false;
        btnClose.hidden = true;
    });

    // 탭 클릭 시: active 처리 + 스크롤 이동 + 열림 닫힘 처리
    tabLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetAccordion = accordions[index];
            if (!targetAccordion) return;

            // 아코디언 열기
            targetAccordion.open = true;

            // 탭 활성화
            tabItems.forEach(li => li.classList.remove('active'));
            tabItems[index].classList.add('active');

            // 스크롤 이동
            const dvh = window.innerHeight / 100;
            const offsetTop = targetAccordion.getBoundingClientRect().top + window.scrollY;
            const scrollTo = offsetTop - (10 * dvh);

            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            });

            // 탭 닫기 처리
            accTab.classList.remove('open');
            dim.hidden = true;
            btnOpen.hidden = false;
            btnClose.hidden = true;
            // 열기
            accTab.classList.add('open');
            // 닫기
            accTab.classList.remove('open');
        });
    });
});
