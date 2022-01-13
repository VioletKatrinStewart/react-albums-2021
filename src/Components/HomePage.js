import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <p>THIS IS DUMMY TEXT FOR WHAT I WILL PUT ON MY HOME PAGE</p>
      <Link to="/albums">LINK TO ALBUM LIST</Link>
    </div>
  );
}
