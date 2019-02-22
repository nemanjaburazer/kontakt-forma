$(document).ready(function () {
    $('input').on('change', function () {
        var x = 0;
        var y = 0;
        $('input').each(function (i, val) {
            if ($(this).attr('required') == 'required') {
                x++;
                if ($(this).val() != '') {
                    y++;
                }
            }
        });
        var broj = (y / x) * 100;
        $('#procenti').empty();
        $('#procenti').append(broj.toFixed(0) + '%');
    });
});


$(document).ready(function () {
    $('#ime').blur(function () {
        $('#krug1').text('OK').css({ "background-color": "lightblue", "color": "white" });
    });
});

$(document).ready(function () {
    $('#prezime').blur(function () {
        $('#krug2').text('OK').css({ "background-color": "lightblue", "color": "white" });
    });
});

$(document).ready(function () {
    $('#email').blur(function () {
        $('#krug3').text('OK').css({ "background-color": "lightblue", "color": "white" });
    });
});

$(document).ready(function () {
    $('input:radio').focus(function () {
        $('#krug4').text('OK').css({ "background-color": "lightblue", "color": "white" });
    });

});