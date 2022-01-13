import { client, checkError } from './client';

export async function getAlbums() {
  let request = await client.from('albums').select('*');
  return checkError(request);
}

export async function getAlbumsById(id) {
  let request = await client.from('albums').select('*').match({ id }).single();
  return checkError(request);
}
