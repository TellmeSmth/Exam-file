const elBox = document.querySelector('.site-header__list')
    const elBtn = document.querySelector('.site-header__btn')

    elBtn.addEventListener('click', () => {
      elBox.classList.toggle('site-header__list--active')
    })