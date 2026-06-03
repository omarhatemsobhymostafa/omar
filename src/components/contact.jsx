import React from "react";

export default function Contact() {
  return (
    <section className="bg-gray-900 text-white py-20 px-4"  id="contact">
      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>

        <p className="text-gray-400 mb-10">
          You have any questions, or you want to work with me? Don't hesitate to contact me.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-5">

          <a
            href="tel:01224653326"
            className="w-full sm:w-80 text-center py-3 px-6 rounded-xl border border-gray-600 
                       hover:bg-white hover:text-black transition-all duration-300"
          >
            01224653326
          </a>

          <a
            href="mailto:omar.hatem.okasha1@email.com"
            className="w-full sm:w-80 text-center py-3 px-6 rounded-xl border border-gray-600 
                       hover:bg-white hover:text-black transition-all duration-300"
          >
            omar.hatem.okasha1@email.com
          </a>

        </div>
      </div>
    </section>
  );
}