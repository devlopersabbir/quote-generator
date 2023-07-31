const generateBtn = document.querySelector("#generateBtn");
const outputTag = document.querySelector("#outputTag");
const funnyQuotes = [
  "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
  "I told my wife she was drawing her eyebrows too low. She looked surprised.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why don't some couples go to the gym? Because some relationships don't work out!",
  "I'm on a whiskey diet. I've lost three days already!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "I don't trust stairs. They're always up to something.",
  "Why was the math book sad? Because it had too many problems.",
  "I told my wife she was speaking too loudly. I got a taste of my own medicine.",
  "Why don't some couples go to the gym? Because some relationships don't work out!",
  "I got fired from my job at the bank today. An old lady came in and asked me to check her balance, so I pushed her over.",
  "I used to play piano by ear, but now I use my hands.",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "If at first, you don't succeed, skydiving is not for you.",
  "I'm not lazy; I'm on energy-saving mode.",
  "I don't need a hairstylist; my pillow gives me a new hairstyle every morning!",
  "I'm on a seafood diet. I see food and eat it.",
  "Don't trust atoms. They make up everything, even lies!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I used to play piano by ear, but now I use my hands.",
  "The early bird might get the worm, but the second mouse gets the cheese.",
  "If you think nobody cares about you, try missing a couple of payments.",
  "I'm so good at sleeping, I can do it with my eyes closed.",
  "The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.",
  "I used to be indecisive. Now I'm not so sure.",
  "I was going to tell you a joke about time travel, but you didn't like it.",
  "If you're not supposed to eat at night, why is there a light in the fridge?",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I don't trust stairs. They're always up to something.",
  "I don't need a hairstylist; my pillow gives me a new hairstyle every morning!",
  "I'm on a seafood diet. I see food and eat it.",
  "The early bird might get the worm, but the second mouse gets the cheese.",
  "If you think nobody cares about you, try missing a couple of payments.",
  "I'm so good at sleeping, I can do it with my eyes closed.",
  "The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.",
  "I used to be indecisive. Now I'm not so sure.",
  "I was going to tell you a joke about time travel, but you didn't like it.",
  "If you're not supposed to eat at night, why is there a light in the fridge?",
  "I used to be a baker, but I couldn't make enough dough.",
  "I don't trust stairs. They're always up to something.",
  "I'm on a seafood diet. I see food and eat it.",
  "The early bird might get the worm, but the second mouse gets the cheese.",
  "If you think nobody cares about you, try missing a couple of payments.",
  "I'm so good at sleeping, I can do it with my eyes closed.",
  "The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.",
  "I used to be indecisive. Now I'm not so sure.",
  "I was going to tell you a joke about time travel, but you didn't like it.",
  "If you're not supposed to eat at night, why is there a light in the fridge?",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I don't trust stairs. They're always up to something.",
  "I'm on a seafood diet. I see food and eat it.",
  "The early bird might get the worm, but the second mouse gets the cheese.",
  "If you think nobody cares about you, try missing a couple of payments.",
  "I'm so good at sleeping, I can do it with my eyes closed.",
  "The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.",
  "I used to be indecisive. Now I'm not so sure.",
  "I was going to tell you a joke about time travel, but you didn't like it.",
  "If you're not supposed to eat at night, why is there a light in the fridge?",
  "I used to be a baker, but I couldn't make enough dough.",
  "I don't trust stairs. They're always up to something.",
  "I'm on a seafood diet. I see food and eat it.",
  "The early bird might get the worm, but the second mouse gets the cheese.",
  "If you think nobody cares about you, try missing a couple of payments.",
  "I'm so good at sleeping, I can do it with my eyes closed.",
  "The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.",
  "I used to be indecisive. Now I'm not so sure.",
  "I was going to tell you a joke about time travel, but you didn't like it.",
  "If you're not supposed to eat at night, why is there a light in the fridge?",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I don't trust stairs. They're always up to something.",
  "I'm on a seafood diet. I see food and eat it.",
  "The early bird might get the worm, but the second mouse gets the cheese.",
  "If you think nobody cares about you, try missing a couple of payments.",
  "I'm so good at sleeping, I can do it with my eyes closed.",
  "The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.",
  "I used to be indecisive. Now I'm not so sure.",
  "I was going to tell you a joke about time travel, but you didn't like it.",
  "If you're not supposed to eat at night, why is there a light in the fridge?",
  "I used to be a baker, but I couldn't make enough dough.",
  "I don't trust stairs. They're always up to something.",
  "I'm on a seafood diet. I see food and eat it.",
  "The early bird might get the worm, but the second mouse gets the cheese.",
  "If you think nobody cares about you, try missing a couple of payments.",
  "I'm so good at sleeping, I can do it with my eyes closed.",
  "The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.",
  "I used to be indecisive. Now I'm not so sure.",
  "I was going to tell you a joke about time travel, but you didn't like it.",
  "If you're not supposed to eat at night, why is there a light in the fridge?",
  "I used to be a baker, but I couldn't make enough dough.",
];


generateBtn.addEventListener("click", function () {
    const randomIndexNumber = Math.floor(Math.random() * funnyQuotes.length);
    outputTag.innerText = funnyQuotes[randomIndexNumber];
})