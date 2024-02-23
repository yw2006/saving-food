import React from 'react';
import './styles/FoodRecycling.css';


export default function FoodRecycling() {
  return (<>
    <div>
    
  <header className="fr-header">
    <h1>Food Recycling: Turning Waste Into Resource</h1>
  </header>
  <main>
    <section className="fr-section fr-importance">
      <h2 className="fr-heading">The Importance of Food Recycling</h2>
      <p className="fr-paragraph">
        Every year, millions of tons of food are wasted globally...
      </p>
    </section>
    <section className="fr-section fr-methods">
      <h2 className="fr-heading">Methods of Food Recycling</h2>
      <h3 className="fr-subheading">Composting</h3>
      <p className="fr-paragraph">
        Composting is a natural process that turns organic waste...
      </p>
      {/* Additional methods */}
    </section>
    <section className="fr-section fr-getting-involved">
      <h2 className="fr-heading">Getting Involved</h2>
      <p className="fr-paragraph">
        Individuals and communities play a crucial role...
      </p>
    </section>
  </main>
    </div>
    </>
  );
}

