// The main qoute picker code
writeRandomQuote = function () {
   var quote = new Array();
   quote[0] = "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former. - Albert Einstein";
   quote[1] = "Do not take life too seriously. You will never get out of it alive. - Elbert Hubbard";
   quote[2] = "A day without sunshine is like, you know, night. - Steve Martin";
   quote[3] = "A good head and a good heart are always a formidable combination. - Albert Einstein";
   quote[4] = "I have no special talents. I am only passionately curious. - Albert Einstein";
   quote[5] = "A room without books is like a body without a soul. - Marcus Tullius Cicero";
   quote[6] = "A lie gets halfway around the world before the truth has a chance to get its pants on. - Sir Winston Churchill";
   quote[7] = "Whether you think that you can, or that you can't, you are usually right. - Henry Ford";
   quote[8] = "Do, or do not. There is no 'try'. - Yoda";
   quote[9] = "Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity. - Martin Luther King Jr.";
   quote[10] = "I think 'Hail to the Chief' has a nice ring to it. - John F. Kennedy";
   quote[11] = "I have nothing to declare except my genius. - Oscar Wilde";
   quote[12] = "What separates the winners from the losers is how a person reacts to each new twist of fate. - Donald Trump";
   quote[13] = "I want to put a ding in the universe. - Steve Jobs";
   quote[14] = "Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs";
   quote[15] = "We hire people who want to make the best things in the world. - Steve Jobs";
   quote[16] = "Life is not fair; get used to it. - Bill Gates";
   quote[17] = "Your most unhappy customers are your greatest source of learning. - Bill Gates";
   quote[18] = "Success is a lousy teacher. It seduces smart people into thinking they can't lose. - Bill Gates";
   quote[19] = "I think when you spread the wealth around it's good for everybody. - Barack Obama";
   quote[20] = "Storage Almost Full - iOS";
   quote[21] = "Talk is cheap. Show me the code. - Linus Torvalds";
   quote[22] = "In order to succeed, we must first believe that we can. - Nikos Kazantzakis";

   var rand = Math.floor(Math.random()*quote.length);
   document.write(quote[rand]);
 }
 writeRandomQuote();

 // Post friendly little console log
console.log("Hello, Welcome to the site!");
