(function () {

    var names = ["Yaakov", "Johny Depp", "James", "Cameroon", "Preseshh", "Florida", "Miami", "Shiv", "Lavi", "Iron Man"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();
