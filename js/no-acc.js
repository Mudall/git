document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('details.accordion');
    const accTab = document.querySelector('.acc-tab');
    const tabList = accTab.querySelector('ul');
    const tabItems = tabList.querySelectorAll('li');
    const tabLinks = tabList.querySelectorAll('a');
    const btnOpen = accTab.querySelector('.on');
    const btnClose = accTab.querySelector('.off');
    const dim = document.querySelector('.acc-dim');
    const scrollLockTarget = document.querySelector('.menu-section');

    // 터치 스크롤 막기 함수 (모바일 대응용)
    const preventTouchScroll = (e) => {
        e.preventDefault();
    };

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

        // 스크롤 막기
        scrollLockTarget.classList.add('scroll-lock');
        document.body.addEventListener('touchmove', preventTouchScroll, { passive: false });
    });

    // 닫기 버튼
    btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        accTab.classList.remove('open');
        dim.hidden = true;
        btnOpen.hidden = false;
        btnClose.hidden = true;

        // 스크롤 복원
        scrollLockTarget.classList.remove('scroll-lock');
        document.body.removeEventListener('touchmove', preventTouchScroll);
    });

    // 딤 클릭 시 닫기
    dim.addEventListener('click', () => {
        accTab.classList.remove('open');
        dim.hidden = true;
        btnOpen.hidden = false;
        btnClose.hidden = true;

        // 스크롤 복원
        scrollLockTarget.classList.remove('scroll-lock');
        document.body.removeEventListener('touchmove', preventTouchScroll);
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
            const scrollTo = offsetTop - (10 * dvh) - 225;

            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            });

            // 탭 닫기 처리
            accTab.classList.remove('open');
            dim.hidden = true;
            btnOpen.hidden = false;
            btnClose.hidden = true;

            // 스크롤 복원
            scrollLockTarget.classList.remove('scroll-lock');
            document.body.removeEventListener('touchmove', preventTouchScroll);
        });
    });
});



// 클릭시 탭이동
document.addEventListener('DOMContentLoaded', () => {
    const accTab = document.querySelector('.acc-tab ul');

    const scrollToActiveTab = () => {
        const activeItem = accTab.querySelector('li.active');
        if (activeItem) {
            const containerLeft = accTab.scrollLeft;
            const containerWidth = accTab.offsetWidth;

            const itemLeft = activeItem.offsetLeft;
            const itemWidth = activeItem.offsetWidth;

            // 스크롤 위치 조정: active li가 왼쪽에 붙도록
            accTab.scrollTo({
                left: itemLeft-20,
                behavior: 'smooth'
            });
        }
    };

    scrollToActiveTab();

    // 탭 클릭 시 active 클래스 변경 + 스크롤 이동
    const tabItems = accTab.querySelectorAll('li');
    tabItems.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            tabItems.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            scrollToActiveTab();
        });
    });
});
