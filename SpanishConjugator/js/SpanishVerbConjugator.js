/*

Spanish Verb Conjugator

by AJ Owens

A program that takes the Spanish verb and tense input from the user and finds the
corresponding list of conjugations

*/
function SpanishVerbConjugator(){

  // Declare variables
  var message = "";
  var selectionStatementOutput = document.getElementById("selectionStatementOutput");
  var outputConjugations = document.getElementById("outputConjugations");
  var selectionStatement = "";
  var selectVerbAndTense = document.getElementById("selectVerbAndTense");
  var tenseList = document.getElementById("tenseList");
  var verbList = document.getElementById("verbList");

  //Array containing all of the verbs and their conjugations based on tense
  var verbs = [
  {
    name: "Estar",
      tenses: {
        Present: {
          yo: "estoy",
          tú: "estás",
          'él, ella, usted': "está",
          nosotros: "estamos",
          vosotros: "estáis",
          'ellos, ellas, ustedes': "están"
        },
        Preterite: {
          yo: "estuve",
          tú: "estuviste",
          'él, ella, usted': "estuvo",
          nosotros: "estuvimos",
          vosotros: 'estuvais',
          'ellos, ellas, ustedes': "estuvieron"
        },
        Imperfect: {
          yo: "estaba",
          tú: "estabas",
          'él, ella, usted': "estaba",
          nosotros: 'estábamos',
          vosotros: 'estabais',
          'ellos, ellas, ustedes': "estaban"
        }
      }
    },
  {
    name: "Ir",
      tenses: {
        Present: {
          yo: 'voy',
          tú: 'vas',
          'él, ella, usted': 'va',
          nosotros: 'vamos',
          vosotros: 'vais',
          'ellos, ellas, ustedes': 'van'
        },
        Preterite: {
          yo: 'fui',
          tú: 'fuiste',
          'él, ella, usted': 'fue',
          nosotros: 'fuimos',
          vosotros: 'fuisteis',
          'ellos, ellas, ustedes': 'fueron'
        },
        Imperfect: {
          yo: 'iba',
          tú: 'ibas',
          'él, ella, usted': 'iba',
          nosotros: 'íbamos',
          vosotros: 'ibais',
          'ellos, ellas, ustedes': 'iban'
        }
      }
    },
  {
    name: "Ser",
      tenses: {
        Present: {
          yo: 'soy',
          tú: 'eres',
          'él, ella, usted': 'es',
          nosotros: 'somos',
          vosotros: 'sois',
          'ellos, ellas, ustedes': 'son'
        },
        Preterite: {
          yo: 'fui',
          tú: 'fuiste',
          'él, ella, usted': 'fue',
          nosotros: 'fuimos',
          vosotros: 'fuisteis',
          'ellos, ellas, ustedes': 'fueron'
        },
        Imperfect: {
          yo: 'era',
          tú: 'eras',
          'él, ella, usted': 'era',
          nosotros: 'éramos',
          vosotros: 'erais',
          'ellos, ellas, ustedes': 'eran'
        }
      }
    }
  ];

  //When the user submits verb and tense, this plugs them into the loop 
  //that gets the corresponding conjugations

  selectVerbAndTense.addEventListener('submit', function(event) {
    event.preventDefault();
    message = "";
    selectionStatement = "";
    
    //Finds the name of the verb and tense and puts it into a 
    //message at the top
    
    selectionStatement += "The conjugations for <span id='outputVerbName'>" +
    verbs[verbList.value]['name'] + 
    "</span> in the <span id='outputTenseName'>" + 
    tenseList.value + "</span> tense are: ";
    
    selectionStatementOutput.innerHTML = selectionStatement;

    // Objects.keys gets the parts of the verb (the corresponding pronoun for each 
    //conjugation) from the array, puts it into its own array of strings
    
    var parts = Object.keys(verbs[verbList.value]["tenses"][tenseList.value]);
    
    // uses the pronoun name gotten with Objects.keys to find the 
    // conjugation and iterates it into the message
    for(var index = 0; index < parts.length; index++) {
      var part = parts[index];
      message += "<p>" + parts[index] + ": " + "<span class='conjugation'>" + 
      verbs[verbList.value]["tenses"][tenseList.value][part] + "</span>" + "</p>";
    }
    
    //Output
    outputConjugations.innerHTML = message;
  });  
}

SpanishVerbConjugator();