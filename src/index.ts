/*
 * objects
 */
// Q1.1) Define an object book with properties title (string), author (string), pages (number), and isAvailable (boolean).
type Book = {
  title: string;
  author: string;
  pages: number;
  isAvailable: boolean;
};

const book: Book = {
  title: "Book 1",
  author: "Author 1",
  pages: 200,
  isAvailable: true
};

console.log(book);

// Q1.2) Create an object movie with properties title (string), director (string), releaseYear (number), and genre (string[]).
type Movie = {
  title: string;
  director: string;
  releaseYear: number;
  genre: string[];
};
const movie: Movie = {
  title: "Jai Bheem",
  director: "Suriya",
  releaseYear: 2021,
  genre: ["genre1", "genre2"]
};

console.log(movie);

/*
 * intersections
 */
// Q2.1)Define a type Animal which has properties species (string) and legs (number). Then, define a type Pet which extends Animal and adds a property owner (string).
type Animal = {
  species: string;
  legs: number;
};

type Pet = Animal & {
  owner: string;
};

const dog: Pet = {
  species: "species 1",
  legs: 3,
  owner: "owner 1"
};
console.log(dog);

// Q2.2) You are building a game that involves different types of characters. Define a type Character with properties name (string) and health (number). Then, define types Player and Enemy which both extend Character, adding properties level (number) and damage (number).
type Character = {
  name: string;
  health: number;
};

type Player = Character & {
  level: number;
};

type Enemy = Character & {
  damage: number;
};

const player: Player = {
  name: "player 1",
  health: 200,
  level: 100
};

const enemy: Enemy = {
  name: "enemy 1",
  health: 500,
  damage: 600
};

console.log({ player }, { enemy });

/*
 * some more objects and arrays
 */
type UserProfile = {
  username: string;
  age: number;
  friends: string[];
  address: {
    street: string;
    city: string;
  };
  isPremium: boolean;
  ratings: number[];
  latestActivity: string[];
};
const userProfile: UserProfile = {
  username: "ananb",
  age: 25,
  friends: ["f1", "f2"],
  address: {
    street: "street 1",
    city: "city 1"
  },
  isPremium: false,
  ratings: [1, 2, 3],
  latestActivity: ["act1", "act2"]
};

console.log(userProfile);

// Q3.2) Define an array inventory with elements of type Product. Each Product should have properties name (string), price (number), and quantity (number).
type Product = {
  name: string;
  price: number;
  quantity: number;
};
const inventory: Product[] = [
  {
    name: "p1",
    price: 250,
    quantity: 5
  },
  {
    name: "p2",
    price: 20,
    quantity: 2
  }
];

console.log({ inventory });

/*
 * unions
 */
// Q4.1) Define a type Vehicle which can represent either a Car or a Bicycle. Car has properties kind ("car"), make (string), and model (string). Bicycle has properties kind ("bicycle") and brand (string).
type Car = {
  kind: "car";
  make: string;
  model: string;
};

type Bicycle = {
  kind: "bicycle";
  brand: string;
};

type Vehicle = Car | Bicycle;

const hercules: Vehicle = {
  kind: "bicycle",
  brand: "hercules"
};

console.log(hercules);

// Q4.2) Create a type Transaction which can represent either a Purchase or a Refund. Purchase has properties kind ("purchase"), amount (number), and item (string). Refund has properties kind ("refund"), amount (number), and reason (string).
type Purchase = {
  kind: "purchase";
  amount: number;
  item: string;
};

type Refund = {
  kind: "refund";
  amount: number;
  reason: string;
};

type Transaction = Purchase | Refund;

const refund: Transaction = {
  kind: "refund",
  amount: 1000,
  reason: "returned purchased item"
};

console.log(refund)
// Q4.3) Define a type Media which can represent either an Image or a Video. Image has properties kind ("image"), url (string), and caption (string). Video has properties kind ("video"), url (string), and duration (number).
type Image = {
  kind: "image";
  url: string;
  caption: string;
};

type Video = {
  kind: "video";
  url: string;
  duration: number;
};

type Media = Image | Video;

const media: Media = {
  kind: "video",
  url: 'https://test.com',
  duration: 5
}

console.log(media)
/*
 * more types
 */
// Q5.1) Create a type DynamicArray which represents an array that can store elements of any type. Define a function toArrayString that takes a DynamicArray and returns a string representation of the array's contents. (use JSON.stringify)
type DynamicArray = any[];
const dynamicArray: DynamicArray = [1, "hello", true, { key: "value" }];

interface ToArrayString {
  (dynamicArray: DynamicArray): string;
}
const toArrayString: ToArrayString = (dynamicArray) => {
  return JSON.stringify(dynamicArray);
};

const arrayString = toArrayString(dynamicArray);
console.log(arrayString);
// Output: "[1,\"hello\",true,{\"key\":\"value\"}]"

// Q5.2) Define a variable mixedData as an array that can store elements of various data types such as numbers, strings, booleans, objects, arrays, and functions. Example:

const mixedData: any[] = [
  42,
  "hello",
  true,
  { name: "Alice", age: 30 },
  [1, 2, 3],
  () => "function called"
];

console.log(mixedData);
