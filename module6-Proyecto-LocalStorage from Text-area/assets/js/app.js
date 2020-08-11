//variables
const tweetList = document.getElementById("lista-tweets");
// console.log('tweetList=>', tweetList);

// Event Listeners

eventListeners();

function eventListeners() {
  // sending the form
  document.querySelector("#formulario").addEventListener("submit", addTweet);

  // Delete tweets
  tweetList.addEventListener("click", deleteTweet);

  // Content loaded!
  document.addEventListener("DOMContentLoaded", localStorageReady);
}

// Functions
/**
 * Function that gets the click events in the elements
 * @param {event} event of the click elements
 */
function addTweet(e) {
  e.preventDefault();
  // read tet area value
  const tweet = document.getElementById("tweet").value;
  const localStorageTweets = getTweetsFromLocalStorage();
  if (!localStorageTweets.includes(tweet)) {
    console.log('LSTweetsaddTweet=>', localStorageTweets);
    // create delete tweet button
    const deleteButton = document.createElement("a");
    deleteButton.classList = "borrar-tweet";
    deleteButton.innerText = "X";
    // create element and add its value into the list
    const list = document.createElement("li");
    list.innerText = tweet;
    // Add delete tweet button inline with the text tweet
    list.appendChild(deleteButton);
    // Add text tweet to the list
    tweetList.appendChild(list);
    // console.log(list);
    // // Add to Local Storage
    addTweetToLocalStorage(tweet);
  } else {
    alert('No puede haber tweets iguales');
  }
}
/**
 * Delete tweet from DOM
 * @param {event} event from the click
 */
function deleteTweet(e) {
  e.preventDefault();
  if (e.target.className === "borrar-tweet") {
    e.target.parentElement.remove();
    deleteTweetFromLocalStorage(e.target.parentElement.innerText);
  }
}
/**
 * Show data from Local Storage in the DOM list
 */
function localStorageReady() {
  let tweets;
  tweets = getTweetsFromLocalStorage();
  tweets.forEach(function (tweet) {
    // create delete tweet button
    const deleteButton = document.createElement("a");
    deleteButton.classList = "borrar-tweet";
    deleteButton.innerText = "X";
    // create element and add its value into the list
    const list = document.createElement("li");
    list.innerText = tweet;
    // Add delete tweet button inline with the text tweet
    list.appendChild(deleteButton);
    // Add text tweet to the list
    tweetList.appendChild(list);
  });
}
/**
 * Add tweet to Local Storage
 * @param {string} tweet get from the text area
 */
function addTweetToLocalStorage(tweet) {
  let tweets;
  tweets = getTweetsFromLocalStorage();
  // // Add new tweet
  tweets.push(tweet);
  // // Convert from string to array for local storage
  localStorage.setItem("tweets", JSON.stringify(tweets));
  // // Add to local Storage
  // localStorage.setItem('tweets', tweet);
  // console.log(tweet);
}
/**
 * Check if there are something in local storage, returns an array
 */
function getTweetsFromLocalStorage() {
  let tweets;
  // test local storage values
  if (localStorage.getItem("tweets") === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem("tweets"));
  }
  return tweets;
}
/**
 * 
 */
function deleteTweetFromLocalStorage(tweet) {
  
  let tweets, deleteTweet;
  // Delete letter 'X' from tweet
  deleteTweet = tweet.substring(0,tweet.length -1);
  tweets = getTweetsFromLocalStorage();
  tweets.forEach(function(tweet, index) {
    if (deleteTweet === tweet) {
      tweets.splice(index, 1);
    }
  });
  localStorage.setItem('tweets', JSON.stringify(tweets));
}