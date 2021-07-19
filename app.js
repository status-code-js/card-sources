const slides = document.querySelectorAll('.slide')

for (const slide of slides) {                   //цикл for of - вместо него можно использовать forEach()
    slide.addEventListener('click', () => {
        clearActiveClasses()                    //очистить все активные классы
        slide.classList.add('active')           //добавляем класс 'active'
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {                //на каждой итерации получаем определенный слайд - каждый элемент этого массива
        slide.classList.remove('active')
    })
}