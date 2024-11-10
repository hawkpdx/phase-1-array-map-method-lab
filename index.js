const tutorials = [
  "what Does The This Keyword Mean?",
  "What Is The Constructor OO Pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "Immutable State And Pure Functions",
  "what Is The Difference Between == And ===?",
  "what Is The Difference Between Event Capturing And Bubbling?",
  "what Is JSONP?",
];
const titleCased = () => {
  return tutorials.map((tutorial) => {
    const upperCasedWords = tutorial.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
});
const letter = upperCasedWords.reduce((prev, curr) => {
  return prev + " " + curr;
  });
  return letter;
});
};
/*
#Deliverables:
[] 1. Write function named titleCased().
    [] - Function should take no arguments.
    [] - Use global var 'tutorials' as data.

[] 2. Modify the name of each tutorial.
    [] - Iterate through 'tutorials' array.
    [] - Iterate through words in individual "string"  
    [] - Access and modify each individual word in Arrays "string" 
    [] - Capitalize the first letter  
[] 3. map() takes 2 arguments -- a callback and the optional context
*/
