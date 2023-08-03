
const popup = document.querySelector(".popup");
const popupAdd = document.querySelector(".popup_add");

const popupContainer = document.querySelector(".popup__container");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonAdd = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const buttonClose = document.querySelector(".popup__close");
const buttonCloseAdd = document.querySelector(".popup__close_add");
const nameInput = document.querySelector(".popup__fieled_type_name");
const jobInput = document.querySelector(".popup__fieled_type_job");


function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// const openPopupEdit = () => {
//   popup.classList.add("popup_opened");
// }

// const openPopupAdd = () => {
//   popupAdd.classList.add("popup_opened");
// }

// const openPopupImg = () => {
//   imagePopup.classList.add("popup_opened");
// }

// const closePopupEdit = () => {
//   popup.classList.remove("popup_opened");
// }

// const closePopupAdd = () => {
//   popupAdd.classList.remove("popup_opened");
// }

// const closePopupImg = () => {
//   imagePopup.classList.remove("popup_opened");
// }

buttonEdit.addEventListener("click", function () {
  openPopup(popup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
});

buttonAdd.addEventListener("click", function () {
  openPopup(popupAdd);
});

buttonClose.addEventListener("click", function () {
  closePopup(popup);
});

buttonCloseAdd.addEventListener("click", function () {
  closePopup(popupAdd);
});

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup(popup);
};

popupContainer.addEventListener('submit', handleFormSubmitEdit);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const elements = document.querySelector(".elements");

const template = document.querySelector(".template");
const elementsCard = document.querySelector(".elements__card");
const titleInput = document.querySelector(".popup__fieled_type_title");
const linkInput = document.querySelector(".popup__fieled_type_link");
const submitBt = document.querySelector(".popup__save_create");
const popupContainerAdd = document.querySelector(".popup__container-add");

function handleFormSubmitAdd(evt) {
  evt.preventDefault();

  const newCard = createCardTemplate({ name: titleInput.value, link: linkInput.value });
  titleInput.value = "";
  linkInput.value = "";

  elements.prepend(newCard);

  closePopup(popupAdd);
}
popupContainerAdd.addEventListener('submit', handleFormSubmitAdd);


const render = () => {
  initialCards.forEach((item) => {

    elements.append(createCardTemplate(item));
  });

};

const createCardTemplate = (data) => {
  const card = template.content.cloneNode(true);

  const image = card.querySelector(".elements__image");
  const name = card.querySelector(".elements__name");

  image.src = data.link;
  image.alt = data.name;
  name.textContent = data.name;

  const likeButton = card.querySelector(".elements__icon");
  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("elements__icon_active");
  });

  const deleteButton = card.querySelector(".elements__delete");
  deleteButton.addEventListener("click", deleteCard);

  const buttonOpenPopupImage = card.querySelector(".elements__image");
  buttonOpenPopupImage.addEventListener("click", () => openCard(data))

  return card;
}

const deleteCard = (e) => {
  const card = e.target.closest(".elements__card");
  card.remove();
}

const imagePopup = document.querySelector(".popup_image");
const titlePopup = document.querySelector(".popup__name");
const imgPopup = document.querySelector(".popup__image");
const titleCard = document.querySelector(".elements__name");
const imageCard = document.querySelector(".elements__image");
const imageOpenBt = document.querySelectorAll(".elements__image");
const imageClose = document.querySelector(".popup__close_image");

const openCard = (data) => {
    openPopup(imagePopup);
    titlePopup.textContent = data.name;
    imgPopup.src = data.link;
    imagePopup.alt = data.name;
  }

imageClose.addEventListener("click", function () {
  closePopup(imagePopup);
});

render();



