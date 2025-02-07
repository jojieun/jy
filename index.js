// 해당 one_card_list를 누르면, one_card_list랑 3번째 p에 on이 
// 들어면서 flex-grow도 2로 늘어나게 해야함 / 버튼은 그냥 진짜로 해당
// 페이지로 바로 넘어가는 용도로만 쓰임 /
//  즉 비율이 움직이는건 one_card_list를 누를때임!

// 그리고 위에 숫자도 바껴야함!! 05,02,01!!

// color_change를 누르면 on이 들어오면서 
// 페이지가 전환되게끔 + 위치 정보가 저장되서 똑같은 위치인데 색이 바뀌게 되어야 함

$(function () { //document.ready 이벤트

    let now_play = false;

    let me_bo = parseInt($('#menu').css('bottom'));
    let footer_h = $('#footer').height();
    let section_five_mb = parseInt($('#section_five').css('padding-bottom'));

    //-----------------스크롤 위치에 따라 변하는 배경색
    bodycolor();
    // section_two_fix();
    $(window).scroll(function () {
        bodycolor();
        Field_m();
        section_two_fix();
    });
    $('#section_three').css({
        height:$('#three_in').height()
    });
    $(window).resize(function(){
        $('#section_three').css({
            height:$('#three_in').height()
        });
    })

    // ------------------ section_two fix
    function section_two_fix() {
        //--- footer 위에서 메뉴바 멈추기
        let sec_two_of_t = $('#section_two').offset().top;
        let s_top = $(window).scrollTop();
        let sec_two_h = $('#section_two').height();

        if (sec_two_of_t <= s_top && sec_two_of_t + sec_two_h >= s_top) {
            $('#three_in').css({
                'position': 'fixed',
                top: 0,
                left: 0,
            });
        } else {
            $('#three_in').css({
                'position': 'relative'
            });
        }
    }



    function bodycolor() {
        let sec_3Top = $('#section_three').offset().top;
        let scr_top = $(window).scrollTop();
        let now_height = scr_top - sec_3Top; //전체 스크롤 탑 길이에서 #section_three offset.top 길이를 뺀 길이

        if (now_height >= 0) {
            $('body, #section_three').css({
                'background-color': 'var(--one-black-color)'
            });

            $('#logo').css({
                'background-image': 'url(image/logo_white.png)'
            });

            $('#menu_h').css({
                'background-image': 'url(image/menu_white.svg)'
            });

        } else {
            $('body').css({
                'background-color': 'var(--one-white-color)'
            });

            $('#logo').css({
                'background-image': 'url(image/logo.png)'
            });

            $('#menu_list').css({
                'display': 'flex'
            });

            $('#menu_h').css({
                'background-image': 'url(image/menu.svg)'
            });
        }
    }

    // ------------- X 버튼 동작

    // $('#menu_h').click(function () {
    //     // $('#mhwrap').removeClass('on');
    //     $('#mhwrap').addClass('on');
    // });

    // $('.hh_image').click(function () {
    //     $('#mhwrap').removeClass('on');
    // });

    //---------------------------------------------------------------------------------------------

    // ------------- 이름 소개 부분, 클릭하면 별 나오기

    $('.sub_image, .sub_two_wrap').click(function () {
        $('.ssa_one, .circle').toggleClass('on');
    });


    //---------------------------------------------------------------------------------------------
    /// ------------ 메뉴바에서 클릭한 부분 색 바뀜 + 해당 부분으로 부드럽게 이동 + 해당 위치로 스크롤이 올때마다 자동으로 바껴야함
    let menu_now = 0;

    $('.menu_list_in').click(function () {
        $('.menu_list_in, .menu_list_in a').removeClass('on');
        $(this).eq(menu_now).addClass('on');

        let now_i = $(this).attr('data-index');
        let now_p = $('section').eq(now_i).offset().top+4;

        $('html, body').animate({
            scrollTop:now_p
        },1000)

    });

    menu_bar();
    footer_fix();
    $(window).scroll(function () {
        menu_bar();
        footer_fix();

        $('#menu').addClass('on');
    });

    function menu_bar() {
        let main_top = $('#main').offset().top;
        let visual_top = $('#section_three').offset().top;
        let uiux_top = $('#section_four').offset().top;
        let motion_top = $('#section_five').offset().top;
        let scr_top_two = $(window).scrollTop();

        // let main = $('#section_three').outerHeight(); //높이
        // let visual = $('#section_four').outerHeight();
        // let uiux = $('#section_five').outerHeight();

        let main = $('#main, #section_one, #section_two').outerHeight(); //높이
        let visual = $('#section_three').outerHeight();
        let uiux = $('#section_four').outerHeight();
        let motion = $('#section_five').outerHeight();


        if ((scr_top_two - main_top) <= main) {
            $('.menu_list_in').removeClass('on')
            $('.menu_list_in:nth-child(1)').addClass('on')
        } else if ((scr_top_two - visual_top) <= visual) {
            $('.menu_list_in').removeClass('on')
            $('.menu_list_in:nth-child(2)').addClass('on')
        } else if ((scr_top_two - uiux_top) <= uiux) {
            $('.menu_list_in').removeClass('on')
            $('.menu_list_in:nth-child(3)').addClass('on')
        } else if ((scr_top_two - motion_top) <= motion) {
            $('.menu_list_in').removeClass('on')
            $('.menu_list_in:nth-child(4)').addClass('on')
        }
    }

    // function footer_fix() {
    //     //--- footer 위에서 메뉴바 멈추기
    //     let footer_top = $('#footer').offset().top;
    //     let s_top = $(window).scrollTop();
    //     let fo_height = footer_top - s_top;

    //     if(fo_height < 176) {
    //         $('#menu').css({
    //             'position': 'absolute'
    //         });
    //     } else {
    //         $('#menu').css({
    //             'position': 'fixed',
    //             'bottom': '50px' 
    //         });
    //     }
    // }

    function footer_fix() {
        //--- footer 위에서 메뉴바 멈추기
        let docH = $(document).height();
        let s_top = $(window).scrollTop();
        let winH = $(window).height();

        let fo_height = docH - s_top - winH;

        let ab_bottom = (section_five_mb / 2 - 20) + footer_h;

        if (fo_height <= ab_bottom - me_bo) {
            $('#menu').css({
                'position': 'absolute',
                bottom: ab_bottom
            });
        } else {
            $('#menu').css({
                'position': 'fixed',
                bottom: me_bo
            });
        }
    }


    // ----- 색 변화

    let now_color = false;

   $('#color_change').click(function(){
    if(now_color) {
        $(':root').css('--one-white-color', '#F8F8F8');
        $(':root').css('--one-black-color', '#0C0C0F');
        $(':root').css('--one_card_color', '#E9E9E9');
        $('#star_gif').css('background-image', 'url("image/star_B.gif")');
        $('.m_title_two_img').css('background-image', 'url("image/DESIGN\ ARCHIVE.svg")');
        $('#port').css('background-image', 'url("image/portfolio_circle_big.svg")');
        $('#sub_line').css('background-image', 'url("image/::.svg")');
        $('.m_a_img').css('background-image', 'url("image/main_arrow.gif")');
        $('#sec_one_title_img').css('background-image', 'url("image/icon.svg")');
        $('#two_icon_img').css('background-image', 'url("image/icon.svg")');
        $('.instargram_icon').css('background-image', 'url("image/instargram_icon.svg")');
        $('.link_icon').css('background-image', 'url("image/link_icon.svg")');
        $('#footer_img').css('background-image', 'url("image/DESIGN\ ARCHIVE_white.svg")');
        $('.hwi:nth-child(5)').css('background-image', 'url("image/menu_logo_white.svg")');
        $('.menu_list_in:nth-child(2) .menu_img').css('background-image', 'url("image/diamond:real:black.svg")');
        $('.menu_list_in:nth-child(3) .menu_img').css('background-image', 'url("image/circle:real:black.svg")');
        $('.menu_list_in:nth-child(4) .menu_img').css('background-image', 'url("image/flower:real:black.svg")');
    } else {
        $(':root').css('--one-white-color', '#F6F5E3');
        $(':root').css('--one-black-color', '#02343F');
        $(':root').css('--one_card_color', '#DEE2D3');
        $('#star_gif').css('background-image', 'url("image_change/star.gif")');
        $('.m_title_two_img').css('background-image', 'url("image_change/DESIGN\ ARCHIVE.svg")');
        $('#port').css('background-image', 'url("image_change/portfolio_circle.svg")');
        $('#sub_line').css('background-image', 'url("image_change/::.svg")');
        $('.m_a_img').css('background-image', 'url("image_change/main_arrow.gif")');
        $('#sec_one_title_img').css('background-image', 'url("image_change/icon.svg")');
        $('#two_icon_img').css('background-image', 'url("image_change/icon.svg")');
        $('.instargram_icon').css('background-image', 'url("image_change/instargram.svg")');
        $('.link_icon').css('background-image', 'url("image_change/gmail.svg")');
        $('#footer_img').css('background-image', 'url("image_change/DESIGN\ ARCHIVE_yellow.svg")');
        $('.hwi:nth-child(5)').css('background-image', 'url("image_change/icon_yellow.svg")');
        $('.menu_list_in:nth-child(2) .menu_img').css('background-image', 'url("image_change/star.svg")').css('width','16px').css('height','16px');
        $('.menu_list_in:nth-child(3) .menu_img').css('background-image', ' url("image_change/circle.svg")').css('width','16px').css('height','16px');
        $('.menu_list_in:nth-child(4) .menu_img').css('background-image', 'url("image_change/flower:real:green.svg")').css('width','16px').css('height','16px');
        // svg로 넣은 것들은 색 번경된걸 따로 뽑아서 바꿔줘야 함
    }
    now_color=!now_color
   });

    //---------------------------------------------------------------------------------------------
    /////// --------- 원이 마우스를 따라오면서, 반전시킴 / but 스크롤 할 때 원이 바로바로 안따라옴...!!
    // cursor_e();
    // $(document).on('mousemove', function (e) {
    //     cursor_e(e);
    // });

    // function cursor_e(e) {
    //     const cursorEffect = $(".cursor");

    //     const pageX = e.pageX; // 문서 전체 기준 X 좌표
    //     const pageY = e.pageY; // 문서 전체 기준 Y 좌표
    //     const clientX = e.clientX; // 뷰포트 기준 X 좌표
    //     const clientY = e.clientY; // 뷰포트 기준 Y 좌표

    //     // 커서 위치 업데이트 (문서 기준)
    //     cursorEffect.css({
    //         left: `${pageX}px`,
    //         top: `${pageY}px`
    //     });

    //     // 좌표 출력 (디버깅용)
    //     // console.log(`문서 좌표: (${pageX}, ${pageY}) | 뷰포트 좌표: (${clientX}, ${clientY})`);

    // }


    //---------------------------------------------------------------------------------------------
    // section_one 부분 카드 움직임 + 숫자 바뀜
    let currentIndex = 0;

    const count_list = $('.count');
    const card_list = $('.one_card_list');
    const card_list_p = $('.one_card_list p:nth-child(3)');
    const card_btn = $('.card_btn');
    const card_list_small = $('#sec_one_card_small .one_card_list');
    const card_list_p_small = $('#sec_one_card_small .one_card_list p:nth-child(3)');
    const card_btn_small = $('#sec_one_card_small .card_btn');


    count_list.removeClass('on').eq(currentIndex).addClass('on');
    card_list.removeClass('on').eq(currentIndex).addClass('on');
    card_list_p.removeClass('on').eq(currentIndex).addClass('on');
    card_btn.removeClass('on').eq(currentIndex).addClass('on');
    card_list_small.removeClass('on').eq(currentIndex).addClass('on');
    card_list_p_small.removeClass('on').eq(currentIndex).addClass('on');
    card_btn_small.removeClass('on').eq(currentIndex).addClass('on');

    function field_motion() {
        currentIndex++;
        if (currentIndex == 3) {
            currentIndex = 0;
        }
        count_list.removeClass('on').eq(currentIndex).addClass('on');
        card_list.removeClass('on').eq(currentIndex).addClass('on');
        card_list_p.removeClass('on').eq(currentIndex).addClass('on');
        card_btn.removeClass('on').eq(currentIndex).addClass('on');
        card_list_small.removeClass('on').eq(currentIndex).addClass('on');
        card_list_p_small.removeClass('on').eq(currentIndex).addClass('on');
        card_btn_small.removeClass('on').eq(currentIndex).addClass('on');
    }

    // setInterval은 지정한 delay 간격으로 함수를 반복 실행 / 멈추려면 clearInterval을 사용하여 중지
    // let field_motion = setInterval(function () {
    //     currentIndex++;
    //     if (currentIndex == 3) {
    //         currentIndex = 0;
    //     }
    //     count_list.removeClass('on').eq(currentIndex).addClass('on');
    //     card_list.removeClass('on').eq(currentIndex).addClass('on');
    //     card_list_p.removeClass('on').eq(currentIndex).addClass('on');
    //     card_btn.removeClass('on').eq(currentIndex).addClass('on');
    // }, 6000);

    //---------------------------------------------------------------------------------------------
    //---------특정 위치에서 모션이 움직이게 하고 싶음...!

    Field_m();

    function Field_m() {
        let setoneTop = $('#section_one').offset().top;
        let nowst = $(window).scrollTop();

        if (!now_play && setoneTop < nowst) {
            now_play = true;
            field_motion();
            setInterval(field_motion, 6000);
        }
    }

    //---------------------------------------------------------------------------------------------


});