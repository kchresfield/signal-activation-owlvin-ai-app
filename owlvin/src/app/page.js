'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [showBlankError, setShowBlankError] = useState(false);
  const [showIntnatError, setShowIntnatError] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (phone.length === 10) {
      localStorage.setItem('phone', phone);
      router.push('/game');
    } else if(!phone){
      // 
      setShowBlankError(true);
      setShowIntnatError(false);
    } else {
      // International phone number
      setShowIntnatError(true);
      setShowBlankError(false);
    }
  };

  const handleTyping = (e) => {
    const value = e.target.value;
    setPhone(value);
    if ((showBlankError || showIntnatError) && e.target.value.trim() !== '') {
      setShowBlankError(false); // Clear error once user starts typing
      setShowIntnatError(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="text-center">
        <h1 className="text-white text-lg mb-6">Enter your phone number to continue</h1>
        
        <input
          type="tel"
          placeholder="(xxx)-xxx-xxxx"
          value={phone}
          onChange={handleTyping}
          className="w-64 p-3 text-center text-black bg-gray-200 rounded-lg mb-6 outline-none"
        />
        
        <button
          onClick={handleLogin}
          className="bg-green-500 hover:bg-green-600 text-black font-medium py-2 px-8 rounded-lg"
        >
          Begin
        </button>
        {showBlankError && (
        <p style={{ color: 'red', fontSize: '0.875rem' }}>
          Please fill out this field before submitting.
        </p>
      )}

{showIntnatError && (
        <p style={{ color: 'red', fontSize: '0.875rem' }}>
          Please use a US phone number.
        </p>
      )}
      </div>
      
      
        <h3 className="text-center">
          By providing your phone number, you're showing intent to allow us to use your phone number. ~Legal babble~ Check out twilio.com/privacy.
        </h3>
    </div>
  );
}
