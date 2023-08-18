const form = document.querySelector(".popup__fieleds");
const formInput = form.querySelector(".popup__fieled");
const formError = form.querySelector(`.${formInput.id}-error`);

 const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.add('popup__fieled_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__fieled-error_active');
};

 const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__fieled_type_error');
  errorElement.classList.remove('popup__fieled-error_active');
  errorElement.textContent = "";
 };

 const checkInputValidity = (formElement, inputElement) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
   } else {
    hideInputError(formElement, inputElement);
   }
 };

 
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__fieled'));
  const buttonElement = formElement.querySelector(".popup__save");

  toggleButtonState (inputList, buttonElement);

  inputList.forEach((inputElement) => {
  inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement);
    toggleButtonState (inputList, buttonElement);
  });
}); 
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
}); 
}


const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__fieleds'));
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

    setEventListeners(formElement);
}); 
  

}
  enableValidation()

  function toggleButtonState (inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', "");
    buttonElement.classList.add("popup__save_inactive");
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove("popup__save_inactive");
  } 
  }

