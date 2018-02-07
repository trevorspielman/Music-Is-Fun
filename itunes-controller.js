function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }
  //create a drawSongs function
  //accept a parameter of songs called (songList)
  //song list is an array of objects, each object is a song.

  //private
  //pulling and storing the search results of the searcher

  function drawSongs(songList) {
    var template = ``
    for (let i = 0; i < songList.length; i++) {
      const song = songList[i]
      template += `<div class="m-1 p-1">
      <img class="card-img-top" src="${song.albumArt}">
      <div class="card-body">
      <h4 class="card-title">${song.title}</h4>
      <h5 class="card-title">${song.artist}</h5>
      <p class="card-text">${song.collection}</p>
      <p class="card-text"><strong>${song.price}</strong></p>
      <audio controls>
        <source src="${song.preview}"> type="audio/mpeg</a>
        </audio>
        </div>
      </div>`
    }
    document.getElementById('song-list').innerHTML = template
    console.log(songList)
  }




  //public
  this.getMusicByArtist = function getMusicByArtist(artist) {
    itunesService.getMusicByArtist(artist)
  }

}
