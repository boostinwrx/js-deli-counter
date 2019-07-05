var katsDeliLine = [];

function takeANumber(katsDeliLine, newPerson) {
  katsDeliLine.push(newPerson);
  var lineLength = katsDeliLine.length;
  return `Welcome, ${newPerson}. You are number ${lineLength} in line.`;
}

function nowServing(katsDeliLine) {
  if (katsDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstPerson = katsDeliLine.shift(0, 1);
    return `Currently serving ${firstPerson}.`
    katsDeliLine = katsDeliLine.slice(1);
  }
}

function currentLine(katsDeliLine) {
  if (katsDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    let i = 0;
    let x = i + 1;
    var line = [];
    while (katsDeliLine.length > line.length) {
      line.push(" " + [i + 1] + ". " + katsDeliLine[i]);
      i++;
    }
  }
  return "The line is currently:" + line;
}
