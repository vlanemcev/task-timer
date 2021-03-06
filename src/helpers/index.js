export const formatTime = (time, hrsInLocal, showMSec = false) => {
  const cutMsec = Math.floor((time % 1000) / 100);
  const sec = time / 1000;
  const cutSec = Math.floor(sec % 60);
  const min = Math.floor((sec % 3600) / 60);
  const hrs = Math.floor((sec / 3600) % 24);
  const hrsLoc = Math.floor(
    (hrs + -(new Date().getTimezoneOffset() / 60)) % 24
  );

  // prettier-ignore
  if (hrsInLocal) {
    return showMSec
      ? `${hrsLoc < 10 ? "0" : ""}${hrsLoc}:${min < 10 ? "0" : ""}${min}:${cutSec < 10 ? "0" : ""}${cutSec}:${cutMsec}`
      : `${hrsLoc < 10 ? "0" : ""}${hrsLoc}:${min < 10 ? "0" : ""}${min}:${cutSec < 10 ? "0" : ""}${cutSec}`;
  }

  // prettier-ignore
  return showMSec
    ? `${hrs < 10 ? "0" : ""}${hrs}:${min < 10 ? "0" : ""}${min}:${cutSec < 10 ? "0" : ""}${cutSec}:${cutMsec}`
    : `${hrs < 10 ? "0" : ""}${hrs}:${min < 10 ? "0" : ""}${min}:${cutSec < 10 ? "0" : ""}${cutSec}`;
};

export const tasksHoursPartitioning = (tasks = []) => {
  let tasksPartitioningStructure = [
    { hour: 0, occupied: 0 },
    { hour: 1, occupied: 0 },
    { hour: 2, occupied: 0 },
    { hour: 3, occupied: 0 },
    { hour: 4, occupied: 0 },
    { hour: 5, occupied: 0 },
    { hour: 6, occupied: 0 },
    { hour: 7, occupied: 0 },
    { hour: 8, occupied: 0 },
    { hour: 9, occupied: 0 },
    { hour: 10, occupied: 0 },
    { hour: 11, occupied: 0 },
    { hour: 12, occupied: 0 },
    { hour: 13, occupied: 0 },
    { hour: 14, occupied: 0 },
    { hour: 15, occupied: 0 },
    { hour: 16, occupied: 0 },
    { hour: 17, occupied: 0 },
    { hour: 18, occupied: 0 },
    { hour: 19, occupied: 0 },
    { hour: 20, occupied: 0 },
    { hour: 21, occupied: 0 },
    { hour: 22, occupied: 0 },
    { hour: 23, occupied: 0 }
  ];

  tasks.forEach((task) => {
    const taskStartDate = new Date(task.startTime);
    const taskStartHours = taskStartDate.getHours();
    const taskEndDate = new Date(task.endTime);
    const taskEndHours = taskEndDate.getHours();
    const timeDifferenceHours = taskEndHours - taskStartHours;

    if (timeDifferenceHours === 0) {
      let partitioningElem = tasksPartitioningStructure.find(
        (item) => item.hour === taskStartHours
      );

      partitioningElem.occupied =
        partitioningElem.occupied + Math.floor(task.spendTime / 1000 / 60);
    } else {
      for (let i = taskStartHours; i <= taskEndHours; i++) {
        let partitioningElem = tasksPartitioningStructure.find(
          (item) => item.hour === i
        );

        switch (i) {
          case taskStartHours:
            partitioningElem.occupied =
              partitioningElem.occupied + (60 - taskStartDate.getMinutes());
            break;

          case taskEndHours:
            partitioningElem.occupied =
              partitioningElem.occupied + taskEndDate.getMinutes();
            break;

          default:
            partitioningElem.occupied = 60;
            break;
        }
      }
    }
  });

  return tasksPartitioningStructure;
};

export const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateTasks = () => {
  let generatedTasksArray = [];
  let timeIntervals = [];

  const numberOfTasks = getRandomInRange(10, 15);
  const randomStartHour = getRandomInRange(0, 3);
  const randomStartMin = getRandomInRange(1, 59);
  const randomStartSec = getRandomInRange(1, 59);

  let startTime = new Date().setHours(
    randomStartHour,
    randomStartMin,
    randomStartSec
  );

  while (timeIntervals.length < numberOfTasks) {
    let randomSpendTimeInMin = getRandomInRange(10, 90);
    let endTime = startTime + randomSpendTimeInMin * 60 * 1000;

    let pauseBetweenTasks = getRandomInRange(5, 15);

    let nextStartTime = endTime + pauseBetweenTasks * 60 * 1000;

    if (nextStartTime < new Date().setHours(23, 60, 0)) {
      timeIntervals.push({ startTime, endTime });
      startTime = nextStartTime;
    }
  }

  timeIntervals.forEach((interval, i) => {
    generatedTasksArray.push({
      id: i + 1,
      name: `generated task ${i + 1}`,
      startTime: interval.startTime,
      endTime: interval.endTime,
      spendTime: interval.endTime - interval.startTime
    });
  });

  return generatedTasksArray;
};
