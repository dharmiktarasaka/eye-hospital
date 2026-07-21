import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917600583156?text=Hello%20Lumora%20Eye%20Institute%20Team%2C%20I%20would%20like%20to%20enquire%20about%20an%20eye%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Lumora Eye Institute via WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 flex items-center justify-center transform hover:scale-110 transition-all duration-300 p-3"
    >
      <MessageSquare className="w-6 h-6 fill-white" />
    </a>
  );
};

export default WhatsAppButton;
