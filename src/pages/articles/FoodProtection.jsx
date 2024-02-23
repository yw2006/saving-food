import React from 'react';
import './styles/FoodProtection.css';
export default function FoodProtection() {
    return <>
 
  <header className="fp-header">
    <h1>Food Protection: Ensuring Safety From Farm to Fork</h1>
  </header>
  <main>
    <section className="fp-section fp-importance">
      <h2 className="fp-heading">The Importance of Food Protection</h2>
      <p className="fp-paragraph">
        Food protection encompasses all measures taken to keep our food supply
        safe and free from contamination...
      </p>
    </section>
    <section className="fp-section fp-methods">
      <h2 className="fp-heading">Key Methods of Food Protection</h2>
      <p className="fp-paragraph">
        To ensure the safety of food, various strategies are employed at
        different stages of the food supply chain...
      </p>
      {/* Include specifics about methods like refrigeration, pasteurization, etc. */}
    </section>
    <section className="fp-section fp-tips">
      <h2 className="fp-heading">Practical Tips for Food Protection at Home</h2>
      <p className="fp-paragraph">
        Consumers play a crucial role in maintaining food safety. Here are some
        practical tips for protecting food at home...
      </p>
      {/* List tips like proper storage, cooking temperatures, avoiding cross-contamination, etc. */}
    </section>
  </main>


    </>
}