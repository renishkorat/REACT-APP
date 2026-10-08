import { useEffect, useReducer, useState } from 'react'

import Header from './components/Header'
import DestinationExplorer from './components/DestinationExplorer'
import MyTrip from './components/MyTrip'
import TravelPreferences from './components/TravelPreferences'

import destinations from "./data/destinations";
import './App.css'


//  REDUCER
function tripreducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (state.some(
        (item) =>
          item.id === action.payload.id
      )
      ) {
        return state;
      }
      return [
        ...state,
        action.payload
      ];

    case "REMOVE":
      return state.filter(
        (item) =>
          item.id !== action.payload
      );

    case "CLEAR":
      return [];

    default:
      return state;
  }
}


// LOAD TRIP
function getSavedTrip() {

  const savedTrip =
    localStorage.getItem("travelTrip");

  return savedTrip
    ? JSON.parse(savedTrip)
    : []  
}


function App() {
  const [
    trip,
    dispatch
  ] = useReducer(
    tripreducer,
    [],
    getSavedTrip
  );

  // PREFERENCES 

  const [
    preferences,
    setPreferences
  ] = useState(() => {

    const saved =
      localStorage.getItem("travelPreferences");

    return saved
      ? JSON.parse(saved)
      : {
        name: "",
        travelType: "Solo",
        budget: "Budget",
        preferredDestination: ""
      };
  });

  //  SAVE TRIP

  useEffect(() => {
    localStorage.setItem("travelTrip", JSON.stringify(trip));
  }, [trip])

  // SAVE PREFERENCES

  useEffect(() => {
    localStorage.setItem("travelPreferences", JSON.stringify(preferences));
  }, [preferences])


  function addDestination(destination) {
    dispatch({
      type: "ADD",
      payload: destination
    });
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#eff6ff,#f8fafc,#eef2ff)] text-slate-800">

      <Header />


      <main>
        <div className="  w-[90%] mx-auto -mt-[75px]
                relative
                z-10
                pb-10">
        <DestinationExplorer
          destinations={destinations}
          onAdd={addDestination}
        />
        </div>

        <MyTrip
          trip={trip}
          dispatch={dispatch}
        />

        <TravelPreferences
                    destinations={destinations}
                    preferences={preferences}
                    setPreferences={setPreferences}
                />

      </main>

        <footer className='                
        text-center
                px-5
                py-10
                text-slate-300
                bg-[linear-gradient(135deg,#0f172a,#1e293b,#312e81)]
'>

                <h3 className='font-serif
                    text-[23px]
                    text-white
                    font-semibold
                    mb-2'>
                    ✈️ Travel Planner
                </h3>

                <p className=' text-sm
                    text-slate-400
                    mb-2'>
                    Plan • Explore • Travel
                </p>

                <small className='text-[11px]
                    text-slate-500'>
                    © 2026 Travel Planner
                </small>

            </footer>
    </div>
  );
}

export default App;
