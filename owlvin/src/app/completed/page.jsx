'use client';
import { useState, useContext, useFormState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import getLocalVars from '../hooks/getLocalVars';
// import createAssistant from '../api/create-assistant'

export default function CompletedPage() {
  const [localVars, setLocalVars] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const vars = getLocalVars();
    setLocalVars(vars);
  }, []);

  function createImgSrcStr(name) {
    let value = localVars[name]
    return `/icons/${value}.png`
  }

  const handleSave = async () => {
    // grab traits
    // send values to server to create ai assistant. Recieve Assistant ID and ThreadID in response
    // console.log("these are the current local vars: ", JSON.stringify(localVars))
    try {
      const res = await fetch('/api/create-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(localVars),
      });

      const data = await res.json();
      console.log('Assistant created:', data);
      router.push('/call')
    } catch (err) {
      console.error('Error creating assistant:', err);
    }
  };
  const handleBack = () => {
    // go back to game page
    router.push('/game');
  };

  if (!localVars) return <div className="p-8 text-white">Loading...</div>;
  return (
    <div className="min-h-screen bg-blue-500 text-white flex flex-col">
      {/* Top title */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold">Your Choices</h1>
      </div>

      {/* Center content: images and topic */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-10">
          <div>
          <Image
            src={createImgSrcStr("personality")}
            alt="personality"
            width={200}
            height={200}
          />
          <h3 className="text-center">{localVars.personality}</h3>
          </div>
          <div>
          <Image
            src={createImgSrcStr("tone")}
            alt="tone"
            width={200}
            height={200}
          />
          <h3 className="text-center">{localVars.tone}</h3>
          </div>
        </div>
        <div className="bg-yellow-300 text-black px-4 py-2 rounded-md font-semibold text-lg max-w-[90%] text-center shadow-lg">
          {localVars.topic}
        </div>
      </div>

      {/* Bottom left buttons */}
      <div className="text-center flex flex-col gap-3 w-[30%]">
        <button
          onClick={handleSave}
          className="bg-red-600 text-white px-6 py-2 rounded-full"
        >
          Save
        </button>
        <button
          onClick={handleBack}
          className="bg-blue-600 text-white px-6 py-2 rounded-full"
        >
          Back
        </button>
      </div>
    </div>
  )
}
