import { useEffect, useState } from 'react';

export default function getLocalVars() {
    if (typeof window === 'undefined') return null;
    
    let phoneNumber;
    let personality;
    let tone;
    let topic;
    
    phoneNumber = sessionStorage.getItem("phone");
    personality = sessionStorage.getItem("personality");
    tone = sessionStorage.getItem("tone");
    topic = sessionStorage.getItem("topic");
  
    return {phoneNumber, personality, tone, topic}
}