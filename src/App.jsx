import { useState, useRef, useEffect, useCallback } from 'react';

import Header from './components/Header';
import Places from './components/Places';
import Modal from './components/Modal';
import ConfirmDelete from './components/ConfirmDelete.jsx';
import { AVAILABLE_PLACES } from './data.js';
import { sortPlacesByDistance } from './loc.js';

const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map(id => 
  AVAILABLE_PLACES.find(place => place.id === id)
);

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const selectedPlace = useRef();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES, 
        position.coords.latitude, 
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartDeletePlace(id) { 
    setModalOpen(true);
    selectedPlace.current = id;
  }
  
  function handleStopDeletePlace(id) {
    setModalOpen(false);
  }

  const handleDeletePlace = useCallback(
    function handleDeletePlace() {
      setPickedPlaces(prevPlaces => {
        return prevPlaces.filter(place => place.id !== selectedPlace.current);
      });
      setModalOpen(false);
  
      const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
      localStorage.setItem(
        'selectedPlaces', 
        JSON.stringify(storedIds.filter(id => id !== selectedPlace.current))
      );
    }, []);

  function handleAddPlace(id) {
    setPickedPlaces(prevPlaces => {
      if (prevPlaces.find(place => place.id === id)) {
        return prevPlaces;
      }
      const place = AVAILABLE_PLACES.find(place => place.id === id);
      return [...prevPlaces, place];
    })
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if(storedIds.indexOf(id) === -1) {
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
    }
  }

  return (
    <>
      <Modal open={modalOpen} onClose={handleStopDeletePlace}>
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
          availablePlaces={availablePlaces}
          handleClick={handleAddPlace}
          title="Available Places"
          subtitle="Sorting places by distance..."
        />
      </main>
    </>
  );
}

export default App;
