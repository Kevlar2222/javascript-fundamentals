const ftoc = function(ftemp) {
  let ctemp;
  ctemp = (ftemp - 32) * (5/9);
  ctemp = Math.round(ctemp * 10) / 10;
  return(ctemp);

}

const ctof = function(cels) {
let fahr;
fahr = cels * (9/5) + 32;
fahr = Math.round(fahr * 10) / 10;
return(fahr);
}

module.exports = {
  ftoc,
  ctof
}
