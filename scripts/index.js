let popup = document.querySelector(".popup");
let popupContainer = document.querySelector(".popup__container");
let buttonClick = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let buttonClose = document.querySelector(".popup__close");
let nameInput = document.querySelector(".popup__fieled_type_name");
let jobInput = document.querySelector(".popup__fieled_type_job");


buttonClick.addEventListener("click", function () {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
});

function closePopup() {
  popup.classList.remove('popup_opened');
}

buttonClose.addEventListener("click", function () {
  closePopup();
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup();
};

popupContainer.addEventListener('submit', handleFormSubmit);