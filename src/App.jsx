import Header from './components/Header';
import Places from './components/Places';
import Modal from './components/Modal';
import { AVAILABLE_PLACES } from './data.js';

import { useState, useRef } from 'react';

function App() {
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const modal = useRef();

  function startDeletePlace(id) { 
    modal.current.showModal();
    modal.current.addEventListener('close', (event) => {
      if (event.target.returnValue === 'confirm') {
        handleDeletePlace(id);
      }
    });
  }
  
  function handleDeletePlace(id) {
    return setPickedPlaces(prevPlaces => {
      return prevPlaces.filter(place => place.id !== id);
    });
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
      <Modal ref={modal} ></Modal>
      <Header/>
      <main>
        <Places
          availablePlaces={pickedPlaces}
          handleClick={startDeletePlace}
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
