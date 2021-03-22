function openTranscript(){
  var password = document.getElementById('pwd').value;
  if (password == "ducnguyen"){
    window.open('Transcript.html')
  }
  else{
    alert("Please enter the correct password to view transcript!");
  }
}

function openProject(){
  var selectedProject = document.getElementById('project-option').value;
  window.open(String(selectedProject)+'.html')
  console.log(String(selectedProject)+'.html')
}

var zero = 0
var one = 10

var result = one/0;
