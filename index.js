function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase);
}

function sayHiToGrandma(string) {
  var uppercase = "HELLO";
  var lowercase = "hello";
  if (string === lowercase) {
    return "I can\'t hear you!";
  }
  else if (string === uppercase) {
    return "YES INDEED!";
  }
  else {
    return "I love you, too.";
  }
}