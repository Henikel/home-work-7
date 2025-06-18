function MP3Player(brand, model, playlist) {
  this.brand = brand;
  this.model = model;
  this.playlist = playlist;
  this.currentTrack = 0;

  this.play = function() {
    if (this.playlist.length > 0) {
      console.log(`Відтворюється: ${this.playlist[this.currentTrack]}`);
    } else {
      console.log("Плейлист порожній");
    }
  };

  this.next = function() {
    if (this.currentTrack < this.playlist.length - 1) {
      this.currentTrack++;
      this.play();
    } else {
      console.log("Досягнуто кінця плейлиста");
    }
  };
}

const player1 = new MP3Player("Sony", "X123", ["Song A", "Song B", "Song C"]);
const player2 = new MP3Player("Samsung", "M500", ["Track 1", "Track 2"]);

player1.play();
player1.next();

player2.play();
player2.next();
