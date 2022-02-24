class NotesStore {
  constructor(name, state, completedArr, activeArr, othersArr) {
    this.name = name;
    this.state = state;
    this.completedArr = completedArr = [];
    this.activeArr = activeArr = [];
    this.othersArr = othersArr = [];
  }

  addNote(state, name) {
    if (name == "") {
      throw new Error("Name cannot be empty");
    } else if (
      state !== "completed" &&
      state !== "others" &&
      state !== "active"
    ) {
      throw new Error(`Invalid state${state}`);
    } else {
      this.name = name;
      this.state = state;
      if (this.state == "active") {
        this.activeArr.push(this.name);
      } else if (this.state == "completed") {
        this.completedArr.push(this.name);
      } else if (this.state == "others") {
        this.othersArr.push(this.name);
      }
    }
  }

  getNotes(state) {
    if (state !== "completed" && state !== "others" && state !== "active") {
      throw new Error(`Invalid state${state}`);
    } else if (this.state == "active") {
      return console.log(this.activeArr);
    } else if (this.state == "completed") {
      return console.log(this.completedArr);
    } else if (this.state == "others") {
      return console.log(this.othersArr);
    }
  }
}
l = new NotesStore();

l.addNote("completed", "drinkTea");
l.addNote("completed", "study");
l.getNotes("completed");
