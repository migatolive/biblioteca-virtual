// Header maker
$('#content').before('<header id="header"><nav id="hOps"><img id="logo" src="" alt=""><img src="src/imgs/menu.png" class="opsButton"></img><div class="ops"><a href="?pag=home" class="opContainer" id="home">Inicio</a><a href="?pag=contactUs" class="opContainer" id="contactUs">Contactanos</a><a href="?pag=portfolio" class="opContainer" id="portfolio">Portafolio</a><a href="?pag=aboutUs" class="opContainer" id="aboutUs">Sobre Nosotros</a><a href="?pag=books" class="opContainer" id="books">Books</a></div><div class="userOp"><img id="userImg" src="" alt=""><div id="userTxt"><p class="userName">Nombre de usuario</p><p class="userRange">Administrador</p></div></div></nav></header>');

$('#userImg').width($('#userImg').height()); // Converts the user's image into a circle.
$('#logo').width($('#logo').height()); // Converts the logo's image into a square.

// Mark Header option as selected
$("#" + new URLSearchParams(location.search).get('pag')).addClass('selected');

// Mobile header menu
if ($(window).width() <= 1024) {
    $('.ops').toggleClass('none');

    $('.opsButton').on('click', function(){
        $('.opsButton').toggleClass('opened');
        $('.ops').toggleClass('none');
    });
}

// Footer maker
$('#content').after('<footer id="footer"><a href="/terms.html" class="terms">Terminos y Condiciones</a><p class="copy">&copy; 2024 E.E.S.T N°5</p><div class="socialMedias"><a href=""><img src="src/imgs/facebook.png" alt="" class="sMedia"></a><a href=""><img src="src/imgs/instagram.png" alt="" class="sMedia"></a><a href=""><img src="src/imgs/gmail.png" alt="" class="sMedia"></a><a href=""><img src="src/imgs/youtube.png" alt="" class="sMedia"></a></div></footer>');