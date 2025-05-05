'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Carousel from '../components/Carousel';
import Carousel2 from '../components/Carousel2';
import Carousel3 from '../components/Carousel3';

// Traits
// Carousel1
const personalityTraits = [
  { name: "Optimistic", icon: '/icons/optimistic.png' },
  { name: "Sarcastic", icon: '/icons/sarcastic.png' },
  { name: "Logical", icon: '/icons/logical.png' },
  { name: "Melancholic", icon: '/icons/melancholic.png' },
];

// Carousel2
const toneTraits = [
  { name: "Technical", icon: '/icons/technical.png' },
  { name: "Casual", icon: '/icons/casual.png' },
  { name: "Ironic", icon: '/icons/ironic.png' },
  { name: "Formal", icon: '/icons/formal.png' },
];

const topics = [
  "Existential Philosophy & Meaning of Life",
  "Artificial Intelligence & The Ethics of AI",
  "Tourism and things to do in San Francisco",
  "Science Fiction, Movies & Pop Culture"
];


export default function GamePage() {
  const [step, setStep] = useState(1); // 1 = first carousel, 2 = second
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [topicIndex, setTopicIndex] = useState(0);
  const router = useRouter();


  const handleSelect = () => {
    if (step === 1) {
      const selected = personalityTraits[index1].name;
      console.log('Selected Personality:', selected);
      sessionStorage.setItem('personality', selected);
      console.log(sessionStorage.getItem('personality'))
      setStep(2); // move to second carousel
    } else if(step === 2){
      const selected = toneTraits[index2].name;
      console.log('Selected Tone of Voice:', selected);
      sessionStorage.setItem('tone', selected);
      setStep(3);
    } else if(step === 3){
      const selected = topics[topicIndex];
      console.log('Selected Topic:', selected);
      sessionStorage.setItem('topic', selected);
      router.push('/completed');
    }
  };
  const handleBack = () => {
    if (step > 1) {
      setStep(step-1); // move to second carousel
    } else {
      // Finalize selection or move on
      console.log('Second carousel selected');
    }
  };
  return (
    <div className="relative min-h-screen bg-blue-500 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
        {step === 1 && 'Choose Your Personality' }
        {step === 2 && 'Choose Your Tone' }
        {step === 3 && 'Choose Your Topic' }
        </h1>

        {step === 1 && (<Carousel traits={personalityTraits} index={index1} setIndex={setIndex1}/>)}
        {step === 2 && (<Carousel2 traits={toneTraits} index={index2} setIndex={setIndex2}/>)}
        {step === 3 && (<Carousel3 topics={topics} index={topicIndex} setIndex={setTopicIndex}/>)}
      </div>

      {/* Bottom Left Buttons */}
      <div className="absolute bottom-6 left-6 flex flex-col items-start gap-2 text-black">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-green-400"></div>
          <span className="text-white text-sm">Select</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-red-500"></div>
          <span className="text-white text-sm">Back</span>
        </div>
        <br></br>
        <br></br>
          <div >
            <button onClick={handleSelect} className="absolute bottom-20 left-6 bg-red-600 text-white px-6 py-2 rounded-full">
              Select
            </button>
          </div>
          <br></br>
          <div className="w-6 h-6 rounded-full bg-blue-500">
          <button onClick={handleBack} className="absolute bottom-6 left-6 bg-blue-600 text-white px-6 py-2 rounded-full">
              Back
            </button>
          </div>
      </div>
    </div>
  );
}