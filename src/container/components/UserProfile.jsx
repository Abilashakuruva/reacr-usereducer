import React, { useState, useReducer } from 'react'

const actionTypes = {
    SET_NAME: 'SET_NAME',
    SET_AGE: 'SET_AGE',
    SET_EMAIL: 'SET_EMAIL',
    SET_ADDRESS: 'SET_ADDRESS',
    SET_PHONE: 'SET_PHONE',
    SET_CITY: 'SET_CITY'
};


const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_NAME:
            return { ...state, name: action.payload };
        case actionTypes.SET_AGE:
            return { ...state, age: action.payload };
        case actionTypes.SET_EMAIL:
            return { ...state, email: action.payload };
        case actionTypes.SET_ADDRESS:
            return { ...state, address: action.payload };
        case actionTypes.SET_PHONE:
            return { ...state, phone: action.payload };
        case actionTypes.SET_CITY:
            return { ...state, city: action.payload };
        default:
            return state;
    }
};

const initialState={
    name:'',
    email:'',
    address:'',
    phone:'',
    city:''
};
function UserProfile(){
    const[state,dispatch]=useReducer(reducer,initialState);
    const[userDetails,setUserDetails]=useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUserDetails(state);
    };



return (
    <>
    <form onSubmit={handleSubmit}>
    <div>
        <label>Name:</label>
        <input type='text' value={state.name} onChange={(e)=>dispatch({type:actionTypes.SET_NAME,payload:e.target.value})}/>
        </div>
        <div>
        <label>Email:</label>
        <input type='text' value={state.email} onChange={(e)=>dispatch({type:actionTypes.SET_EMAIL,payload:e.target.value})}/>
        </div>
        <div>
        <label>Address:</label>
        <input type='text' value={state.address} onChange={(e)=>dispatch({type:actionTypes.SET_ADDRESS,payload:e.target.value})}/>
        </div>
        <div>
        <label>Phone:</label>
        <input type='text' value={state.phone} onChange={(e)=>dispatch({type:actionTypes.SET_PHONE,payload:e.target.value})}/>
        </div>
        <div>
        <label>City:</label>
        <input type='text' value={state.city} onChange={(e)=>dispatch({type:actionTypes.SET_CITY,payload:e.target.value})}/>
        </div>
        <button type='submit'>Submit</button>
        </form>
        <div className='userDetails'>
            <h2>User Details</h2>
            {userDetails &&(
        <ul>
            <li>Name:{userDetails.name}</li>
            <li>Age:{userDetails.age}</li>
            <li>Email:{userDetails.email}</li>
            <li>Address{userDetails.address}</li>
            <li>Phone:{userDetails.phone}</li>
            <li>City:{userDetails.city}</li>

        </ul>
        )}

    </div>
    
    </>
)
}

export default UserProfile;
