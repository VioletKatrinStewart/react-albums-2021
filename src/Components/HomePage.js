import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="homediv">
      <h3>Best of 2021</h3>
      <p>
        Here are my picks for the top albums and EPs released in 2021. This list is in alphabetical
        order and not ranked. Enjoy!
      </p>
      <Link to="/albums">Start</Link>
    </div>
  );
}
