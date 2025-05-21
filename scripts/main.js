// URL для получения данных
const apiUrl = 'data.json';
// Получаем контейнер для карточек
const container = document.querySelector('.facilities__content') || document.querySelector('.facilities');
// Функция для создания HTML-разметки карточки
function createCard(src, caption) {
    return `
      <figure class="facilities__item">
        <img class="facilities__img" src="${src}" alt="${caption}">
        <figcaption>${caption}</figcaption>
      </figure>
    `;
}
// Функция для отображения карточек
function renderCards(cards) {
    if (!container)
        return;
    cards.forEach((card) => {
        container.insertAdjacentHTML('beforeend', createCard(card.src, card.caption));
    });
}
// Основная функция для загрузки и отображения данных
function loadAndDisplayCards() {
    if (!container)
        return;
    fetch(apiUrl)
        .then((response) => {
        if (!response.ok) {
            throw new Error('Реакция сети была не в порядке');
        }
        return response.json();
    })
        .then((data) => {
        renderCards(data);
    })
        .catch((error) => {
        console.error('Возникла проблема с операцией выборки:', error);
        // Дефолтные карточки
        const defaultCards = [
            { src: "img/icons/fridge.svg", caption: "Мини-холодильник" },
            { src: "img/icons/kitchen.svg", caption: "Мини-кухня" },
            { src: "img/icons/coffee.svg", caption: "Кофемашина" },
            { src: "img/icons/Frame.svg", caption: "Электрический чайник для приготовления чая" },
            { src: "img/icons/park.svg", caption: "Парковка" },
            { src: "img/icons/trees.svg", caption: "Захватывающие дух виды" },
            { src: "img/icons/temperature.svg", caption: "Полы с подогревом" },
            { src: "img/icons/plug.svg", caption: "230В" },
            { src: "img/icons/wifi.svg", caption: "Вайфай" },
            { src: "img/icons/shower.svg", caption: "Душ" },
            { src: "img/icons/toilet.svg", caption: "Смывные унитазы" },
            { src: "img/icons/towels.svg", caption: "Постельное белье и полотенца" }
        ];
        renderCards(defaultCards);
    });
}
// Запускаем загрузку и отображение карточек
loadAndDisplayCards();
//# sourceMappingURL=main.js.map