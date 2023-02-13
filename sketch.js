function setup() {
  // Define grid parameters
  let side_length = 400;
  let repeat = 3;
  let repeat_length = side_length / repeat;
  let min = 5;
  let row = 12;
  let column = 7;
  
  // Define color parameters
  let from = color(random(255), random(255), random(255), random(50, 120));
  let to = color(random(255), random(255), random(255), random(50, 120));
  let interA = lerpColor(from, to, random(1));
  let interB = lerpColor(from, to, random(1));
  let interC = lerpColor(from, to, random(1));
  let colors = [from, interA, interB, interC, to];
  
  // Create the canvas
  createCanvas(side_length, side_length);
  
  // Initialize variables for drawing the rectangles
  let movement = 0;
  let position = 0;
  let figure = 0;
  let remain_length = repeat_length;
  
  // Draw rows
  for (let i = 0; i < row; i++) {
    if ((i !== (row - 1)) && (remain_length > min)) {
      // Generate a random figure within the allowed range
      figure = random(min, remain_length);
      r_length = figure;
    } else {
      r_length = remain_length;
      // Draw the final rectangles
      for (let j = 0; j < 3; j++) {
        rect(position + j * repeat_length, 0, r_length, side_length);
      }
      break;
    }
    // Set a random color from the colors array
    let c = colors[int(random(colors.length))];
    fill(c);
    noStroke();
    // Draw three rectangles for each iteration
    for (let j = 0; j < 3; j++) {
      rect(position + j * repeat_length, 0, r_length, side_length);
    }
    // Update position and movement
    position = position + movement;
    movement = r_length;
    remain_length = repeat_length - position;
  }
  
  // Reset movement and position
  movement = 0;
  position = 0;
  remain_length = repeat_length;
  
  // Draw columns
  for (let i = 0; i < column; i++) {
    if ((i !== (column - 1)) && (remain_length > min)) {
      // Generate a random figure within the allowed range
      figure = random(min, remain_length);
      r_height = figure;
    } else {
      r_height = remain_length;
      // Draw the final rectangles
      for (let j = 0; j < 3; j++) {
        rect(0, position + j * repeat_length, side_length, r_height);
      }
      break;
    }
    // Set a random color from
    let c = colors[int(random(colors.length))]
    fill(c);
    noStroke();
    for(let j=0; j<3; j++){
      rect(0, position+j*repeat_length, side_length, r_height);
    }
    position = position+movement
    movement = r_height
   remain_length = repeat_length - position
  }
}