var youtube = require('../handlers/youtube')

var handler = new youtube();

//single file
handler.start("https://www.youtube.com/watch?v=x");

//playlist
handler.start("https://www.youtube.com/playlist?list=XXXXX");