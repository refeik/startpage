function decideWhatToDo() {  
	let inputValue = document.getElementById('field-3').value;
  
	if (isDomain(inputValue)) {
	  // the form won't be sent and a new window will open requesting the domain    
	  if (!startsWithProtocol(inputValue)) {
		inputValue = 'http://' + inputValue;
	  }
  
	  window.open(inputValue, '_blank');
	  return false;
	} 
  
	// Proceed to send the form as usual
	return true;
  }
  
  function startsWithProtocol(value) {
	return /^((https?|ftp|smtp):\/\/)/.test(value);
  }
  
  function isDomain(value) {
	return /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/.test(value);
  }