import Header from './components/Header';
import Places from './components/Places';
import Modal from './components/Modal';
import ConfirmDelete from './components/ConfirmDelete.jsx';
import { AVAILABLE_PLACES } from './data.js';

import { useState, useRef } from 'react';

function App() {
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const selectedPlace = useRef();
  const modal = useRef();

  function handleStartDeletePlace(id) { 
    modal.current.openModal();
    selectedPlace.current = id;
  }
  
  function handleStopDeletePlace(id) {
    modal.current.closeModal();
  }

  function handleDeletePlace() {
    setPickedPlaces(prevPlaces => {
      return prevPlaces.filter(place => place.id !== selectedPlace.current);
    });
    modal.current.closeModal();
  }

  function handleAddPlace(id) {
    setPickedPlaces(prevPlaces => {
      if (prevPlaces.find(place => place.id === id)) {
        return prevPlaces;
      }
      const place = AVAILABLE_PLACES.find(place => place.id === id);
      return [...prevPlaces, place];
    })
  }

  return (
    <>
      <Modal ref={modal} >
        <ConfirmDelete
          submitAction={handleDeletePlace}
          cancleAction={handleStopDeletePlace}
        />
      </Modal>
      <Header/>
      <main>
        <Places
          availablePlaces={pickedPlaces}
          handleClick={handleStartDeletePlace}
          title="I would like to visit ..."
          subtitle="Click on the places you would like to visit."
        />
        <Places
          availablePlaces={AVAILABLE_PLACES}
          handleClick={handleAddPlace}
          title="Available Places"
        />
      </main>
    </>
  );
}

export default App;
