import { useEffect, useState } from 'react';

export default function getLocalVars() {
    let phoneNumber;
    let personality;
    let tone;
    let topic;

    // useEffect(() => {
    
    phoneNumber = sessionStorage.getItem("phone") //? JSON.parse(localStorage.getItem("phone")) : null;
    personality = sessionStorage.getItem("personality") //? JSON.parse(localStorage.getItem("personality")) : null;
    tone = sessionStorage.getItem("tone") //? JSON.parse(localStorage.getItem("tone")) : null;
    topic = sessionStorage.getItem("topic")
  
      

    // }, [])
    return {phoneNumber, personality, tone, topic}

}