

const scaleMajor = [1,2,2,1,2,2,2];
const scaleHarmonicMinor = [1,2,1,2,2,1,3]; 
const scalePhrygian = [1,1,2,2,2,1,2];
const scaleDorian = [1,2,1,2,2,2,1];
const scaleLydian = [1,2,2,2,1,2,2];
const scaleMelodicMinor = [1,2,1,2,2,2,2];
const scaleLocrian = [1,1,2,2,1,2,2]

var b = scaleMajor;
let noteNum = 0;
var root = document.getElementById("root_note").value;



let a = [
  {num:1, note: "c"},
  {num:2, note: "c_sharp"},
  {num:3, note: "d"},
  {num:4, note: "d_sharp"},
  {num: 5, note: "e"},
  {num: 6, note: "f"},
  {num:7, note: "f_sharp"},
  {num:8, note: "g"},
  {num:9, note: "g_sharp"},
  {num:10, note: "a"},
  {num:11, note: "a_sharp"},
  {num:12, note: "b"},
  {num:13, note: "c"},
  {num:14, note: "c_sharp"},
  {num:15, note: "d"},
  {num:16, note: "d_sharp"},
  {num:17, note: "e"},
  {num:18, note: "f"},
  {num:19, note: "f_sharp"},
  {num:20, note: "g"},
  {num:21, note: "g_sharp"},
  {num:22, note: "a"},
  {num:23, note: "a_sharp"},
  {num:24, note: "b"},
];

function updateRoot() {
var r= document.getElementById("root_note");
root = r.value;
checkRoot()
}

function updateScale(){
var s = document.getElementById("scale_select").value;
b = eval(s);
checkRoot()
}


function checkRoot(){
  Array.from(document.querySelectorAll('.scale')).forEach(function(el) { 
    el.classList.remove('scale');
  });
var i = 0;
var j = 0; 
root = root - 1;
while (i < a.length && j < b.length) {     
    if (a[i].num == root) {                                            
    }
    ++i;
    ++j;
}
getScale();
}



function getScale(){
var x = 0;
var y = 0;

while (x < b.length) {     
    noteNum = (root + b[y]);
    root = (root + b[y]);
        ++x;
        ++y;                               
    console.log(a[noteNum].note);
 let keyStyle = document.getElementById(noteNum);
 keyStyle.classList.add("scale");
        }
    root = document.getElementById("root_note").value;
    }
    
