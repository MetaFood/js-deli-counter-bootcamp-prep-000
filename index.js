function currentLine(line) {
  if (line.length = 0) {
    return "The line is currently empty.";
  }
  
  var numbersAndNames = [];
  
  for (let i = 0; i < line.length; i++) {
    numbersAndNames.push(`${i + 1} )
  }
}

function takeANumber(line, name) {
  line.push(name);
  
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing() {
  return katzDeli[0];
}