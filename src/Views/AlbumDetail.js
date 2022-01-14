import React, { useState, useEffect } from 'react';
import AlbumInfo from '../Components/AlbumInfo';
import { getAlbumsById } from '../services/data';
import './AlbumDetail.css';
export default function AlbumDetail() {
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(true);
  const [albumId, setAlbumId] = useState(1);

  useEffect(() => {
    const loadDetail = async () => {
      const detail = await getAlbumsById(albumId);
      setAlbum(detail);
      setLoading(false);
    };
    loadDetail();
  }, [albumId]);
  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <AlbumInfo album={album} />
      <div className="buttondiv">
        <button onClick={() => setAlbumId(albumId - 1)} disabled={albumId <= 1}>
          Prev
        </button>
        <button onClick={() => setAlbumId(albumId + 1)} disabled={albumId >= 27}>
          Next
        </button>
      </div>
    </div>
  );
}
