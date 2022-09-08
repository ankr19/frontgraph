const revdc = (d) => {
  let vdc = [];
  for (let i = 0; i < 10; i++) {
    let sp = "vdc" + (i + 1);
    vdc.push(parseInt(d[0][sp]));
  }
  return vdc;
};
const reidc = (d) => {
  let idc = [];
  for (let i = 0; i < 10; i++) {
    let sp = "idc" + (i + 1);
    idc.push(parseInt(d[0][sp]));
  }
  return idc;
};
const reidref = (d) => {
  let idref = [];
  for (let i = 0; i < 10; i++) {
    let sp = "idref" + (i + 1);
    idref.push(parseInt(d[0][sp]));
  }
  return idref;
};
const rerpm = (d) => {
  let rpm = [];
  for (let i = 0; i < 10; i++) {
    let sp = "rpm" + (i + 1);
    rpm.push(parseInt(d[0][sp]));
  }
  return rpm;
};
const retesc = (d) => {
  let tesc = [];
  for (let i = 0; i < 10; i++) {
    let sp = "tesc" + (i + 1);
    tesc.push(parseInt(d[0][sp]));
  }
  return tesc;
};
const retomt = (d) => {
  let tmot = [];
  for (let i = 0; i < 10; i++) {
    let sp = "tmot" + (i + 1);
    tmot.push(parseInt(d[0][sp]));
  }
  return tmot;
};

const retime = (d) => {
  let sec = "" + d[0].Time;
  sec = sec.slice(sec.length - 2, sec.length);

  sec = sec.slice(sec.length - 2, sec.length);
  return new Array(10).fill(parseInt(sec));
};

module.exports = { revdc, retime, reidc, reidref, rerpm, retesc, retomt };
