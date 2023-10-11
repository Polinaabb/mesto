import { titlePopup, imgPopup, popupImage, openPopup } from "./index.js";

export class Card {
    constructor(data, templateSelector) {
      this._name = data.name;
      this._link = data.link;
      this._alt = data.name;
      this._templateSelector = templateSelector;
    }
  
    _getTemplate() {
        return document
          .querySelector(this._templateSelector)
          .content.querySelector('.elements__card')
          .cloneNode(true);
    } 
    
  
    generateCard() {
      this._element = this._getTemplate();
    
      this._element.querySelector('.elements__name').textContent = this._name;
      this._element.querySelector('.elements__image').src = this._link;
      this._element.querySelector('.elements__image').alt = this._link;

      this._setEventListeners();
  
      return this._element;
    }
  
    _like() {
      const likeCard = this._element.querySelector('.elements__icon');
      likeCard.classList.toggle('elements__icon_active'); 
    }
  
    _delete() {
      this._element.closest(".elements__card");
      this._element.remove();
    }
  
    _openCard() {
      openPopup(popupImage);
      titlePopup.textContent = this._name;
      imgPopup.src = this._link;
    }
  
    _setEventListeners() {
      this._element 
        .querySelector('.elements__icon') 
        .addEventListener('click', () => {
        this._like();
        })
      this._element
        .querySelector('.elements__delete')
        .addEventListener('click', () => {
          this._delete();
        })
      this._element
        .querySelector('.elements__image')
        .addEventListener('click', () => {
          this._openCard();
        })
    }
  } 
  
