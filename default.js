$(function () { //document.ready 이벤트

    // ------------- X 버튼 동작
    $('#menu_h').click(function () {
        // $('#mhwrap').removeClass('on');
        $('#mhwrap').addClass('on');
    });

    $('.hh_image').click(function () {
        $('#mhwrap').removeClass('on');
    });

    //---------------------------------------------------------------------------------------------
    /////// --------- 원이 마우스를 따라오면서, 반전시킴 / but 스크롤 할 때 원이 바로바로 안따라옴...!!
    // cursor_e();
    $(document).on('mousemove', function (e) {
        cursor_e(e);
    });

    function cursor_e(e) {
        const cursorEffect = $(".cursor");

        const pageX = e.pageX; // 문서 전체 기준 X 좌표
        const pageY = e.pageY; // 문서 전체 기준 Y 좌표
        const clientX = e.clientX; // 뷰포트 기준 X 좌표
        const clientY = e.clientY; // 뷰포트 기준 Y 좌표

        // 커서 위치 업데이트 (문서 기준)
        cursorEffect.css({
            left: `${pageX}px`,
            top: `${pageY}px`
        });

        // 좌표 출력 (디버깅용)
        // console.log(`문서 좌표: (${pageX}, ${pageY}) | 뷰포트 좌표: (${clientX}, ${clientY})`);

    }

    footer_fix()
    footer_fix_two()

    let me_bo = parseInt($('#menu').css('bottom'));
    let me_bo_two = parseInt($('#sub_menu_big').css('bottom'));
    let footer_h = $('#footer').height();
    let section_five_mb = parseInt($('#section_five').css('padding-bottom'));


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

    // function footer_fix_two() {
    //     //--- footer 위에서 메뉴바 멈추기
    //     let docH = $(document).height();
    //     let s_top = $(window).scrollTop();
    //     let winH = $(window).height();

    //     let fo_height = docH - s_top - winH;

    //     let ab_bottom = (section_five_mb / 2 - 20) + footer_h;

    //     if (fo_height <= ab_bottom - me_bo) {
    //         $('#sub_menu_big').css({
    //             'position': 'absolute',
    //             bottom: ab_bottom
    //         });
    //     } else {
    //         $('#sub_menu_big').css({
    //             'position': 'fixed',
    //             bottom: me_bo_two
    //         });
    //     }
    // }



});