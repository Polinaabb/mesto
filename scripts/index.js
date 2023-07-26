const popup = document.querySelector(".popup");
const popup2 = document.querySelector(".popup-two")
const popupContainer = document.querySelector(".popup__container");
const buttonClick = document.querySelector(".profile__edit-button");
const buttonAdd = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const buttonClose = document.querySelector(".popup__close");
const buttonClose2 = document.querySelector(".popup-two__close");
const nameInput = document.querySelector(".popup__fieled_type_name");
const jobInput = document.querySelector(".popup__fieled_type_job");



buttonClick.addEventListener("click", function () {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
});



buttonAdd.addEventListener("click", function () {
  popup2.classList.add("popup_opened");
});

function closePopup() {
  popup.classList.remove("popup_opened");
}

buttonClose.addEventListener("click", function () {
  closePopup();
});

function closeAddPopup() {
  popup2.classList.remove("popup_opened");
}

buttonClose2.addEventListener("click", function () {
  closeAddPopup();
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup();
};

popupContainer.addEventListener('submit', handleFormSubmit);


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
const popupContainer2 = document.querySelector(".popup__container-two");


function handleFormSubmit2(evt) {
  evt.preventDefault();

  const titleInput = document.querySelector(".popup__fieled_type_title");
  const linkInput = document.querySelector(".popup__fieled_type_link");

  const newCard = createCardTemplate({ name: titleInput.value, link: linkInput.value });

  elements.prepend(newCard);

  closeAddPopup()
};

popupContainer2.addEventListener('submit', handleFormSubmit2);


const render = () => {
  initialCards.forEach((item) => {

    elements.append(createCardTemplate(item));
  });

  submitBt.addEventListener("click", handleFormSubmit2);
};


const createCardTemplate = (data) => {
  const card = template.content.cloneNode(true);

  const image = card.querySelector(".elements__image");
  const name = card.querySelector(".elements__name");

  image.src = data.link;
  name.textContent = data.name;

  const likeButton = card.querySelector(".elements__icon");
  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("elements__icon_active");
  });

  const deleteButton = card.querySelector(".elements__delete");
  deleteButton.addEventListener("click", deleteCard);

  const openCardBt = card.querySelector(".elements__image");
  openCardBt.addEventListener("click", openCard);

  return card;
}

const deleteCard = (e) => {
  const card = e.target.closest(".elements__card");
  card.remove();
}

const openCard = (e) => {
  const card = e.target.closest(".elements__card");
  const openCard = card.querySelector(".elements__image");
  const titleCard = card.querySelector(".elements__name");
  const imageCard = card.querySelector(".elements__image");

  openCard.addEventListener("click", function () {
    imagePopup.classList.add("image-popup_opened");
    titlePopup.textContent = titleCard.textContent;
    imgPopup.src = imageCard.src;
  });
}

const imagePopup = document.querySelector(".image-popup");
const titlePopup = document.querySelector(".image-popup__title");
const imgPopup = document.querySelector(".image-popup__img");
const titleCard = document.querySelector(".elements__name");
const imageCard = document.querySelector(".elements__image");
const imageOpenBt = document.querySelectorAll(".elements__image");
const imageClose = document.querySelector(".image-popup__close");


imageClose.addEventListener("click", function () {
  imagePopup.classList.remove("image-popup_opened");
});

render();



