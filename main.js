//goal: generate silly weather prediction with attire and activity suggestion

//list of weather forecasts
let weatherOptions = ['rainy','cloudy', 'sunny', 'windy', 'snow', 'Lightning McQueen', 
'hot as f@*%', 'a blizzard', 'cloudy with a chance of meatballs',
'raining cats and dogs', 'a teletubby sun', 'partly cloudy and partly stupid like you', 
'sad boi weather', 'freeze warning according to Frozone', 'chill vibes only'];

//list of attire suggestions 
let clothingSuggest = ['rainboots', 'socks and sandals', 'a hawaiian shirt', 'a snuggie', 
'fuzzy socks and crocs', 'a straitjacket', 'cargo shorts and timbs',
'a backwards hat', 'a cowboy hat', 'a sundress', 'swimming goggles', 'a toga', 'capris',
'whatever you want', 'crocs on sport mode'];

//list of activity suggestions
let activityIdeas = ['stay inside to read', 'make tiktoks', 'sleep all day', 
'go for a run', 'binge watch Netflix', 'buy some rotisserie chicken', 
'slap your sibling', 'go skydiving', 'study for your finals, you procrastinator', 
'spend the day perfecting your sheesh','go to work', 'make some angsty spotify playlists', 
'be gay', 'learn how to code on codecademy', 'try to be less stupid'];

//function for getting a random index of array
function getRandomNum(array) {
    return Math.floor(Math.random() * array.length)
};

//code for getting desired date formatting
let date = new Date();
let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let today = weekdays[date.getDay()] + ' ' + date.toLocaleString('default', {month: 'long'}) + ' ' + date.getDate();

//function for putting together weather message with the provided user name
function generateMessage(userName) {
    let weather = weatherOptions[getRandomNum(weatherOptions)];
    let clothing = clothingSuggest[getRandomNum(clothingSuggest)];
    let activity = activityIdeas[getRandomNum(activityIdeas)];
    return console.log(`Hi ${userName}! Today is ${today} and the weather will 
    be ${weather}. According to this forecast, it is suggested by our algorithm 
    that you wear ${clothing} and ${activity}.`);
}

//calling function 
generateMessage('Natalie');
