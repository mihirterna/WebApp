
function submitClick(){
var lang = ((document.getElementById("lang")||{}).value)||"";
var genre = ((document.getElementById("genre")||{}).value)||"";
var name = ((document.getElementById("name")||{}).value)||"";
var author = ((document.getElementById("author")||{}).value)||"";
var describ = (( document.getElementById("describ")||{}).value)||"";
var tab1 = ((document.getElementById("tab1")||{}).value)||"";
var tab2 = ((document.getElementById("tab2")||{}).value)||"";
var btn = ((document.getElementById("submit")||{}).value)||"";
window.alert('Data Successfully Added');
var fdb = firebase.database().ref('Books');
fdb.child(lang).child(genre).child(name).set({
'Author':author,
'Content':{
'tab1':tab1,
'tab2':tab2
},
'Describ':describ,
'Name':name
});
}