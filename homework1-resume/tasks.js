function openTranscript(){
  var password = document.getElementById('pwd').value;
  if (password == "ducnguyen"){
    window.open('Transcript.html')
  }
  else{
    alert("Please enter correct password to view the transcript!");
  }
}

function openProject(){
  var selectedProject = document.getElementById('project-option').value;
  window.open(String(selectedProject)+'.html')
  console.log(String(selectedProject)+'.html')
}
