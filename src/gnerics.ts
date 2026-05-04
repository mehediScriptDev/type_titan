const anime: string[] = ["One Piece", "Naruto", "Bleach"];
type animeList = string[];
const animeCollection: animeList = ["One Piece", "Naruto", "Bleach"];

const favAnime :animeList = ["OOne Piece", "Naruto", "Bleach"]

interface animeCollection{
    [index:number]: string| number;
}

const newNime :animeCollection =[5, "One Piece",33333];

const teammate :Array<string> = ["Alice", "Bob", "Charlie"];

// type genericMistake = Array<string> | Array<boolean>;
type genericMistake = Array<string> | Array<boolean>;
// const teamMern:genericMistake = ["Alice", "Bob", "Charlie", true]
const teamCustom:genericMistake = [true, false]

type yourWish<t>=Array<t>;

const yourFavoriteAnime: yourWish<string> = ["One Piece", "Naruto"];
const myFavAnime:yourWish<boolean> = [true, false]

const antigravity : yourWish<{name: string, age: number}> =[{
    name:"Alice",
    age: 30
}]