/*const newElement = document.createElement('p');

newElement.textContent = "here i am";
const subDiv = document.querySelector('.sub-div1')

subDiv.appendChild(newElement);*/




const jokesArray = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't programmers like nature? It has too many bugs.",
  "How do you organize a space party? You planet!",
  "Why did the math book look sad? Because it had too many problems.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you call fake spaghetti? An impasta!",
  "Why did the bicycle fall over? Because it was two-tired.",
  "What do you call cheese that isn't yours? Nacho cheese!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "Why can't you hear a pterodactyl go to the bathroom? Because the P is silent.",
  "What do you get when you cross a snowman and a vampire? Frostbite.",
  "Why was the math book sad? It had too many problems.",
  "How do you catch a whole school of fish? With bookworms.",
  "Why are ghosts bad at lying? Because they are too transparent.",
  "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't programmers like nature? It has too many bugs.",
    "How do you organize a space party? You planet!",
    "Why did the math book look sad? Because it had too many problems.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired.",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why can't you hear a pterodactyl go to the bathroom? Because the P is silent.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why was the math book sad? It had too many problems.",
    "How do you catch a whole school of fish? With bookworms.",
    "Why are ghosts bad at lying? Because they are too transparent.",
    "What do you call a fish wearing a bowtie? Sofishticated.",
    "Why did the chicken go to the seance? To talk to the other side.",
    "Why don’t crabs give to charity? Because they’re shellfish.",
    "What do you call a factory that makes okay products? A satisfactory.",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Have you heard about the chocolate record player? It sounds pretty sweet.",
    "What did the ocean say to the beach? Nothing, it just waved.",
    "Why do seagulls fly over the ocean? Because if they flew over the bay, they’d be bagels.",
    "Why do cows wear bells? Because their horns don’t work.",
    "What do you call a fake noodle? An impasta.",
    "What do you get from a pampered cow? Spoiled milk.",
    "How does a penguin build its house? Igloos it together.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "How does a taco say grace? Lettuce pray.",
    "What do you call it when a snowman throws a tantrum? A meltdown.",
    "How does a vampire start a letter? Tomb it may concern...",
    "What’s a skeleton’s least favorite room in the house? The living room.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "What did the grape do when he got stepped on? Nothing but let out a little wine!",
    "Why don't oysters donate to charity? Because they are shellfish.",
    "How do you make a tissue dance? Put a little boogie in it.",
    "What’s orange and sounds like a parrot? A carrot.",
    "Why did the math book look sad? Because it had too many problems.",
    "Why are ghosts bad at lying? Because they are too transparent.",
    "What kind of room doesn’t have doors? A mushroom.",
    "What kind of tree fits in your hand? A palm tree.",
    "What do you call two birds in love? Tweethearts.",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "How do you make a lemon drop? Just let it fall.",
    "What has ears but cannot hear? A cornfield.",
    "What do you call a shoe made of a banana? A slipper.",
    "Why did the computer go to the doctor? Because it had a virus.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why did the golfer bring extra pants? In case he got a hole in one.",
    "What lights up a soccer stadium? A soccer match.",
    "Why don’t some fish play piano? Because you can’t tuna fish.",
    "How do you make holy water? You boil the hell out of it.",
    "Why don't skeletons fight each other? They don’t have the guts."
];


const jokeButton = document.querySelector('#joke')

function getJoke(){
  let numberAtRandom = Math.floor(Math.random() * jokesArray.length);
  return jokesArray[numberAtRandom];
}

function displayJoke(){
 
  let jokeElement = document.createElement('p');
  jokeElement.textContent = getJoke()
  const subDiv = document.querySelector('.div1-sub')
  subDiv.innerHTML = ''
  subDiv.appendChild(jokeElement);
}

jokeButton.addEventListener('click',displayJoke)




const riddles = [
  { riddle: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "An echo" },
  { riddle: "You measure my life in hours, and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. What am I?", answer: "A candle" },
  { riddle: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", answer: "A map" },
  { riddle: "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?", answer: "The letter R" },
  { riddle: "You see a boat filled with people, yet there isn’t a single person on board. How is that possible?", answer: "All the people were married" },
  { riddle: "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire word signifies a great woman. What is the word?", answer: "Heroine" },
  { riddle: "I come from a mine and get surrounded by wood always. Everyone uses me. What am I?", answer: "Pencil lead" },
  { riddle: "I have keys but can’t open locks. I have space but no room. You can enter, but you can’t go outside. What am I?", answer: "A keyboard" },
  { riddle: "What can you hold in your left hand but not in your right?", answer: "Your right elbow" },
  { riddle: "What is so fragile that saying its name breaks it?", answer: "Silence" },
  { riddle: "What can fill a room but takes up no space?", answer: "Light" },
  { riddle: "The more you take, the more you leave behind. What am I?", answer: "Footsteps" },
  { riddle: "What has one eye but can’t see?", answer: "A needle" },
  { riddle: "What has a head, a tail, is brown, and has no legs?", answer: "A penny" },
  { riddle: "I’m light as a feather, yet the strongest man can’t hold me for much longer than a minute. What am I?", answer: "Breath" },
  { riddle: "I have branches, but no fruit, trunk, or leaves. What am I?", answer: "A bank" },
  { riddle: "The more of this there is, the less you see. What is it?", answer: "Darkness" },
  { riddle: "I’m found in socks, scarves, and mittens; and often in the paws of playful kittens. What am I?", answer: "Yarn" },
  { riddle: "Where does today come before yesterday?", answer: "The dictionary" },
  { riddle: "What can’t talk but will reply when spoken to?", answer: "An echo" },
  { riddle: "I’m not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I?", answer: "Fire" },
  { riddle: "What is always in front of you but can’t be seen?", answer: "The future" },
  { riddle: "A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?", answer: "He was bald" },
  { riddle: "What goes up but never comes down?", answer: "Your age" },
  { riddle: "What gets wet while drying?", answer: "A towel" },
  { riddle: "What runs all around a backyard, yet never moves?", answer: "A fence" },
  { riddle: "What can travel around the world while staying in a corner?", answer: "A stamp" },
  { riddle: "I shave every day, but my beard stays the same. What am I?", answer: "A barber" },
  { riddle: "You’ll find me in Mercury, Earth, Mars, and Jupiter, but not in Venus or Neptune. What am I?", answer: "The letter R" },
  { riddle: "What has a thumb and four fingers but is not a hand?", answer: "A glove" },
  { riddle: "What has to be broken before you can use it?", answer: "An egg" },
  { riddle: "What has a heart that doesn’t beat?", answer: "An artichoke" },
  { riddle: "What has many keys but can’t open a single lock?", answer: "A piano" },
  { riddle: "What has legs but doesn’t walk?", answer: "A table" },
  { riddle: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "The letter M" },
  { riddle: "What is black when it’s clean and white when it’s dirty?", answer: "A chalkboard" },
  { riddle: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "A candle" },
  { riddle: "What begins with an 'e' and only contains one letter?", answer: "An envelope" },
  { riddle: "What has words, but never speaks?", answer: "A book" },
  { riddle: "What has a neck but no head?", answer: "A bottle" }
];

let isNewRiddle = false;


function getRiddle(){
 return riddles[Math.floor(Math.random() * riddles.length)]
}

const riddleButton = document.querySelector('#riddle');
let riddle = riddles[Math.floor(Math.random() * riddles.length)];

function displayRiddle() {

  // Create a new paragraph element
  let riddleElement = document.createElement('p');
  riddleElement.textContent = riddle.riddle;

  // Select the sub-div1 element
  const subDiv = document.querySelector('.div1-sub');

  // Clear any existing riddles
  subDiv.innerHTML = '';

  // Append the new riddle to the sub-div1 element
  subDiv.appendChild(riddleElement);

  isNewRiddle = true;
}

// Add event listener to the riddle button
riddleButton.addEventListener('click', displayRiddle);

const answerButton = document.querySelector('#answer');

function displayAnswer() {
  if (isNewRiddle===true){
    let riddleElement = document.createElement('p');
    riddleElement.textContent = riddle.answer;


    const subDiv = document.querySelector('.div1-sub');

    subDiv.appendChild(riddleElement);
    riddle = riddles[Math.floor(Math.random() * riddles.length)];
    isNewRiddle = false
  }
 
  
}

answerButton.addEventListener('click', displayAnswer);






//RANDOM QUOTES


const quotes = [
    // Motivational Quotes
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "It always seems impossible until it's done. - Nelson Mandela",

    // Funny Quotes
    "I'm not arguing, I'm just explaining why I'm right. - Unknown",
    "I'm on a whiskey diet. I've lost three days already. - Tommy Cooper",
    "My fake plants died because I did not pretend to water them. - Mitch Hedberg",
    "I used to think I was indecisive, but now I'm not too sure. - Unknown",
    "I told my computer I needed a break, and now it won't stop sending me Kit-Kat ads. - Unknown",
    "I used to play sports. Then I realized you can buy trophies. Now I’m good at everything. - Demetri Martin",
    "I'm writing a book. I've got the page numbers done. - Steven Wright",
    "I'm on a seafood diet. I see food and I eat it. - Unknown",

    // Silly Quotes
    "Why don't scientists trust atoms? Because they make up everything! - Unknown",
    "I'm reading a book on anti-gravity. It's impossible to put down! - Unknown",
    "Why did the scarecrow win an award? Because he was outstanding in his field! - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "How does a penguin build its house? Igloos it together. - Unknown",
    "Why don't skeletons fight each other? They don't have the guts. - Unknown",
    "What do you call fake spaghetti? An impasta. - Unknown",
    "Why don't some couples go to the gym? Because some relationships don't work out. - Unknown",

    // Interesting Quotes
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world. - Albert Einstein",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "The unexamined life is not worth living. - Socrates"
];


const quoteBtn = document.querySelector("#quote");

function getRandomQuote(){

  let myRandomNumber = Math.floor(Math.random()*quotes.length);
  const subDiv = document.querySelector('.div1-sub')
  subDiv.innerHTML = ''

  let quoteToAdd = document.createElement('p')

  quoteToAdd.textContent = quotes[myRandomNumber];
   subDiv.appendChild(quoteToAdd);
  
}


quoteBtn.addEventListener('click',getRandomQuote);





const memesPictureLinks =['https://images.app.goo.gl/9j3pi8ZcAzVwgzuG9',
'https://i.pinimg.com/236x/2e/47/69/2e4769482a57683e2e04c92d7f392d4a.jpg',

'https://i.pinimg.com/236x/98/e3/2f/98e32fa06e133d6f62eaed87fe0212e3.jpg' ,

'https://i.pinimg.com/236x/5c/d9/59/5cd959f3dc2c9daf4b5aadfd30e44ab7.jpg', 

"https://i.pinimg.com/236x/1f/0a/85/1f0a85292af62ce0391b787619741418.jpg",

"https://i.pinimg.com/236x/c7/33/1e/c7331e68140503aeece267b9b5251af8.jpg",

"https://i.pinimg.com/236x/ca/1b/2f/ca1b2f6275ecb7331c43f70f20c13127.jpg",

'https://i.pinimg.com/236x/b3/5c/61/b35c6171b436669b7c08511ecc0fdbe6.jpg', 

"https://i.pinimg.com/236x/c0/7e/38/c07e383281b0b9614fcb793bbeb6aac7.jpg",

"https://i.pinimg.com/236x/0b/9a/36/0b9a3666fbdaf8b04ad8655cef502011.jpg",

"https://i.pinimg.com/236x/07/69/fd/0769fd28ed4c4b8da04e0d774f90888d.jpg",

"https://i.pinimg.com/236x/80/89/21/808921e8050a7fbca52a25fe828f4667.jpg",

"https://i.pinimg.com/236x/ef/de/c2/efdec2b18983cdf2bc11cf7ac976bb8a.jpg",

"https://i.pinimg.com/236x/99/4f/b1/994fb12c63f89db324c60e604dd750d3.jpg",

"https://i.pinimg.com/236x/6b/2d/f8/6b2df80f9f0298a03b2bc286b66656a0.jpg",

"https://i.pinimg.com/236x/08/9f/13/089f13ca0b987f33920036e2f94fd853.jpg",

"https://i.pinimg.com/236x/01/bc/9b/01bc9bd02c75d99964aca91a9768f147.jpg",

"https://i.pinimg.com/236x/54/9f/38/549f38d4e9a90d2cd975aaefa5bd2bbe.jpg",

"https://i.pinimg.com/236x/a9/76/40/a97640a52d86ba0c9ff7c5cb8e67c4a5.jpg",

"https://i.pinimg.com/236x/01/bc/9b/01bc9bd02c75d99964aca91a9768f147.jpg",

"https://i.pinimg.com/236x/fe/1b/5d/fe1b5dd3cb147b171da22313fe0f5bce.jpg",

"https://i.pinimg.com/236x/25/02/fd/2502fd80975d7a2740c75a8568fb9ae3.jpg",

"https://i.pinimg.com/236x/a5/23/46/a52346ac8de476e5c5b16cd5f566e0bb.jpg",

"https://i.pinimg.com/236x/dc/d1/89/dcd189d9325eef635c49143511203028.jpg",

"https://i.pinimg.com/236x/6f/4c/ad/6f4cad0a61fd12960b8d09fe042401c2.jpg",

"https://i.pinimg.com/236x/0a/0c/e3/0a0ce3e85a18712d61a699ea45704090.jpg",

"https://i.pinimg.com/236x/ac/d8/26/acd82662b580e99208753782bfddd142.jpg",

"https://i.pinimg.com/236x/76/af/25/76af258e74ca9416ff0956f33ecfd75e.jpg",

"https://i.pinimg.com/236x/96/60/7b/96607b23f60a6ab7a8509b0c5817267f.jpg",

"https://i.pinimg.com/236x/4b/d6/ca/4bd6ca125861243522798223f87b9b5d.jpg",

"https://i.pinimg.com/236x/3c/16/6c/3c166cb45fe194c2389e9c5f556816b0.jpg",

"https://i.pinimg.com/236x/f2/b3/bc/f2b3bc821c616bda31b76e803f92e369.jpg",

"https://i.pinimg.com/236x/d2/0f/dc/d20fdc7e2ecbaa3eecf3b60c19885455.jpg",

"https://i.pinimg.com/236x/b8/d6/0e/b8d60ec16de2130458e757467b5d668f.jpg",

"https://i.pinimg.com/236x/cf/4e/0d/cf4e0de38acc7bb5761c114d4913592d.jpg",

"https://i.pinimg.com/236x/74/f1/c6/74f1c66c2255c5eb46fefdcc51f67e72.jpg",

"https://i.pinimg.com/236x/4e/f6/78/4ef678627fa54b0a977db4ffc14905ee.jpg",

"https://i.pinimg.com/236x/91/7a/06/917a060421853a914ba3e174ca145a06.jpg",

"https://i.pinimg.com/236x/43/3b/a3/433ba32cdce9bb0ff1d59e414aba2be8.jpg",

"https://i.pinimg.com/236x/67/7f/84/677f84c34a145099b19e97429e232690.jpg",

"https://i.pinimg.com/236x/0e/40/45/0e4045bd90784efc18b959dee586834e.jpg",

'https://i.pinimg.com/236x/a8/f1/c2/a8f1c281ba5d2363f3e365149134c389.jpg',

'https://i.pinimg.com/236x/72/e5/39/72e53958268115dd31a8cf2f6f6cbf4c.jpg',

'https://i.pinimg.com/236x/cb/07/4f/cb074ff72782ad8af4d455a229acff85.jpg',

                          'https://i.pinimg.com/236x/85/39/39/853939898f5325bce974ade575949f66.jpg',
                           'https://i.pinimg.com/236x/c9/a4/b5/c9a4b56753c6994fa4cfc11641db4a88.jpg' ];


const imgBtn = document.querySelector('#meme')
  
function addNewMeme(){
  const subDiv = document.querySelector('.div1-sub')
  subDiv.innerHTML = ''; 

  let randNum = Math.floor(Math.random() * memesPictureLinks.length);
  let newImage = memesPictureLinks[randNum];
  var img = document.createElement('img');

  img.src = newImage;

  // Optionally, set other attributes like alt, width, and height
  img.alt = 'Description of the image';
  img.width = 500; // Set the width of the image
  img.height = 500; // Set the height of the image

  // Append the image to subDiv instead of body
  subDiv.appendChild(img);
}

imgBtn.addEventListener('click',addNewMeme);

