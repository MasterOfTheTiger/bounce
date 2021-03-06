/**
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (c) 2018 Kerr Travers
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
*/

// The main quote picker code
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
   quote[23] = "It's Leviosa not Leviosar. - Hermione Granger";
   quote[24] = "I am a person. - whatisthisusername";
     quote[24] = "I am a person, not a bot. - unknown";

   var rand = Math.floor(Math.random()*quote.length);
   document.write(quote[rand]);
 }
 writeRandomQuote();

 // Post friendly little console log
console.log("Hello, Welcome to the site!");
console.log("Make Sure to Check us out! https://github.com/woodfi/");
// Console.log Over
