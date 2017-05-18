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

// edit input here
tipAmount(25.40, 'fair');
