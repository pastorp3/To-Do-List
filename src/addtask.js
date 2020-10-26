class Task {
  constructor(title, priority, date, description) {
    this.title = title;
    this.priority = priority;
    this.date = date;
    this.description = description;
    this.id = title;
    this.status = 'pending';
  }
}
export default Task;
