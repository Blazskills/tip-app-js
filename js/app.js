//Listen To Event

document.querySelector('#tip-form').addEventListener('submit', function (e) {
  //Hide results
  document.querySelector('#results').style.display = 'none';

  //Show Loader
  document.querySelector('#loading').style.display = 'block';
  setTimeout(calculateTipResult, 2000);

  e.preventDefault()
});


//Calculate Result
function calculateTipResult() {

  // UI Vars
  const amount = document.querySelector('#amount')
  const percent = document.querySelector('#percent')
  const shareNumber = document.querySelector('#share-number')

  const tip = document.querySelector('#tip')
  const totalAmount = document.querySelector('#total-amount')
  const tipPerPerson = document.querySelector('#tip-per-person')
  const totalPerPerson = document.querySelector('#total-per-person')
  const attendant = document.querySelector('#attendant')
  const givenTo = document.querySelector('#givento')

  const calTip = parseFloat(amount.value) * (percent.value) / 100
  const calTotalAmount = parseFloat(amount.value) + calTip
  const calTipPerPerson = parseFloat(calTip / (shareNumber.value))
  const calTotalPerPerson = parseFloat(calTotalAmount / (shareNumber.value))
  if (isFinite(calTotalPerPerson)) {
    tip.value = calTip.toFixed(2);
    totalAmount.value = calTotalAmount.toFixed(2)
    tipPerPerson.value = calTipPerPerson.toFixed(2)
    totalPerPerson.value = calTotalPerPerson.toFixed(2)
    givenTo.value = attendant.value
    //Show result
    document.querySelector('#results').style.display = 'block';

    //Hide Loader
    document.querySelector('#loading').style.display = 'none';
  }
  else {
    showError('KIndly Check your Input')



  }
}

//Show Error

function showError(error) {
  //Hide result
  document.querySelector('#results').style.display = 'none';

  //Hide Loader
  document.querySelector('#loading').style.display = 'none';
  // create Div
  const errorDiv = document.createElement('div');

  //Get elements
  const card = document.querySelector('.mainw3-agile')
  const heading = document.querySelector('.heading');
  //Add Class
  errorDiv.className = 'alert alert-danger';

  //Create Text node and append to div

  errorDiv.appendChild(document.createTextNode(error));

  //Insert error above heading
  card.insertBefore(errorDiv, heading);

  //Clear error after 3 seconds
  setTimeout(clearError, 2000);


}

//CLear error
function clearError() {
  document.querySelector('.alert').remove();
}











































// var $cc = {}
// $cc.validate = function(e){

//   //if the input is empty reset the indicators to their default classes
//   if (e.target.value == ''){
//     e.target.previousElementSibling.className = 'card-type';
//     e.target.nextElementSibling.className = 'card-valid';
//     return
//   }

//   //Retrieve the value of the input and remove all non-number characters
//   var number = String(e.target.value);
//   var cleanNumber = '';
//   for (var i = 0; i<number.length; i++){
//     if (/^[0-9]+$/.test(number.charAt(i))){
//       cleanNumber += number.charAt(i);
//     }
//   }

//   //Only parse and correct the input value if the key pressed isn't backspace.
//   if (e.key != 'Backspace'){
//     //Format the value to include spaces in the correct locations
//     var formatNumber = '';
//     for (var i = 0; i<cleanNumber.length; i++){
//       if (i == 3 || i == 7 || i == 11 ){
//           formatNumber = formatNumber + cleanNumber.charAt(i) + ' '
//       }else{
//         formatNumber += cleanNumber.charAt(i)
//       }
//     }
//     e.target.value = formatNumber;
//   }

//   //run the Luhn algorithm on the number if it is at least equal to the shortest card length
//   if (cleanNumber.length >= 12){
//     var isLuhn = luhn(cleanNumber);
//   }

//   function luhn(number){
//     var numberArray = number.split('').reverse();
//     for (var i=0; i<numberArray.length; i++){
//       if (i%2 != 0){
//         numberArray[i] = numberArray[i] * 2;
//         if (numberArray[i] > 9){
//           numberArray[i] = parseInt(String(numberArray[i]).charAt(0)) + parseInt(String(numberArray[i]).charAt(1))
//         }
//       }
//     }
//     var sum = 0;
//     for (var i=1; i<numberArray.length; i++){
//       sum += parseInt(numberArray[i]);
//     }
//     sum = sum * 9 % 10;
//     if (numberArray[0] == sum){
//       return true
//     }else{
//       return false
//     }
//   }

//   //if the number passes the Luhn algorithm add the class 'active'
//   if (isLuhn == true){
//     e.target.nextElementSibling.className = 'card-valid active'
//   }else{
//     e.target.nextElementSibling.className = 'card-valid'
//   }

//   var card_types = [
//     {
//       name: 'amex',
//       pattern: /^3[47]/,
//       valid_length: [15]
//     }, {
//       name: 'diners_club_carte_blanche',
//       pattern: /^30[0-5]/,
//       valid_length: [14]
//     }, {
//       name: 'diners_club_international',
//       pattern: /^36/,
//       valid_length: [14]
//     }, {
//       name: 'jcb',
//       pattern: /^35(2[89]|[3-8][0-9])/,
//       valid_length: [16]
//     }, {
//       name: 'laser',
//       pattern: /^(6304|670[69]|6771)/,
//       valid_length: [16, 17, 18, 19]
//     }, {
//       name: 'visa_electron',
//       pattern: /^(4026|417500|4508|4844|491(3|7))/,
//       valid_length: [16]
//     }, {
//       name: 'visa',
//       pattern: /^4/,
//       valid_length: [16]
//     }, {
//       name: 'mastercard',
//       pattern: /^5[1-5]/,
//       valid_length: [16]
//     }, {
//       name: 'maestro',
//       pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
//       valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
//     }, {
//       name: 'discover',
//       pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
//       valid_length: [16]
//     }
//   ];

//   //test the number against each of the above card types and regular expressions
//   for (var i = 0; i< card_types.length; i++){
//     if (number.match(card_types[i].pattern)){
//       //if a match is found add the card type as a class
//       e.target.previousElementSibling.className = 'card-type '+card_types[i].name;
//     }
//   }
// }

// $cc.expiry = function(e){
//   if (e.key != 'Backspace'){
//     var number = String(this.value);

//     //remove all non-number character from the value
//     var cleanNumber = '';
//     for (var i = 0; i<number.length; i++){
//       if (i == 1 && number.charAt(i) == '/'){
//         cleanNumber = 0 + number.charAt(0);
//       }
//       if (/^[0-9]+$/.test(number.charAt(i))){
//         cleanNumber += number.charAt(i);
//       }
//     }

//     var formattedMonth = ''
//     for (var i = 0; i<cleanNumber.length; i++){
//       if (/^[0-9]+$/.test(cleanNumber.charAt(i))){
//         //if the number is greater than 1 append a zero to force a 2 digit month
//         if (i == 0 && cleanNumber.charAt(i) > 1){
//           formattedMonth += 0;
//           formattedMonth += cleanNumber.charAt(i);
//           formattedMonth += '/';
//         }
//         //add a '/' after the second number
//         else if (i == 1){
//           formattedMonth += cleanNumber.charAt(i);
//           formattedMonth += '/';
//         }
//         //force a 4 digit year
//         else if (i == 2 && cleanNumber.charAt(i) <2){
//           formattedMonth += '20' + cleanNumber.charAt(i);
//         }else{
//           formattedMonth += cleanNumber.charAt(i);
//         }

//       }
//     }
//     this.value = formattedMonth;
//   }
// }
