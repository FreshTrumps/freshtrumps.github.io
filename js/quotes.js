const quotes = ["I have a great relationship with the blacks.", "Any negative polls are fake news, just like the CNN, ABC, NBC polls in the election. Sorry, people want border security and extreme vetting.", "An ‘extremely credible source’ has called my office and told me that Barack Obama’s birth certificate is a fraud.", "The beauty of me is that I’m very rich.", "I’ve said if Ivanka weren’t my daughter, perhaps I’d be dating her.", "My fingers are long and beautiful, as, it has been well documented, are various other parts of my body.", "You’re disgusting.", "SEE YOU IN COURT, THE SECURITY OF OUR NATION IS AT STAKE!", "My IQ is one of the highest — and you all know it! Please don’t feel so stupid or insecure; it’s not your fault.", "You know, it really doesn’t matter what the media write as long as you’ve got a young, and beautiful, piece of ass.", "The FAKE NEWS media (failing @nytimes, @NBCNews, @ABC, @CBS, @CNN) is not my enemy, it is the enemy of the American People!"];

function genQuote() {
  const randNum = Math.floor(Math.random() * (quotes.length));
  const quote = quotes[randNum];
  document.getElementById('quote').innerHTML = quote;
  document.title = quote;
  document.getElementById('intro-header').style.background = 'url(https://trumps.lol/' + randNum + '.gif) no-repeat center center';
  document.getElementById('intro-header').style['background-size'] = 'cover';
}

genQuote();
