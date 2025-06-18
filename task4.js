function MP3Player(brand, model, storageGB) {
  this.brand = brand;
  this.model = model;
  this.storageGB = storageGB;

  this.play = function(song) {
    console.log(`Відтворюється пісня: ${song}`);
  };

  this.pause = function() {
    console.log("Відтворення поставлено на паузу");
  };
}

const player1 = new MP3Player("Sony", "NW-A55", 16);
const player2 = new MP3Player("Apple", "iPod Nano", 8);
const player3 = new MP3Player("SanDisk", "Clip Sport", 4);

player1.play("Imagine Dragons - Believer");
player2.pause();
player3.play("Coldplay - Yellow");
