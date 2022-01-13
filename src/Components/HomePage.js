import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function HomePage() {
  const { id } = useParams();
  return (
    <div>
      <p>THIS IS DUMMY TEXT FOR WHAT I WILL PUT ON MY HOME PAGE</p>
      <Link to={`/albums/${id}`}>LINK TO ALBUM LIST</Link>
    </div>
  );
}
