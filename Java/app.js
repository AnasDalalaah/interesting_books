// Anas 
/*

Anas 
Asmaa

*/

/*
"Anas"

4-4
false
true

alert('hello');
var F.N= Anas Dalalah;
console.log(F.N);
*/
var book = prompt('What do you want to read fields of environment or economics?');

while (book !== 'economist' && book !== 'environment') {
  book = prompt('Please check the major entry next time');

}


if(book=='economist'){
  document.write('<img src="https://prodimage.images-bn.com/pimages/9781633538009_p0_v3_s550x406.jpg"width="150px">');
}
else if(book === 'environment'){
  document.write('<img src="https://images1.penguinrandomhouse.com/cover/9780385546133" alt="Climate change" width="150px">');
}else{
  document.write('<h2> Please check the major entry next time</h2>');
}


var book=prompt('What is the most important book of Confucius?');

if(book === ' Analects Caonfucius' )
{
  console.log('<h2>You are among the best</h2>')
}

var socialmedia platform=prompt('What is your favorite social media platform (Linkedin,Twitter)?');



if(book=='Linkedin'){
  document.write('<a href="www.linkedin.com"></a>');
}
else if(book === 'Twitter'){
  document.write(	'<a href="www.twitter.com"></a>');
}else{
  document.write('<h2> Your request does not exist, please try again</h2>');
}



var stars = prompt('how many starts do you rate our website?');

if (stars > 5) {
  stars = 5;
}

for (var i = 0; i < stars; i++) {

  document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvvIxXy4-x8TSIlWn-znOZirHvrsErjpxQw&usqp=CAU" width="50px">');
}

