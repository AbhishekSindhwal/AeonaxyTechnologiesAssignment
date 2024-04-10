
import React from 'react';
import faqItems from '../dummyData/faqItems'
const FAQSection = () => {
  return (
    <section className="bg-blue-100 py-12 text-center">
      <div className="md:max-w-3xl max-w-max mx-auto">
        <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <p className="text-gray-600 ">Not seeing what you are looking for?</p>
        <p className="text-gray-600 mb-8">Go to our <a href="/help-center" className="text-blue-500">help center</a></p>
        <div className="sm:grid sm:gap-6 grid gap-2 w-80 ml-10 md:w-full sm:w-90">
          {/* Using map to render each FAQ item */}
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-between shadow-md">
              <p className="text-lg font-semibold mb-2">{item.question}</p>
              <p>+</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
