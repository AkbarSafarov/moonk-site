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
                    const activeButton = document.querySelector('.swiper-pagination-top .swiper-pagination-bullet-active::before');
                    if (activeButton) {
                        const remainingTime = (time / 1000);
                        activeButton.style.animationDuration = `${remainingTime}s`;
                    }
                },
                slideChange() {
                    setTimeout(() => {
                        const activeButton = document.querySelector('.swiper-pagination-top .swiper-pagination-bullet-active');
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

    if (menuWrap){

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
    }

    const sliderRoom = document.querySelector('.mySwiper_room');

    if (sliderRoom) {
        const swiperRoom = new Swiper('.mySwiper_room', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination-room',
                clickable: true,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 1000,
            on: {
                autoplayTimeLeft(s, time, progress) {
                    const activeButton = document.querySelector('.swiper-pagination-room .swiper-pagination-bullet-active::before');
                    if (activeButton) {
                        const remainingTime = (time / 1000);
                        activeButton.style.animationDuration = `${remainingTime}s`;
                    }
                },
                slideChange() {
                    setTimeout(() => {
                        const activeButton = document.querySelector('.swiper-pagination-room .swiper-pagination-bullet-active');
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

    const loadingBtn = document.querySelector('.loading_btn');

    if(loadingBtn){
        loadingBtn.addEventListener('click', function(e){
            e.preventDefault();
            loadingBtn.classList.add('loaded');

            setTimeout(function(){
                loadingBtn.classList.remove('loaded');
            }, 2000)
        });
    }

    const sliderReview = document.querySelector('.mySwiper_review');

    if (sliderReview) {

        const swiperReview = new Swiper(".mySwiper_review", {
            slidesPerView: 4,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".review_section .arrow_btn.next",
                prevEl: ".review_section .arrow_btn.prev",
            },
            breakpoints: {
                0: { slidesPerView: 'auto' },
                992: { slidesPerView: 4 }
            }
        });
    }

    const sliderDetals = document.querySelector('.mySwiper_project_detals');

    if (sliderDetals) {

        const swiperDetals = new Swiper(".mySwiper_project_detals", {
            slidesPerView: 1,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".project_detals_section .arrow_btn.next",
                prevEl: ".project_detals_section .arrow_btn.prev",
            }
        });
    }

    const sliderBn = document.querySelector('.mySwiper_bn');

    if (sliderBn) {
        const swiperBn = new Swiper('.mySwiper_bn', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination-bn',
                clickable: true,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: ".slider_bn_block .arrow_btn.next",
                prevEl: ".slider_bn_block .arrow_btn.prev",
            },
            speed: 1000,
            on: {
                autoplayTimeLeft(s, time, progress) {
                    const activeButton = document.querySelector('.swiper-pagination-room .swiper-pagination-bullet-active::before');
                    if (activeButton) {
                        const remainingTime = (time / 1000);
                        activeButton.style.animationDuration = `${remainingTime}s`;
                    }
                },
                slideChange() {
                    setTimeout(() => {
                        const activeButton = document.querySelector('.swiper-pagination-room .swiper-pagination-bullet-active');
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

    const sliderTabs = document.querySelector('.mySwiper_tabs');

    if (sliderTabs) {

        const swiperTabs = new Swiper(".mySwiper_tabs", {
            slidesPerView: 1,
            spaceBetween: 16,
            effect: "fade",
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".tabs_imag .arrow_btn.next",
                prevEl: ".tabs_imag .arrow_btn.prev",
            }
        });
    }

    const sliderModal = document.querySelector('.mySwiper_modal');

    if (sliderModal) {
        const swiperModal = new Swiper('.mySwiper_modal', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: false,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            speed: 800,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            keyboard: {
                enabled: true,
            },
            mousewheel: {
                invert: false,
            },
            touchRatio: 1,
            touchAngle: 45,
            grabCursor: true,
        });

        const thumbnails = document.querySelectorAll('.thumbnail');
        const zoomLinks = document.querySelectorAll('.zoom');
        const modalEl = document.getElementById('showTabModal');

        // Клики по превьюшкам в модалке
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                swiperModal.slideTo(index);
                updateActiveThumbnail(index);
            });
        });

        // Клики по zoom в карточках
        zoomLinks.forEach((zoom, i) => {
            zoom.addEventListener('click', (e) => {
                e.preventDefault();

                // Берём ссылку на картинку
                const href = zoom.getAttribute('href');

                // Находим слайд в модалке с таким src
                const slides = sliderModal.querySelectorAll('.swiper-slide img, .swiper-slide video');
                let targetIndex = 0;
                slides.forEach((slide, idx) => {
                    if (slide.getAttribute('src') === href || slide.getAttribute('poster') === href) {
                        targetIndex = idx;
                    }
                });

                // После открытия модалки выставляем слайд
                modalEl.addEventListener('shown.bs.modal', () => {
                    swiperModal.slideTo(targetIndex);
                    updateActiveThumbnail(targetIndex);
                }, { once: true });
            });
        });

        function updateActiveThumbnail(activeIndex) {
            thumbnails.forEach((thumb, index) => {
                thumb.classList.toggle('active', index === activeIndex);
            });
        }

        swiperModal.on('slideChange', () => {
            updateActiveThumbnail(swiperModal.realIndex);
        });
    }

    const btnMore = document.querySelector(".btn_button.more");

    if(btnMore){
        const textBlock = document.querySelector(".hide_text");
        const span = btnMore.querySelector("span");

        btnMore.addEventListener("click", function () {
            textBlock.classList.toggle("active");
            btnMore.classList.toggle("active");

            if (textBlock.classList.contains("active")) {
              span.textContent = "Скрыть";
            } else {
              span.textContent = "Подробнее";
            }
        });
    }

    let categorySwiper = null;
        
    function initSwiper() {
        const projectsSlider = document.querySelector(".projects-swiper");

        if(!projectsSlider) return;

        if (window.innerWidth <= 991) {
            if (!categorySwiper) {
                categorySwiper = new Swiper('.projects-swiper', {
                    slidesPerView: 'auto',
                    spaceBetween: 12,
                });
            }
        } else {
            if (categorySwiper) {
                categorySwiper.destroy(true, true);
                categorySwiper = null;
            }
        }
    }
    
    window.addEventListener('load', initSwiper);
    
    window.addEventListener('resize', debounce(initSwiper, 250));
    
    // Функция debounce для оптимизации
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    let swiperInstance = null;

      function initSwiper2() {
        const InstanceSlider = document.querySelector(".service_price-swiper");

        if(!InstanceSlider) return;

        const windowWidth = window.innerWidth;

        if (windowWidth >= 768 && windowWidth < 1300) {
            if (!swiperInstance) {
                swiperInstance = new Swiper(".service_price-swiper", {
                    slidesPerView: 'auto',
                    spaceBetween: 16
                });
            }
        } else {
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
        }
    }

    initSwiper2();
    window.addEventListener("resize", initSwiper2);

    const phoneFields = document.querySelectorAll(".phone-input");

    if(phoneFields.length){
        phoneFields.forEach(field => {
            const input = field.querySelector("input");
            const clearBtn = field.querySelector(".clear-btn");

            IMask(input, {
                mask: "+{7} 000 000-00-00"
            });

            input.addEventListener("input", function () {
                clearBtn.style.display = input.value.length > 0 ? "block" : "none";
            });

            clearBtn.addEventListener("click", function () {
                input.value = "";
                clearBtn.style.display = "none";
                input.focus();
            });
        });
    }

    const sliderInterior = document.querySelector('.interiors_review');

    if (sliderInterior) {

        const swiperInterior = new Swiper(".interiors_review", {
            slidesPerView: 4,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".interiors_section .arrow_btn.next",
                prevEl: ".interiors_section .arrow_btn.prev",
            },
            breakpoints: {
                0: { slidesPerView: 'auto' },
                992: { slidesPerView: 4 }
            }
        });
    }

    const fileFields = document.querySelectorAll(".field.file input[type='file']");

    if(fileFields.length){
        fileFields.forEach(input => {
            input.addEventListener("change", function() {
                const label = this.closest("label").querySelector("span");
                if (this.files.length > 0) {
                    label.textContent = this.files[0].name; // название файла
                } else {
                    label.textContent = "Прикрепить файл"; // если файл убрали
                }
            });
        });
    }

    let comfortSwiper = null;
        
    function initComfortSwiper() {
        const comfortSlider = document.querySelector(".comfort-swiper");

        if(!comfortSlider) return;

        if (window.innerWidth <= 991) {
            if (!comfortSwiper) {
                comfortSwiper = new Swiper('.comfort-swiper', {
                    slidesPerView: 'auto',
                    spaceBetween: 12,
                });
            }
        } else {
            if (comfortSwiper) {
                comfortSwiper.destroy(true, true);
                comfortSwiper = null;
            }
        }
    }
    
    window.addEventListener('load', initComfortSwiper);
    
    window.addEventListener('resize', debounce(initComfortSwiper, 250));

    // Можно сделать еще более универсально
    function initResponsiveSwiper(selector, swiperClass) {
        let swiperInstance = null;
        const row = document.querySelector(selector);
        
        if (!row) return;
        
        function enableSwiper() {
            if (!swiperInstance && window.innerWidth <= 1426) {
                const children = Array.from(row.children);
                row.classList.add("swiper");
                row.classList.remove("row");
                row.innerHTML = `<div class="swiper-wrapper">
                    ${children.map(child => `<div class="swiper-slide">${child.outerHTML}</div>`).join("")}
                </div>`;
                swiperInstance = new Swiper(selector, {
                    slidesPerView: 'auto',
                    spaceBetween: 8,
                });
            }
        }
        
        function disableSwiper() {
            if (swiperInstance && window.innerWidth > 1426) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
                const slides = row.querySelectorAll(".swiper-slide .col");
                row.classList.remove("swiper");
                row.classList.add("row");
                row.innerHTML = "";
                slides.forEach(slide => row.appendChild(slide));
            }
        }
        
        function checkSwiper() {
            if (window.innerWidth <= 1426) {
                enableSwiper();
            } else {
                disableSwiper();
            }
        }
        
        checkSwiper();
        window.addEventListener("resize", checkSwiper);
    }

    // Использование
    initResponsiveSwiper(".js-subcat-row", "js-subcat-row");
    initResponsiveSwiper(".js-subcat2-row", "js-subcat2-row");

    const textBlock = document.querySelector(".js-text");
    const moreBtn = document.querySelector(".js-more");

    if (textBlock && moreBtn) {
        moreBtn.addEventListener("click", () => {
            textBlock.classList.toggle("open");
            moreBtn.textContent = textBlock.classList.contains("open") 
                ? "Скрыть" 
                : "Показать еще";
        });
    }
});


$(function() {

    $('.phone-input input').on('blur', function() {
        let phoneWrapper = $(this).parents('.field'),
            thisNumber = $(this).val().split(''),
            lastIndex = thisNumber.length - 1,
            lastItem = thisNumber[lastIndex];
        if (isNaN(lastItem)) {
            phoneWrapper.addClass('incorrect-phone');
            if (!phoneWrapper.find('.empty_number').length) {
                phoneWrapper.append('<div class="error_text empty_number">Введите номер телефона полностью </div>');
            }
        } else {
            phoneWrapper.removeClass('incorrect-phone');
            phoneWrapper.removeClass('error');
            phoneWrapper.find('.empty_number').remove();
        }
    });

    $('.field input').on('input', function() {
        let phoneWrapper = $(this).parents('.field'),
            thisNumber = $(this).val();
        if (thisNumber && phoneWrapper.hasClass('error')) {
            phoneWrapper.find('.error_text_r').remove();
        }
    });

    $('input,textarea').on('blur', function() {
        if ($(this).parents('.field').hasClass('error')) {
            $(this).parents('.field').removeClass('error');
            $(this).parents('.field').find('.error_text').remove();
        }
    })

    $('input[type="checkbox"]').on('change', function(event) {
        let fieldRequired = $(this).closest('.field.required');

        if (fieldRequired.length > 0) {
            if (!$(this).is(":checked")) {
                fieldRequired.addClass('no_checked');
            } else {
                fieldRequired.removeClass('no_checked error');
                fieldRequired.find('.error_text').remove();
            }
        }
    });

    $('.email-input input').on('blur', function() {
        let emailWrapper = $(this).parents('.field');
        let email = $(this).val();
        // Строгая проверка e-mail
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (email.length > 0 && !emailRegex.test(email)) {
            emailWrapper.addClass('incorrect-phone');

            if (!emailWrapper.find('.empty_number').length) {
                emailWrapper.append('<div class="error_text empty_number">Вы ввели некорректный e-mail</div>');
            }
        } else {
            emailWrapper.removeClass('incorrect-phone error');
            emailWrapper.find('.empty_number').remove();
        }
    });

    $('.field select').on('change', function() {
        var field = $(this).closest('.field');

        // При выборе значения удаляем ошибку
        if ($(this).val() && $(this).val() !== '' && $(this).val() !== '0' && $(this).val() !== 'default') {
            field.removeClass('error');
            field.find('.jq-selectbox').removeClass('error');
            field.find('.error_text').remove();
        }
    });

    $('.form_button').on('click', function(e) {
        let form = $(this).parents('form');
        let hasErrors = false;

        $(this).parents('form').find('.field').each(function() {
            // Валидация текстовых полей
            var valueInput = $(this).find('input').val();
            if ($(this).hasClass('required') && valueInput == '') {
                $(this).addClass('error');
                if (!$(this).find('.error_text').length) {
                    $(this).append('<div class="error_text error_text_r">Обязательное поле</div>');
                }
            }

            // Валидация textarea
            var valueTextarea = $(this).find('textarea').val();
            if ($(this).hasClass('required') && valueTextarea == '') {
                $(this).addClass('error');
                if (!$(this).find('.error_text').length) {
                    $(this).append('<div class="error_text error_text_r">Обязательное поле</div>');
                }
            }

            // Валидация чекбоксов
            if ($(this).hasClass('required') && $(this).find('input[type="checkbox"]').length) {
                if (!$(this).find('input[type="checkbox"]').is(":checked")) {
                    $(this).addClass('error no_checked');
                    if (!$(this).find('.error_text').length) {
                        $(this).append('<div class="error_text error_text_r">Обязательное поле</div>');
                    }
                } else {
                    $(this).removeClass('error no_checked');
                    $(this).find('.error_text').remove();
                }
            }

            // Валидация селектов
            if ($(this).hasClass('required') && $(this).find('select').length) {
                var selectValue = $(this).find('select').val();
                // Проверяем, выбрано ли какое-то значение (не пустое и не placeholder)
                if (!selectValue || selectValue === '' || selectValue === '0' || selectValue === 'default') {
                    $(this).addClass('error');
                    if (!$(this).find('.error_text').length) {
                        $(this).append('<div class="error_text error_text_r">Обязательное поле</div>');
                    }
                } else {
                    $(this).removeClass('error');
                    $(this).find('.error_text').remove();
                }
            }
        });

        // --- Проверка паролей ---
        let passwordField = form.find('input[placeholder="Новый пароль"]');
        let confirmField = form.find('input[placeholder="Подтверждение пароля"]');

        if (passwordField.length > 0) {
            let password = passwordField.val().trim();
            let confirmPassword = confirmField.val().trim();

            // длина пароля
            if (password.length < 6) {
                let parent = passwordField.closest('.field');
                parent.addClass('error');
                parent.find('.error_text').remove();
                parent.append('<div class="error_text">Пароль должен быть не менее 6 символов</div>');
                hasErrors = true;
            }

            // совпадение паролей
            if (password !== confirmPassword) {
                let parent = confirmField.closest('.field');
                parent.addClass('error');
                parent.find('.error_text').remove();
                parent.append('<div class="error_text">Пароли не совпадают</div>');
                hasErrors = true;
            }
        }

        if ($(this).closest('form').find('.field').hasClass('incorrect-phone') || $(this).closest('form').find('.field').hasClass('error')) {
            e.preventDefault();
        } else {
            e.preventDefault(); // пока для теста

            console.log("Форма прошла проверку, можно отправлять");
        }
    });
});