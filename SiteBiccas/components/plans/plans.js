const selectors = {
  inputSwitch: '.js-input-switch',
  pricePro: '.js-card-price-pro',
  sale: '.js-sale',
  buttonTariff: '.js-button-tariff'
}

const classes = {
  hideContent: 'tariff-card__sale_invisible'
}

const buttons = document.querySelectorAll(selectors.inputSwitch);
const pricePro = document.querySelector(selectors.pricePro);
const saleBlock = document.querySelector(selectors.sale);
const buttonsTariff = document.querySelectorAll(selectors.buttonTariff);

const changeButton = (e) => {
  const currentTarget = e.currentTarget;
  if (currentTarget.getAttribute('data-input').includes('monthly')) {
    pricePro.textContent = '10';
    saleBlock.classList.add(classes.hideContent);
  } else {
    pricePro.textContent = '8';
    saleBlock.classList.remove(classes.hideContent);
  }
}

const handleClickButtonTariff = (e) => {
  e.preventDefault();
  const currentTarget = e.currentTarget;
  const currentAttribute = currentTarget.getAttribute('data-button-tariff');
  if (currentAttribute.includes('free')) {
    alert('Free Plan [monthly] 0$');
  } else if (currentAttribute.includes('pro')) {
    alert('Pro Plan [monthly] 0$');
  } else if (currentAttribute.includes('business')) {
    alert('Business Plan [monthly] 0$');
  }
}

buttons.forEach((button) => button.addEventListener('change', changeButton));
buttonsTariff.forEach((button) => button.addEventListener('click', handleClickButtonTariff));
