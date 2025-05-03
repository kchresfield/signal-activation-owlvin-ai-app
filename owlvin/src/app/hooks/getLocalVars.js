import { useEffect, useState } from 'react';

export default function getLocalVars() {
    let phoneNumber;
    let personality;
    let tone;
    let topic;

    // useEffect(() => {
    
    phoneNumber = localStorage.getItem("phone") //? JSON.parse(localStorage.getItem("phone")) : null;
    personality = localStorage.getItem("personality") //? JSON.parse(localStorage.getItem("personality")) : null;
    tone = localStorage.getItem("tone") //? JSON.parse(localStorage.getItem("tone")) : null;
    topic = localStorage.getItem("topic")
  
      

    // }, [])
    return {phoneNumber, personality, tone, topic}

}