import { settings } from "./validate.js";
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


const elements = document.querySelector(".elements");


// функция сохранения данных по нажатию кнопки эд
function handleFormSubmitAdd(evt) {
  evt.preventDefault();

  const newCard = createCardTemplate({ name: titleInput.value, link: linkInput.value });
  titleInput.value = '';
  linkInput.value = '';
  evt.submitter.classList.add('popup__save_inactive')
  evt.submitter.disabled = true;

  elements.prepend(newCard);

  closePopup(popupAdd);
}

// слушатель сабмита ед
popupFormAdd.addEventListener('submit', handleFormSubmitAdd);


const titlePopup = document.querySelector('.popup__name');
const imgPopup = document.querySelector('.popup__image');

export { titlePopup, imgPopup, popupImage, openPopup };

initialCards.forEach((item) => {
  const card = new Card(item, '.template');
  const cardElement = card.generateCard();

  document.querySelector('.elements').append(cardElement);
});

const formList = document.querySelectorAll('.popup__fieleds');

formList.forEach((formElement) => {
  const formValidator = new FormValidator(formElement, settings);
  formValidator.enableValidation()
})








// функция добавления template-элемента в DOM
// const render = () => {
//   initialCards.forEach((item) => {

//     elements.append(createCardTemplate(item));
//   });
// };

// // функция создания карточки
// const createCardTemplate = (data) => {
//   const card = template.content.cloneNode(true);

//   const image = card.querySelector(".elements__image");
//   const name = card.querySelector(".elements__name");

//   image.src = data.link;
//   image.alt = data.name;
//   name.textContent = data.name;

//   const likeButton = card.querySelector(".elements__icon");
//   likeButton.addEventListener("click", function (evt) {
//     evt.target.classList.toggle("elements__icon_active");
//   });

//   const deleteButton = card.querySelector(".elements__delete");
//   deleteButton.addEventListener("click", deleteCard);

//   const buttonOpenPopupImage = card.querySelector(".elements__image");
//   buttonOpenPopupImage.addEventListener("click", () => openCard(data))


//   return card;
// }

// // функция удаления карточки
// const deleteCard = (e) => {
//   const card = e.target.closest(".elements__card");
//   card.remove();
// }

// // функция открытия попапа имейдж
// const openCard = (data) => {
//   openPopup(popupImage);
//   titlePopup.textContent = data.name;
//   imgPopup.src = data.link;
//   popupImage.alt = data.name;
// }

// render();
