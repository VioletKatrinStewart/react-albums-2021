import React from 'react';

export default function AlbumInfo({ album }) {
  return (
    <div className="album-div">
      <h3>Album: {album.album}</h3>
      <h3>Artist: {album.artist}</h3>
      <img src={album.image} />
      <h3>Favorite song: {album.song}</h3>
    </div>
  );
}
