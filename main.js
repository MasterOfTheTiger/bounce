document.getElementsByTagName("html")[0].addEventListener('load', dysplayQuote());

function dysplayQuote() {
	var quote = [
	"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former. - Albert Einstein",
	"Do not take life too seriously. You will never get out of it alive. - Elbert Hubbard",
	"A day without sunshine is like, you know, night. - Steve Martin",
	"A good head and a good heart are always a formidable combination. - Albert Einstein",
	"I have no special talents. I am only passionately curious. - Albert Einstein",
	"A room without books is like a body without a soul. - Marcus Tullius Cicero",
	"A lie gets halfway around the world before the truth has a chance to get its pants on. - Sir Winston Churchill",
	"Whether you think that you can, or that you can't, you are usually right. - Henry Ford",
	"Do, or do not. There is no 'try'. - Yoda",
	"Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity. - Martin Luther King Jr.",
	 "I think 'Hail to the Chief' has a nice ring to it. - John F. Kennedy",
	"I have nothing to declare except my genius. - Oscar Wilde",
	"What separates the winners from the losers is how a person reacts to each new twist of fate. - Donald Trump",
	"I want to put a ding in the universe. - Steve Jobs",
	"Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs",
	"We hire people who want to make the best things in the world. - Steve Jobs",
	"Life is not fair, get used to it. - Bill Gates",
	"Your most unhappy customers are your greatest source of learning. - Bill Gates",
	"Success is a lousy teacher. It seduces smart people into thinking they can't lose. - Bill Gates",
	"I think when you spread the wealth around it's good for everybody. - Barack Obama",
	"Storage Almost Full - iOS",
	"Talk is cheap. Show me the code. - Linus Torvalds",
	"In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
	"It's Leviosa not Leviosar. - Hermione Granger"
	];
	document.getElementById("quote").innerHTML = quote[Math.round(Math.random()*(quote.length-1))];
 }
