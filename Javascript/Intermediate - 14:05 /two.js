function Activity(amount) {
  Activity.prototype.amount = amount;

  Activity.prototype.setAmount = function(value) {
    if (value <= 0) {
      return false;
    } else {
      Activity.prototype.amount = value;
      return true;
    }
  };

  Activity.prototype.getAmount = function() {
    return Activity.prototype.amount;
  };
}

function Payment(amount, receiver) {
  //inherit from Activity
  Activity.call(this, amount);
  Payment.prototype = new Activity(amount);

  //take to params and assing to the object
  Payment.getAmount(amount) = amount;
  Payment.prototype.receiver = receiver;

  Payment.prototype.setReciever = function(value) {
    Payment.prototype.receiver = value;
  };

  Payment.prototype.getReceiver = function() {
    return Payment.prototype.receiver;
  };
}

function Refund(amount, sender) {
  Activity.call(this, amount);
  Refund.prototype = new Payment();

  Refund.prototype.sender = sender;
}
