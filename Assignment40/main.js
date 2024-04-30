function make_album(artist_name, Title, track) {
    var album_1 = {
        artist_name: artist_name,
        Title: Title
    };
    if (track !== undefined) {
        album_1.tracks = track;
    }
    return album_1;
}
var album_2 = make_album("Waleed", "Dream11", 23);
var album_3 = make_album("Ali", "Dream11", 11);
var album_4 = make_album("Omais", "Dream11", 25);
console.log(album_2);
console.log(album_3);
console.log(album_4);
