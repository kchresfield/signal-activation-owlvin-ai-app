'use client';
import { useRouter } from 'next/navigation';
import useIsMobile from '../hooks/platform-detection';
import Image from 'next/image';

import getLocalVars from '../hooks/getLocalVars';
// import createAssistant from '../api/create-assistant'

export default function CallPage() {
  const isMobile = useIsMobile();
  const router = useRouter();


  const startOver = async () => {
    try{
      // delete local vars
      sessionStorage.removeItem("phone");
      sessionStorage.removeItem("personality");
      sessionStorage.removeItem("tone");
      sessionStorage.removeItem("topic");
      router.push('/')
    } catch (err) {
      console.error('Error creating assistant:', err);
    }
  };


  const handleBack = () => {
    // go back to game page
    router.push('/game');
  };


  return (
    <div className="min-h-screen bg-blue-500 text-white flex flex-col">
      {/* Top title */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold">Call your bot!</h1>
      </div>

      {/* Center content: images and topic */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-10">
        {isMobile && (
        <a href="tel:+19176510742">
        <button>Call</button>
        </a>
      )}

{!isMobile && (
        <Image src='/icons/qr-code-twilio-number-0742.png' alt="qr code" width={200} height={200}/>
      )}
          
          
        
      </div>

      {/* Bottom left buttons */}
      <div className="text-center flex flex-col gap-3 w-[30%]">
        <button
          onClick={startOver}
          className="bg-red-600 text-white px-6 py-2 rounded-full"
        >
          Start Over
        </button>
      </div>
    </div>
    </div>
  )
}
