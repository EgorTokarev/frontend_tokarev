document.addEventListener('DOMContentLoaded', function () {
  // Инициализация Swiper
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.pagination',
      bulletClass: 'pagination-bullet',
      bulletActiveClass: 'pagination-bullet-active',
      horizontalClass: 'pagination-horizontal',
    },
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
  });

  // Модальное окно
  const modal = document.querySelector('#myModal');
  const btn = document.querySelector("#myBtn");
  const span = document.querySelector(".close");

  if (btn && modal) {
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      modal.style.display = "block";
    });
  }

  if (span && modal) {
    span.addEventListener('click', function () {
      modal.style.display = "none";
    });
  }

  // Закрытие модального окна при клике вне его
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Прелоадер
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    const minDisplayTime = 1000;
    const startTime = Date.now();

    function hidePreloader() {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

      setTimeout(() => {
        preloader.classList.add('preloader--hidden');
        setTimeout(() => {
          preloader.remove();
        }, 500);
      }, remainingTime);
    }

    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
    }
  }

// Загрузка и отображение карточек удобств

const apiUrl = 'data.json';
const container = document.querySelector('.facilities__content') || document.querySelector('.facilities');

function createCard(src, caption) {
  return `
  <figure class="facilities__item">
    <img class="facilities__img" src="${src}" alt="${caption}">
    <figcaption>${caption}</figcaption>
  </figure>
  `;
}

if (container) {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Реакция сети была не в порядке');
      }
      return response.json();
    })
    .then((data) => {
      data.forEach(item => {
        container.insertAdjacentHTML('beforeend', createCard(item.src, item.caption));
      });
    })
    .catch((error) => {
      console.error('Возникла проблема с операцией выборки:', error);

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
      defaultCards.forEach(card => {
        container.insertAdjacentHTML('beforeend', createCard(card.src, card.caption));
      });
    });
}
});
