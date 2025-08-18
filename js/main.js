document.addEventListener("DOMContentLoaded", function() {

    const body = document.body;
    const html = document.documentElement;
    const overflowHidden = 'oveflowHidden';
    const menuBurger = document.querySelector('.menu_burger');
    const discountBanner = document.querySelector('.discount_banner');
    const header = document.querySelector('.header');
    const slider = document.querySelector('.slider_top_block');
    const tmenuOffset = header.offsetTop;

    function checkScroll() {
        if (window.scrollY > tmenuOffset + 10) {
            header.classList.add("fixed_block");
            menuBurger.classList.add('fixed_burger');
        } else {
            header.classList.remove("fixed_block");
            menuBurger.classList.remove('fixed_burger');
        }
    }

    checkScroll();

    window.addEventListener("scroll", checkScroll);

    if (discountBanner) {
        const closeBanner = discountBanner.querySelector('.close-banner');

        closeBanner.addEventListener('click', function() {
            discountBanner.classList.remove('show');
            header.classList.remove('top');
            if (slider) slider.classList.remove('top');
            if (menuBurger) menuBurger.classList.remove('top');
        })
    }

    const contactsBtn = document.querySelector('.contactsBtn');

    if (contactsBtn) {
        const contactsBlock = document.querySelector('.contacts_block');

        contactsBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            contactsBlock.classList.toggle('show');
        });

        document.addEventListener('click', function(e) {
            if (
                !contactsBlock.contains(e.target) &&
                !contactsBtn.contains(e.target)
            ) {
                contactsBlock.classList.remove('show');
            }
        });
    }


    const sliderTop = document.querySelector('.mySwiper_banner');

    if (sliderTop) {
        const swiper = new Swiper('.mySwiper_banner', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination-top',
                clickable: true,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 1000,
            on: {
                autoplayTimeLeft(s, time, progress) {
                    const activeButton = document.querySelector('.swiper-pagination-bullet-active::before');
                    if (activeButton) {
                        const remainingTime = (time / 1000);
                        activeButton.style.animationDuration = `${remainingTime}s`;
                    }
                },
                slideChange() {
                    setTimeout(() => {
                        const activeButton = document.querySelector('.swiper-pagination-bullet-active');
                        if (activeButton) {
                            const beforeEl = activeButton.querySelector('::before');
                            if (beforeEl) {
                                beforeEl.style.animation = 'none';
                                setTimeout(() => {
                                    beforeEl.style.animation = 'progressBar 6s linear infinite';
                                }, 10);
                            }
                        }
                    }, 50);
                }
            }
        });
    }

    const imageTooltip = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    if (imageTooltip.length) {
        imageTooltip.forEach(el => {
            new bootstrap.Tooltip(el)
        });
    }

    const sliderProductsHits = document.querySelector('.hits .mySwiper_products');

    if (sliderProductsHits) {

        const swiperHits = new Swiper(".hits .mySwiper_products", {
            slidesPerView: 4,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".hits .arrow_btn.next",
                prevEl: ".hits .arrow_btn.prev",
            },
            breakpoints: {
                0: { slidesPerView: 'auto' },
                992: { slidesPerView: 4 }
            }
        });
    }

    const sliderProductsNews = document.querySelector('.news .mySwiper_products');

    if (sliderProductsHits) {

        const swiperNews = new Swiper(".news .mySwiper_products", {
            slidesPerView: 4,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".news .arrow_btn.next",
                prevEl: ".news .arrow_btn.prev",
            },
            breakpoints: {
                0: { slidesPerView: 'auto' },
                992: { slidesPerView: 4 }
            }
        });
    }

    const favoriteAdd = document.querySelectorAll('.favorite-add');

    if (favoriteAdd.length) {
        favoriteAdd.forEach((btn) => {
            btn.addEventListener('click', function() {
                btn.classList.toggle('plus');
            })
        })
    }

    const accordionHeader = document.querySelectorAll('.accordion-header');

    if (accordionHeader) {

        accordionHeader.forEach(header => {
            header.addEventListener('click', function() {
                const parent = this.closest('.accordion-item');

                document.querySelectorAll('.accordion-item.active').forEach(item => {
                    if (item !== parent) {
                        item.classList.remove('active');
                    }
                });

                parent.classList.toggle('active');
            });
        });
    }

    const btnCopy = document.querySelectorAll(".btn_copy");

    if(btnCopy.length){
        btnCopy.forEach(function(btn) {
            btn.addEventListener("click", function() {
                const textBlock = btn.closest(".modal-body").querySelector(".text-copy");
                if (textBlock) {
                    const text = textBlock.innerText;

                    navigator.clipboard.writeText(text).then(
                        () => {
                            btn.classList.add("copied");
                            setTimeout(() => btn.classList.remove("copied"), 1500);
                        },
                        (err) => {
                            console.error("Ошибка копирования:", err);
                        }
                    );
                }
            });
        });
    }

    const burger = document.querySelector('.burger_btn');

    if(burger){
        burger.addEventListener('click', function(){
            burger.classList.toggle('opened');
            menuBurger.classList.toggle('opened');
            html.classList.toggle(overflowHidden);
        })
    }

    const showroomBtnMobile = document.querySelector('.showroom_mobile_btn');
    const showroomModalMobile = document.querySelector('.showroom_mobile_modal');

    if(showroomBtnMobile){
        showroomBtnMobile.addEventListener('click', function(){
            showroomModalMobile.classList.add('loaded')    
        });
        
        showroomModalMobile.querySelector('.title').addEventListener('click', function(){
            showroomModalMobile.classList.remove('loaded');
        })
    }

    const clockBtnMobile = document.querySelector('.clock_btn');
    const clockModalMobile = document.querySelector('.clock_modal');

    if(clockBtnMobile){
        clockBtnMobile.addEventListener('click', function(){
            clockModalMobile.classList.add('loaded')    
        });
        
        clockModalMobile.querySelector('.btn_button').addEventListener('click', function(){
            clockModalMobile.classList.remove('loaded');
        })
    }


    const menuWrap = document.querySelector('.menu_top .navbar-nav');
    if (!menuWrap) return;

    const handleMenuItems = (wrap, hasName) => {
        const menuItems = wrap.querySelectorAll('li a');

        menuItems.forEach(anchor => {
            const submenu = anchor.parentElement.querySelector('ul');

            if (hasName) {
                const nameParent = document.createElement('li');
                nameParent.classList.add('name_parent');

                const parentLi = anchor.closest('li');

                if (submenu) {
                    parentLi.classList.add('parent_li');
                    submenu.prepend(nameParent);
                    nameParent.textContent = anchor?.textContent || '';
                }

                nameParent.addEventListener('click', ({ target }) => {
                    const activeMenu = menuWrap.querySelector('ul.activity');
                    activeMenu?.classList.remove('activity');

                    const parentElement = target.closest('.loaded');
                    parentElement?.classList.remove('loaded', 'activity');

                    const activityParent = parentElement?.closest('.loaded');
                    activityParent?.classList.add('activity');
                });
            }

            if (submenu) {
                const arrow = document.createElement('i');
                arrow.classList.add('arrow');
                anchor.append(arrow);

                arrow.addEventListener('click', (event) => {
                    event.preventDefault();

                    const currentLi = arrow.closest('li');
                    currentLi.parentElement.querySelectorAll('li').forEach(siblingLi => {
                        if (siblingLi !== currentLi) siblingLi.classList.remove('hasSubmenu');
                    });
                    
                    const isActiveLi = currentLi.classList.contains('active');
                    if(isActiveLi) {
                        currentLi.classList.remove('active');
                    } else {
                        currentLi.classList.toggle('hasSubmenu');
    
                        if (hasName) {
                            const siblingUl = currentLi.querySelector('ul');
                            const activeMenu = menuWrap.querySelector('ul.activity');
                            
                            activeMenu?.classList.remove('activity');
                            siblingUl?.classList.add('loaded', 'activity');
                        }
                    }
                });
            }
        });
    };

    handleMenuItems(menuWrap, true);
});