import React, { useState, useEffect } from 'react';
import AlbumInfo from '../Components/AlbumInfo';
import { getAlbums } from '../services/data';
import { useParams } from 'react-router';
//import { Link } from 'react-router-dom';

export default function AlbumDetail() {
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadAlbums = async () => {
      const detail = await getAlbums(id);
      setAlbum(detail);
      setLoading(false);
    };
    loadAlbums();
  }, [id]);
  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <AlbumInfo album={album} />
    </div>
  );
}
