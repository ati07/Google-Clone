import React, { createContext,useContext,useReducer } from "react";

//Preparing the data layer
export const StateContext = createContext()

export const StateProvider = ({reducer, initialState,children})=>{
   return <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}

//Hook which is use to pull the information form dat layer
export const useStateValue=() => useContext(StateContext)
