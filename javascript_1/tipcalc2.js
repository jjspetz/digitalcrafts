// Tip calculator in JS

function tipAmount(bill, service) {
    if (service.toLowerCase() == 'good') {
      return bill * .2;
    }
    else if (service.toLowerCase() == 'fair') {
      return bill * .15;
    }
    else if (service.toLowerCase() == 'bad') {
      return bill * .1;
    } else {
      return "Enter proper service type."
    }
  }
 function totalAmount(bill, service) {
   if (service.toLowerCase() == 'good') {
     return bill * 1.2;
   }
   else if (service.toLowerCase() == 'fair') {
     return bill * 1.15;
   }
   else if (service.toLowerCase() == 'bad') {
     return bill * 1.1;
   } else {
     return "Enter proper service type."
   }
 }
