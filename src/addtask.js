let id = 0;
class Task {
  constructor(title, priority, date) {
    this.title = title;
    this.priority = priority;
    this.date = date;
    this.id = id;
    this.status = 'pending';
    id += 1;
  };
};
export default Task;
