import React from 'react';

const ServiceSection = () => {
  return (
    <section className="bg-slate-950 text-white md:py-12 py-11 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Easy Access for Bookings</h2>
        <p className="text-lg mb-4">Share your Calendly link right from your browser, so you can schedule meetings<br />without the back-and-forth</p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-3xl mr-4">Start Trial</button>
          <button className="bg-slate--950 border border-inherit  text-white px-6 py-3 rounded-3xl">Talk with Sales</button>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
