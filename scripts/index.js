
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
const titleInput = document.querySelector('.popup__fieled_type_title');
const imageInput = document.querySelector('.popup__fieled_type_link');
const titlePopup = document.querySelector('.popup__name');
const imgPopup = document.querySelector('.popup__image');
const settings = {
  formSelector: ".popup__fieleds",
  inputSelector: ".popup__fieled",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_inactive",
  inputErrorClass: "popup__fieled_type_error",
  errorClass: "popup__fieled-error_active",
};
const formElementEdit = document.querySelector('.popup__fieleds_edit');
const formElementAdd = document.querySelector('.popup__fieleds_add');

const validatorformElEdit = new FormValidator(formElementEdit, settings);
validatorformElEdit.enableValidation();

const validatorformElAdd = new FormValidator(formElementAdd, settings);
validatorformElAdd.enableValidation();


function openPopup(popupEdit) {
  popupEdit.classList.add("popup_opened");
  document.addEventListener("keydown", popupCloseEcs);
}

function popupCloseEcs(evt) {
  if (evt.key === "Escape") {
    const opened = document.querySelector(".popup_opened");
    closePopup(opened);
  };
}

function popupCloseOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target)
  }
}

function closePopup(popupEdit) {
  popupEdit.classList.remove("popup_opened");
  document.addEventListener("keydown", popupCloseEcs);
}

const openPopupEdit = function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};


const openPopupAdd = function () {
  openPopup(popupAdd);
};

document.querySelectorAll('.popup__close').forEach(button => {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(buttonsPopup));
});

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup(popupEdit);
};

export { titlePopup, imgPopup, popupImage, openPopup };

const createCard = (item) => {
  const card = new Card(item, '.template');
  return card.generateCard();
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();

  const cardInfo = {
    name: titleInput.value,
    link: imageInput.value }
    createCard(cardInfo, '.template');
    document.querySelector('.elements').prepend(createCard(cardInfo));
  formElementAdd.reset();

  validatorformElAdd.toggleButtonState();

  closePopup(popupAdd);
}


initialCards.forEach((item) => {
  createCard(item, '.template')
  document.querySelector('.elements').append(createCard(item));
});


buttonEdit.addEventListener("click", openPopupEdit);

buttonAdd.addEventListener("click", openPopupAdd);

popupFormEdit.addEventListener('submit', handleFormSubmitEdit);

popupFormAdd.addEventListener('submit', handleFormSubmitAdd);

popupEdit.addEventListener("click", popupCloseOverlay);

popupAdd.addEventListener("click", popupCloseOverlay);

popupImage.addEventListener("click", popupCloseOverlay);

