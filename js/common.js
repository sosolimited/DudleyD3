// Determines if a character is a number.
// http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
// Return team colors. Required only for the crosshatching pattern that we must create inline with javascript, instead of with CSS.
function get_team_color(team) {
  var color = "green";
  switch(team) {
    case "broncos":
      color = "#FB4F14";
      break;
    case "seahawks":
      color = "#71D54A";
      break;
    case "chiefs":
      color = "#C60C30";
      break;
    case "pats":
      color = "#002244";
      break;
    case "niners":
      color = "#AA0000";
      break;
    case "panthers":
      color = "#0088CE";
      break;
    case "saints":
      color = "#B4A76C";
      break;
    default:
      color = "pink";
  }
  return color;
}

