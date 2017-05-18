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
function splitAmount(bill, service, ways) {
    if (ways >= 1) {
      if (service.toLowerCase() == 'good') {
        return bill * 1.2 / ways;
      }
      else if (service.toLowerCase() == 'fair') {
        return bill * 1.15 / ways;
      }
      else if (service.toLowerCase() == 'bad') {
        return bill * 1.1 / ways;
      } else {
        return "Enter proper service type."
      }
    } else {
      return "3rd argument must be a positive integer."
    }
}
