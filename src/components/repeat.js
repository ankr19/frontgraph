const revdc = (d) => {
  let sum = 0;
  let avgv = [];

  for (let i in d) {
    sum = 0;
    for (let j = 1; j <= 10; j++) {
      let sp = "vdc" + j;
      sum = parseInt(d[i][sp]);
    }
    avgv.push(sum / 10);
  }
  return avgv;
};

const reidc = (d) => {
  let sum = 0;
  let avgi = [];
  for (let i in d) {
    sum = 0;
    for (let j = 1; j <= 10; j++) {
      let sp = "idc" +j;
      sum = parseInt(d[i][sp]);
    }
    avgi.push(sum/10);
  }
  return avgi;
};


const reidref = (d) => {
  let sum = 0;
  let avgid = [];
  for (let i in d) {
    sum = 0;
    for (let j = 1; j <= 10; j++) {
      let sp = "idref" + j ;
      sum = parseInt(d[i][sp]);
    }
    avgid.push(sum);
  }
  return avgid;
};

const rerpm = (d) => {
  let sum = 0;
  let avgr = [];
  for (let i in d) {
    sum = 0;
    for (let j = 1; j <= 10; j++) {
      let sp = "rpm" + j;
      sum = parseInt(d[i][sp]);
    }
    avgr.push(sum);
  }
  return avgr;
};
const retesc = (d) => {
  let sum = 0;
  let avgte = [];
  for (let i in d) {
    sum = 0;
    for (let j = 1; j <= 10; j++) {
      let sp = "tesc" + j;
      sum = parseInt(d[i][sp]);
    }
    avgte.push(sum);
  }
  return avgte;
};
const retomt = (d) => {
  let sum = 0;
  let avgtm = [];
  for (let i in d) {
    sum = 0;
    for (let j = 1; j <= 10; j++) {
      let sp = "tmot" + j;
      sum = parseInt(d[i][sp]);
    }
    avgtm.push(sum);
  }
  return avgtm;
};

const retime = (d) => {
  let time = [];
  for(let i in d){
    let sec = "" + d[i]['Time'];
    sec = sec.slice(sec.length-2, sec.length)
    time.push(parseInt(sec));
  }
  return time;
};


const newData = (id, d)=>{
  // console.log(id)
  // console.log(d)
  let count =0;
  for(let i in d){
    d[i]['id']=id[count];
    if(count<=id.length){
      count++;
    }
  }
 return d;
  // console.log(d[0]['id']=id[0]);
  // console.log(d[0]);
  // let count = 0;
  // // console.log(d)
  // let data = []
  // for(let i in d){
  //   d[i]["id"]=id[count];
  //   let obj = Object(d);
  //   data.push(obj)
  //   if(count<=id.length){
  //     count++;
  //   }
  // }
  // return data;
}

module.exports = { revdc, retime, reidc, reidref, rerpm, retesc, retomt, newData };
