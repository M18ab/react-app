// Create a button outside of your design in your codepen which when clicked makes a duplicate of your card
document.querySelector('.dup').addEventListener('click', function(e) {
  const card = document.getElementById('card1');
  const clone = card.cloneNode(true);
  document.body.appendChild(clone);
  console.log(clone);
});

// Add event listener to delete last card
document.querySelector('.del').addEventListener('click', function(e) {
  const cards = document.querySelectorAll(".card");
  const lastCard = cards[cards.length - 1];
  lastCard.remove();
});

// Using JavaScript Events, do the same thing to the card for “hover”
card1.addEventListener('mouseover', function(e) {
  const card = document.getElementById('card1');
  card.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2)";;
});
card1.addEventListener('mouseleave', function(e) {
  const card = document.getElementById('card1');
  card.style.boxShadow = "";
});

// On click, toggles the background color of the card
backg.addEventListener('click', function(e) {
  const card = document.getElementById('card1');
  card.style.backgroundColor = "#a71c19";
});
 
// On click, change the text of the heading / title you used to “something else”
head.addEventListener('click', function(e) {
  const header = document.getElementById('header');
  header.textContent = "Something Else";
});

//Partner 1: On click of “Details”, don’t link to hax.psu.edu, instead show (or hide) your paragraph description. Do this via JavaScript.
btn.addEventListener('click', function(e) {
  const paragraph = document.getElementById('paragraph');
  if(paragraph.textContent == "This is a picture of a bing user"){
    paragraph.textContent = "";  
  } else {
    paragraph.textContent = "This is a picture of a bing user";
  }
});
