var mediaQuery = window.matchMedia("(max-width: 600px)");
var maxWidth = 0;

function handleScreenChange(e) {
    if (e.matches) {
        // Экран меньше или равен 600 пикселей
        console.log("Экран меньше или равен 600 пикселей");
        
        maxWidth = 100;
    } else {
        // Экран больше 600 пикселей
        console.log("Экран больше 600 пикселей");

        maxWidth = 50;
    }
}

// Вызываем функцию один раз для начальной проверки
handleScreenChange(mediaQuery);

// Добавляем слушатель для изменений
mediaQuery.addListener(handleScreenChange);

function openNav() {
    document.getElementById("mySidebar").style.width = maxWidth + "%";
    document.getElementById("myOverlay").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("myOverlay").style.display = "none"; 
}