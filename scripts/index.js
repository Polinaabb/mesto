
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./cards.js";
import { Card } from "./Card.js";


const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const popupImage = document.querySelector(".popup_image");
const popupFormEdit = popupEdit.querySelector(".popup__fieleds_edit");
const popupFormAdd = popupAdd.querySelector(".popup__fieleds_add");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonAdd = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector(".popup__fieled_type_name");
const jobInput = document.querySelector(".popup__fieled_type_job");
const elements = document.querySelector(".elements");
const titlePopup = document.querySelector('.popup__name');
const imgPopup = document.querySelector('.popup__image');
const likeCard = document.querySelector('.elements__icon');
const settings = {
  formSelector: ".popup__fieleds",
  inputSelector: ".popup__fieled",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_inactive",
  inputErrorClass: "popup__fieled_type_error",
  errorClass: "popup__fieled-error_active",
};

// функция закрытия попап ESCAPE
function popupCloseEcs(evt) {
  if (evt.key === "Escape") {
    const opened = document.querySelector(".popup_opened");
    closePopup(opened);
  };
}

// функция закрытия попап OVERLAY
function popupCloseOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target)
  }
}

// слушатели клика на OVERLAY
popupEdit.addEventListener("click", popupCloseOverlay);

popupAdd.addEventListener("click", popupCloseOverlay);

popupImage.addEventListener("click", popupCloseOverlay);

// финкция открытия попапа
function openPopup(popupEdit) {
  popupEdit.classList.add("popup_opened");
  document.addEventListener("keydown", popupCloseEcs);
}

// функция закрытия попапа
function closePopup(popupEdit) {
  popupEdit.classList.remove("popup_opened");
  document.addEventListener("keydown", popupCloseEcs);
}

// слушатель на кнопку открытия попап эдит
buttonEdit.addEventListener("click", function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
});

// слушатель на кнопку открытия попап эд
buttonAdd.addEventListener("click", function () {
  openPopup(popupAdd);
});

// слушатель на все кнопки 'Х'
document.querySelectorAll('.popup__close').forEach(button => {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(buttonsPopup));
});

// функция сохранения данных по нажатию кнопки эдит
function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup(popupEdit);
};

// слушатель сабмита едит
popupFormEdit.addEventListener('submit', handleFormSubmitEdit);


export { titlePopup, imgPopup, popupImage, openPopup };

const createCard = (item) => {
  const card = new Card(item, '.template');
  return card.generateCard();
}

// функция сохранения данных по нажатию кнопки эд
function handleFormSubmitAdd(evt) {
  evt.preventDefault();

  const cardsInfo = {
    name: titlePopup.value,
    link: imgPopup.value
  }
  createCard(cardsInfo, '.template');
  document.querySelector('.elements').prepend(createCard(cardsInfo));
  formElementAdd.reset();

  validatorformElAdd.toggleButtonState()

  closePopup(popupAdd);
}

// слушатель сабмита ед
popupFormAdd.addEventListener('submit', handleFormSubmitAdd);

initialCards.forEach((item) => {
  createCard(item, '.template')
  document.querySelector('.elements').append(createCard(item));
});


const formElementEdit = document.querySelector('.popup__fieleds_edit');
const formElementAdd = document.querySelector('.popup__fieleds_add');

const validatorformElEdit = new FormValidator(formElementEdit, settings);
validatorformElEdit.enableValidation();

const validatorformElAdd = new FormValidator(formElementAdd, settings);
validatorformElAdd.enableValidation(console.log('hello'));


