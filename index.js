var katzDeli = [];

function currentLine(name) {
  if (name.length === 0) {
    return "The line is currently empty.";
  }
  
  for (let i = 0; i < name.length; i++) {
    katzDeli.push(`${i + 1}. ${name[i]}`)
  }
}

function takeANumber(line, name) {
  line.push(name);
  
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing() {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
    
  }
  return katzDeli[0];
}