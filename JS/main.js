var quotes = [
   {
    quote: '"Be yourself; everyone else is already taken."',
    author: "― Oscar Wilde"
   },
   {
    quote: '"The best revenge is massive success."',
    author: "--Frank Sinatra"
   },
   {
    quote: '"Do not take life too seriously. You will not get out alive."',
    author: "--Elbert Hubbard"
   },
   {
    quote: '"Resentment is like drinking poison and waiting for your enemies to die."',
    author: "--Nelson Mandela"
   },
   {
    quote: '"It\'s not what happens to you, but how you react to it that matters."',
    author: "--Epictetus"
   } 
]
var lastIndex = -1;
function getQuotes(){
    do{
        var i = Math.floor(Math.random() * quotes.length);

    }while(i == lastIndex)
    // console.log(lastIndex);
    // console.log("*************");
    lastIndex = i;
    // console.log(i);

    document.getElementById('display-txt').innerHTML = quotes[i].quote;
    document.getElementById('author-name').innerHTML = quotes[i].author;

}


