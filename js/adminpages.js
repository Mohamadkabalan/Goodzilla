

$(document).ready(function () {
	$(".tab-list li a").click(function (event) {
        event.preventDefault();
        $(".tab-list li a").removeClass('active');
        $(this).addClass('active');
        var $id = $(this).attr('id');
        var $sub = $('#sub_' + $id);
        $('.contenttabs').hide();
        $sub.show();
    });
});