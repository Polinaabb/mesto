let popup = document.querySelector(".popup");
let popupContainer = document.querySelector(".popup__container");
let buttonClick = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let buttonSave = document.querySelector(".popup__form-save");
let buttonClose = document.querySelector(".popup__icon");
let descriptionInput = document.querySelector(".popup__container_fieled");
let nameInput = document.querySelector(".popup__form-name");
let jobInput = document.querySelector(".popup__form-profession");


buttonClick.addEventListener("click", function () {
    popup.classList.add('popup_opened');
  });

buttonClose.addEventListener("click", function () {
    popup.classList.remove('popup_opened');
});

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
  };

  buttonSave.addEventListener("click", function () {
    popup.classList.remove('popup_opened');
});

popupContainer.addEventListener('submit', handleFormSubmit);