class User {
  constructor(userName) {
    this.userName = userName;
  }
  getUsername() {
    return this.userName;
  }

  setUsername(username) {
    this.userName = username;
  }
}

class ChatUser extends User {
  constructor(userName, warning) {
    super(userName);
    this.userName = userName;
    this.warning = warning = 0;
  }

  giveWarning() {
    this.warning += 1;
  }

  getWarningCount() {
    return console.log(this.warning);
  }
}

L2 = new ChatUser("Leonardo");
L2.giveWarning();
L2.getWarningCount();
