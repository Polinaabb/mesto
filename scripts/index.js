
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const popupImage = document.querySelector(".popup_image");
const popupFormEdit = popupEdit.querySelector(".popup__fieleds_edit");
const popupFormAdd = popupAdd.querySelector(".popup__fieleds_add");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonAdd = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const buttonCloseEdit = popupEdit.querySelector(".popup__close");
const buttonCloseAdd = document.querySelector(".popup__close_add");
const nameInput = document.querySelector(".popup__fieled_type_name");
const jobInput = document.querySelector(".popup__fieled_type_job");
const settings = {
  formSelector: ".popup__fieleds",
  inputSelector: ".popup__fieled",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_inactive",
  inputErrorClass: "popup__fieled_type_error",
  errorClass: "popup__fieled-error_active",
}; 

function popupCloseEcs(evt) {
  if(evt.key === "Escape"){
    const opened = document.querySelector(".popup_opened");
    closePopup(opened);
  };
}

function popupCloseOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target)
  }
}

popupEdit.addEventListener("click", popupCloseOverlay);

popupAdd.addEventListener("click", popupCloseOverlay);

popupImage.addEventListener("click", popupCloseOverlay);


function openPopup(popupEdit) {
  popupEdit.classList.add("popup_opened");
  document.addEventListener("keydown", popupCloseEcs);
}

function closePopup(popupEdit) {
  popupEdit.classList.remove("popup_opened");
  document.addEventListener("keydown", popupCloseEcs); 
}

buttonEdit.addEventListener("click", function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
});

buttonAdd.addEventListener("click", function () {
  openPopup(popupAdd);
});

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

popupFormEdit.addEventListener('submit', handleFormSubmitEdit);


const elements = document.querySelector(".elements");

const template = document.querySelector(".template");
const elementsCard = document.querySelector(".elements__card");
const titleInput = document.querySelector(".popup__fieled_type_title");
const linkInput = document.querySelector(".popup__fieled_type_link");
const submitBtAdd = document.querySelector(".popup__save_create");
const popupContainerAdd = document.querySelector(".popup__container-add");

function handleFormSubmitAdd(evt) {
  evt.preventDefault();

  const newCard = createCardTemplate({ name: titleInput.value, link: linkInput.value });
  titleInput.value = "";
  linkInput.value = "";
  evt.submitter.classList.add('popup__save_inactive')
  evt.submitter.disabled = true; 

  elements.prepend(newCard);

  closePopup(popupAdd);
}

popupFormAdd.addEventListener('submit', handleFormSubmitAdd);


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


const titlePopup = document.querySelector(".popup__name");
const imgPopup = document.querySelector(".popup__image");
const titleCard = document.querySelector(".elements__name");
const imageCard = document.querySelector(".elements__image");
const imageOpenBt = document.querySelectorAll(".elements__image");
const imageClose = document.querySelector(".popup__close_image");

const openCard = (data) => {
  openPopup(popupImage);
  titlePopup.textContent = data.name;
  imgPopup.src = data.link;
  popupImage.alt = data.name;
}

render();




