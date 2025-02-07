$(function () {
    //---------------------------------------------------------------------------------------------
    /// ------------ 메뉴바에서 클릭한 부분 색 바뀜 + 해당 부분으로 부드럽게 이동 + 해당 위치로 스크롤이 올때마다 자동으로 바껴야함
    let menu_now_two = 0;

    $('.sub_menu_list_in').click(function () {
        $('.sub_menu_list_in, .sub_menu_list_in a').removeClass('on');
        $(this).eq(menu_now_two).addClass('on');

        let now_i_two = $(this).attr('data-index');
        let p1_two = now_i_two - 1;
        let now_p1_two = $('section').eq(p1_two).offset().top;
        let now_p2_two = $('section').eq(p1_two).height();

        $('html, body').animate({
            scrollTop: now_p1_two + now_p2_two
        }, 1000)

    });



    //---------------------------------------------------------------------------------------------
    //----------- 디자인에 호버하면 리스트가 보이게!!
    let menuitem = $('.sub_menu_list_in').eq(3); // 네 번째 메뉴
    let designlist = $('#design_list'); // 디자인 리스트

    // 네 번째 메뉴에 마우스를 올리면 보이게
    menuitem.on('mouseenter', function () {
        designlist.stop(true, true).fadeIn(200);
    });

    // 디자인 리스트에서도 유지되게
    designlist.on('mouseenter', function () {
        $(this).stop(true, true).fadeIn(200);
    });

    // 메뉴 & 디자인 리스트에서 마우스가 벗어나면 숨기기
    menuitem.add(designlist).on('mouseleave', function () {
        setTimeout(function () {
            if (!menuitem.is(':hover') && !designlist.is(':hover')) {
                designlist.stop(true, true).fadeOut(200);
            }
        }, 200); // 살짝 딜레이를 줘서 부드럽게 처리
    });



    //---------------------------------------------------------------------------------------------
    //----------- v푸터 멈추게끔
    footer_fix_two();
    $(window).scroll(function () {
        footer_fix_two();
    });

    let me_bo = parseInt($('#sub_menu_big').css('bottom'));
    let me_bo_two = parseInt($('#sub_menu_big').css('bottom'));
    let footer_h = $('#footer').height();
    let section_five_mb_two = parseInt($('#section_five').css('margin-bottom'));

    function footer_fix_two() {
        //--- footer 위에서 메뉴바 멈추기
        let docH = $(document).height();
        let s_top = $(window).scrollTop();
        let winH = $(window).height();

        let fo_height = docH - s_top - winH;

        let ab_bottom = (section_five_mb_two / 2 - 20) + footer_h;

        if (fo_height <= ab_bottom - me_bo) {
            $('#sub_menu_big').css({
                'position': 'absolute',
                bottom: ab_bottom
            });
        } else {
            $('#sub_menu_big').css({
                'position': 'fixed',
                bottom: me_bo_two
            });
        }
    }

    // menu_bar();
    // footer_fix();
    // $(window).scroll(function () {
    //     menu_bar();
    //     footer_fix();

    //     $('#menu').addClass('on');
    // });

    // function menu_bar() {
    //     let main_top = $('#main').offset().top;
    //     let visual_top = $('#section_three').offset().top;
    //     let uiux_top = $('#section_four').offset().top;
    //     let motion_top = $('#section_five').offset().top;
    //     let scr_top_two = $(window).scrollTop();

    //     // let main = $('#section_three').outerHeight(); //높이
    //     // let visual = $('#section_four').outerHeight();
    //     // let uiux = $('#section_five').outerHeight();

    //     let main = $('#main, #section_one, #section_two').outerHeight(); //높이
    //     let visual = $('#section_three').outerHeight();
    //     let uiux = $('#section_four').outerHeight();
    //     let motion = $('#section_five').outerHeight();


    //     if ((scr_top_two - main_top) <= main) {
    //         $('.menu_list_in').removeClass('on')
    //         $('.menu_list_in:nth-child(1)').addClass('on')
    //     } else if ((scr_top_two - visual_top) <= visual) {
    //         $('.menu_list_in').removeClass('on')
    //         $('.menu_list_in:nth-child(2)').addClass('on')
    //     } else if ((scr_top_two - uiux_top) <= uiux) {
    //         $('.menu_list_in').removeClass('on')
    //         $('.menu_list_in:nth-child(3)').addClass('on')
    //     } else if ((scr_top_two - motion_top) <= motion) {
    //         $('.menu_list_in').removeClass('on')
    //         $('.menu_list_in:nth-child(4)').addClass('on')
    //     }
    // }

});