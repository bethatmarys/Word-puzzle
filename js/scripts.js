$(document).ready(function() {
  $("form#form-group").submit(function(event) {

  var sentence = $("input#yourSentence").val().toLowerCase();
  var sentenceArray = sentence.split('')
  console.log(sentenceArray);
    for (var index = 0 ; index < sentenceArray.length; index +=1) {
      if (sentenceArray[index] === "a" || sentenceArray[index] === "e" || sentenceArray[index] === "i" || sentenceArray[index] === "o" || sentenceArray[index] === "u")
      {
       sentenceArray[index] = "-";
      }
    }

    var finalSentence = sentenceArray.join('');
    // alert(finalSentence)
    $("div#output").append("<h3>" + finalSentence + "</h3>");

    event.preventDefault();
  });
});
