function openTranscript(){
  var password = document.getElementById('pwd').value;
  if (password == "ducnguyen"){
    window.open('Transcript.html')
  }
  else{
    alert("Access denied! Incorrect password!");
  }
}

function openProject(){
  var input = document.getElementById('project1-textfield').value;
  alert(input);
}
