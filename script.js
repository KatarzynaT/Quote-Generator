var quotes = [
  // Just Terry Pratchett 0-1
  ["<p>In ancient times cats were worshiped as gods; they have not forgotten this.</p>"],
  ["<p>It's not worth doing something unless you were doing something that someone, somewhere, would much rather you weren't doing.</p>"],
  // A Hat Full of Sky 2-4
  ["<p>It's still magic even if you know how it's done.</p>"],
  ["<p>Why do you go away? So that you can come back. So that you can see the place you came from with new eyes and extra colors. And the people there see you differently, too. Coming back to where you started is not the same as never leaving.</p>"],
  ["<p>Witches were a bit like cats. They didn’t much like one another’s company, but they did like to know where all the other witches were, just in case they needed them.</p>"],
  // I Shall Wear Midnight 5
  ["<p>Evil begins when you begin to treat people as things.</p>"],
  // Thief of Time 6-8
  ["<p>Some humans would do anything to see if it was possible to do it. If you put a large switch in some cave somewhere, with a sign on it saying 'End-of-the-World Switch. PLEASE DO NOT TOUCH', the paint wouldn't even have time to dry.</p>"],
  ["<p>When you look into the abyss, it’s not supposed to wave back.</p>"],
  ["<p>No other species anywhere in the world had invented boredom. Perhaps it was boredom, not intelligence, that had propelled them up to the evolutionary ladder.</p>"],
  // Sourcery 9
  ["<p>\"I meant,\" said Ipslore bitterly, \"what is there in this world that truly makes living worthwhile?\"</><p>Death thought about it.</p><p>\"CATS,\" he said eventually. \"CATS ARE NICE.\"</p>"],
  // The Truth 10
  ["<p>Sometimes glass glitters more than diamonds because it has more to prove.</p>"],
  // The Amazing Maurice and His Educated Rodents 11-12
  ["<p>If you don't turn your life into a story, you just become a part of someone else's story.</p>"],
  ["<p>A good plan isn't one where someone wins, it's where nobody thinks they've lost.</p>"],
  // Jingo 13-14
  ["<p>The intelligence of that creature known as a crowd is the square root of the number of people in it.</p>"],
  ["<p>Odd thing, ain't it... you meet people one at a time, they seem decent, they got brains that work, and then they get together and you hear the voice of the people. And it snarls.</p>"],
  // Equal Rites 15-16
  ["<p>She was also, by the standards of other people, lost. She would not see it like that. She knew where she was, it was just that everywhere else didn't.</p>"],
  ["<p>...it is well known that a vital ingredient of success is not knowing that what you're attempting can't be done.</p>"],
  // Mort 17-19
  ["<p>He was determined to discover the underlying logic behind the universe. Which was going to be hard, because there wasn't one.</p>"],
  ["<p>\"I? KILL?\" said Death, obviously offended. \"CERTAINLY NOT. PEOPLE GET KILLED, BUT THAT'S THEIR BUSINESS. I JUST TAKE OVER FROM THEN ON. AFTER ALL, IT'D BE A BLOODY STUPID WORLD IF PEOPLE GOT KILLED WITHOUT DYING, WOULDN'T IT?\"</p>"],
  ["<p>And don’t you try to butter me up. I ain’t butterable.</p>"],
  // The Light Fantastic 20-21
  ["<p>Of course I'm sane, when trees start talking to me, I don't talk back.</p>"],
  ["<p>\"Do you think there’s anything to eat in this forest?\"</p><p>\"Yes,\" said the wizard bitterly, \"us.\"</p>"],
  // Lords and Ladies 22-25
  ["<p>Nanny Ogg looked under her bed in case there was a man there. Well, you never knew your luck.</p>"],
  ["<p>If you really want to upset a witch, do her a favor which she has no means of repaying. The unfulfilled obligation will nag at her like a hangnail.</p>"],
  ["<p>Humans are always slightly lost. It's a basic characteristic.</p>"],
  ["<p>\"But all them things exist,\" said Nanny Ogg.\n\"That's no call to go around believing in them. It only encourages 'em.\"</p>"],
  // Small Gods 26
  ["<p>What have I always believed? That on the whole, and by and large, if a man lived properly, not according to what any priests said, but according to what seemed decent and honest inside, then it would, at the end, more or less, turn out all right.</p>"],
  // Witches Abroad 27-29
  ["<p>\"Blessings be on this house,\" Granny said, perfunctorily. It was always a good opening remark for a witch. It concentrated people's minds on what other things might be on this house.</p>"],
  ["<p>Granny Weatherwax was not a good loser. From her point of view, losing was something that happened to other people.</p>"],
  ["<p>Magrat said she could never make the wand do that and Esme said no because, she wasted time wishing for thinges to happen instead of working out how to make them happen.</p>"],
  // Wyrd Sisters 30-32
  ["<p>\"I hate cats.\"</p><p>Death's face became a little stiffer, if that were possible. The blue glow in his eye sockets flickered red for an instant.</p><p>\"I SEE,\" he said. The tone suggested that death was too good for cat haters.<p>"],
  ["<p>She walked quickly through the darkness with the frank stride of someone who was at least certain that the forest, on this damp and windy night, contained strange and terrible things and she was it. Things that try to look like things often do look more like things than things.</p>"],
  ["<p>\"We ain’t going to curse anyone,\" said Granny firmly. \"It hardly ever works if they don’t know you’ve done it.\"</p>"]
];
var authors = [
  ["- Terry Pratchett"],
  ["- Terry Pratchett, A Hat Full of Sky"],
  ["- Terry Pratchett, I Shall Wear Midnight"],
  ["- Terry Pratchett, Thief of Time"],
  ["- Terry Pratchett, Sourcery"],
  ["- Terry Pratchett, The Truth"],
  ["- Terry Pratchett, The Amazing Maurice and His Educated Rodents"],
  ["- Terry Pratchett, Jingo"],
  ["- Terry Pratchett, Equal Rites"],
  ["- Terry Pratchett, Mort"],
  ["- Terry Pratchett, The Light Fantastic"],
  ["- Terry Pratchett, Lords and Ladies"],
  ["- Terry Pratchett, Small Gods"],
  ["- Terry Pratchett, Witches Abroad"],
  ["- Terry Pratchett, Wyrd Sisters"]
];

var currentQuote;
var currentAuthor;
var quotesNumber = 32;

$(document).ready(function() {
  // generating random quote
  $("#generate").click(function() {
    generateQuote();
  });
  // share the quote on twitter
  $("#tweet").click(function() {
    var url = "https://twitter.com/intent/tweet/?text=" + currentQuote + " " + currentAuthor + " Random Quote Generator: https://codepen.io/KatarzynaT/full/GOMeGN/";
    window.open(url);
  });
  generateQuote();
});

function generateQuote() {
  var randomNumber = Math.floor(Math.random() * quotesNumber);
  currentQuote = quotes[randomNumber];
  if (randomNumber >=0 && randomNumber <=1) {
    currentAuthor = authors[0];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  } else if (randomNumber >=2 && randomNumber <=4) {
    currentAuthor = authors[1];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  } else if (randomNumber == 5) {
    currentAuthor = authors[2];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  } else if (randomNumber >=6 && randomNumber <=8) {
    currentAuthor = authors[3];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  } else if (randomNumber == 9) {
    currentAuthor = authors[4];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  } else if (randomNumber == 10) {
    currentAuthor = authors[5];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  } else if (randomNumber >=11 && randomNumber <=12) {
    currentAuthor = authors[6];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  } else if (randomNumber >=13 && randomNumber <=14) {
    currentAuthor = authors[7];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  } else if (randomNumber >=15 && randomNumber <=16) {
    currentAuthor = authors[8];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  } else if (randomNumber >=17 && randomNumber <=19) {
    currentAuthor = authors[9];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  } else if (randomNumber >=20 && randomNumber <=21) {
    currentAuthor = authors[10];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  } else if (randomNumber >=22 && randomNumber <=25) {
    currentAuthor = authors[11];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  } else if (randomNumber == 26) {
    currentAuthor = authors[12];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  } else if (randomNumber >=27 && randomNumber <=29) {
    currentAuthor = authors[13];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  } else if (randomNumber >=30 && randomNumber <=32) {
    currentAuthor = authors[14];
    $(".quote").html(currentQuote);
    $(".author").html(currentAuthor);
  }
}