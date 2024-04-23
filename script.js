console.log("Let's get ready to party with jQuery!");

$('article img').addClass('image-center');

$('article p:last-child').remove('p');

$('#title').css('font-size', `${Math.floor(Math.random() * 100)}px`);

$('ol').append('<li>hellow world</li>');

$('aside').children().remove();
$('aside').html('<p> hello sorry for the list that was here they are silly her is a paragraph instead lorem ipsum');

$("input").on('keyup blur', function () {
    let red = $("input").eq(0).val();
    let blue = $("input").eq(1).val();
    let green = $("input").eq(2).val();
    $("body").css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
});

$('img').on('click', function() {
    $(this).remove();
})

