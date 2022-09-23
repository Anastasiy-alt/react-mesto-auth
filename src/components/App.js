import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import api from '../utils/Api';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import DeleteCardPopup from './DeleteCardPopup';
import AddPlacePopup from './AddPlacePopup'
import '../index.css';

function App() {

    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [selectDelete, setSelectDelete] = useState(false);
    const [deleteCard, setDeleteCard] = useState('');

    useEffect(() => {
        api.getInitialCards()
            .then((cardData) => {
                setCards(cardData);
            })
            .catch((error) => {
                console.log(`Ошибка: ${error}`);
            })
    }, [])
    useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setCurrentUser(data);
            })
            .catch((error) => {
                console.log(`Ошибка: ${error}`);
            })
    }, [])

    const handleUpdateUser = (userInfo) => {
        api.setUserInfo(userInfo)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((error) => {
                console.log(`Ошибка: ${error}`);
            })
    };
    const handleAddCard = (card) => {
        api.addCard(card)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((error) => {
                console.log(`Ошибка: ${error}`);
            })
    };
    const handleUpdateAvatar = (avatar) => {
        api.setUserAvatar(avatar)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((error) => {
                console.log(`Ошибка: ${error}`);
            })
    };

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((error) => {
                console.log(`Ошибка: ${error}`);
            });
    }
    function handleCardDelete(cardId) {
        api.deleteCard(cardId)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== cardId));
            })
            .catch((error) => {
                console.log(`Ошибка: ${error}`);
            });
    }

    const handleRemoveClick = (cardId) => {
        setSelectDelete(!selectDelete);
        setDeleteCard(cardId);
    };
    const handleUserInfo = (userInfo) => {
        setCurrentUser(userInfo);
    }
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }
    const handleCardClick = (card) => {
        setSelectedCard(card);
    }
    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsDeletePopupOpen(false);
        setSelectDelete(false);
        setSelectedCard({});
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">

                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onDeleteClick={handleRemoveClick}
                    onUserInfo={handleUserInfo}
                    cards={cards}
                    onCardLike={handleCardLike}
                    cardId={deleteCard} />
                <Footer />

                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser} />

                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddCard={handleAddCard} />

                <DeleteCardPopup
                    name="delete"
                    title="Вы уверены?"
                    button="Да"
                    onClose={closeAllPopups}
                    isOpen={selectDelete}
                    cardId={deleteCard}
                    onCardDelete={handleCardDelete}
                    popupDelete={true} />

                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar} />

                <ImagePopup
                    onClose={closeAllPopups}
                    card={selectedCard} />

            </div>
        </CurrentUserContext.Provider>
    );
}
export default App;