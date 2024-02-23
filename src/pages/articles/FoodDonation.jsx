import React from 'react';
import './styles/FoodDonation.css';

export default function FoodDonation() {
  return <>
    <div>

  <header className="fd-header">
    <h1>Food Donation: A Step Towards Ending Hunger</h1>
  </header>
  <main>
    <section className="fd-section fd-introduction">
      <h2 className="fd-heading">Why Donate Food?</h2>
      <p className="fd-paragraph">
        Food donation is a crucial step in combating hunger and reducing food
        waste worldwide. By donating food, we can provide immediate relief to
        those in need and support our communities in sustainable ways.
      </p>
      <img
        src="your-image-link-1.jpg"
        alt="Donating Food"
        className="fd-image"
      />
    </section>
    <section className="fd-section fd-how-to-donate">
      <h2 className="fd-heading">How to Donate Food</h2>
      <p className="fd-paragraph">
        Donating food is easier than you might think. Here are some ways you can
        contribute:
      </p>
      <ul className="fd-list">
        <li className="fd-list-item">Local food banks and shelters</li>
        <li className="fd-list-item">Food rescue programs</li>
        <li className="fd-list-item">Community fridges</li>
      </ul>
      <img
        src="your-image-link-2.jpg"
        alt="Community Food Sharing"
        className="fd-image"
      />
    </section>
    <section className="fd-section fd-impact">
      <h2 className="fd-heading">The Impact of Your Donation</h2>
      <p className="fd-paragraph">
        Every food donation, no matter the size, makes a difference. It not only
        helps feed those in need but also contributes to environmental
        sustainability by reducing waste.
      </p>
      <img
        src="your-image-link-3.jpg"
        alt="Happy Recipients"
        className="fd-image"
      />
    </section>
  </main>
      </div>
      </> ;
}


