let popup = document.querySelector(".popup");
let popupContainer = document.querySelector(".popup__container");
let buttonClick = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let buttonSave = document.querySelector(".popup__container-save");
let buttonClose = document.querySelector(".popup__close");
let descriptionInput = document.querySelector(".popup__container_fieled");
let nameInput = document.querySelector(".popup__container-name");
let jobInput = document.querySelector(".popup__container-job");


buttonClick.addEventListener("click", function () {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
  });

buttonClose.addEventListener("click", function () {
    popup.classList.remove('popup_opened');
});

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
  };

popupContainer.addEventListener('submit', handleFormSubmit);