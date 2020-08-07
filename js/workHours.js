// create work hours array
// show saved task from local storage if available
let workHours = [
  {
    time: moment(9, "HH"),
    task: !localStorage.getItem(`9AM task`) ? '' : localStorage.getItem(`9AM task`)
  },
  {
    time: moment(10, "HH"),
    task: !localStorage.getItem(`10AM task`) ? '' : localStorage.getItem(`10AM task`)
  },
  {
    time: moment(11, "HH"),
    task: !localStorage.getItem(`11AM task`) ? '' : localStorage.getItem(`11AM task`)
  },
  {
    time: moment(12, "HH"),
    task: !localStorage.getItem(`12AM task`) ? '' : localStorage.getItem(`12AM task`)
  },
  {
    time: moment(13, "HH"),
    task: !localStorage.getItem(`1PM task`) ? '' : localStorage.getItem(`1PM task`)
  },
  {
    time: moment(14, "HH"),
    task: !localStorage.getItem(`2PM task`) ? '' : localStorage.getItem(`2PM task`)
  },
  {
    time: moment(15, "HH"),
    task: !localStorage.getItem(`3PM task`) ? '' : localStorage.getItem(`3PM task`)
  },
  {
    time: moment(16, "HH"),
    task: !localStorage.getItem(`4PM task`) ? '' : localStorage.getItem(`4PM task`)
  },
  {
    time: moment(17, "HH"),
    task: !localStorage.getItem(`5PM task`) ? '' : localStorage.getItem(`5PM task`)
  }
];