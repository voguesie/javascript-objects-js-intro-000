var playlist = {"Bon Iver": "Stacks"}
// Function "updatePlaylist" accepts 3 parameters: the playlist (an object), an artist, and a song title.

function updatePlaylist = (obj, artist, song) {
  Object.assign(obj, artist, song);
  return obj;
}
