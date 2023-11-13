import React, { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios'
const StateContext = createContext();


export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [demandeData, setDemandeData] = useState([]);
  const [affectationData, setAffectationData] = useState([]);

  // set user data on connexion;
  const setUser = (data) => {
    setUserData(data)
  };

  // set demande data after connexion
  const setDemande=(data)=>{
    setDemande(data)
  }

  // set affection after connection 
  const setAffectation=(a)=>{
    setAffectationData(data)
  }


  return (
    <StateContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
          userData,
          setUserData,
          setUser,
          affectationData,
          setAffectationData,
          setAffectation,
          demandeData,
          setDemandeData,
          setDemande
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);