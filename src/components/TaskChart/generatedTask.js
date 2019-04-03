/*
  generateTasks = () => {
    let generatedTaskArray = [];
    let numberOfTasks = getRandomInRange(10, 15);
    let timeIntervals = [];

    let availableStartHours = [];
    while (availableStartHours.length < numberOfTasks) {
      let randomNumber = getRandomInRange(0, 23);
      let found = false;
      for (let i = 0; i < availableStartHours.length; i++) {
        if (availableStartHours[i] === randomNumber) {
          found = true;
          break;
        }
      }
      if (!found) {
        availableStartHours[availableStartHours.length] = randomNumber;
      }
    }

    availableStartHours.sort((a, b) => a - b);

    while (timeIntervals.length < numberOfTasks) {
      let randomSpendTime = getRandomInRange(10, 90);
      if (randomSpendTime > 60)
    }

    for (let i = 0; i < numberOfTasks; i++) {}

    // let randomSpendHours = Math.floor(randomSpendTime / 60);
    let randomSpendMinutes =
      randomSpendTime > 60 ? randomSpendTime - 60 : randomSpendTime;

    {
      let newTaskItem = {
        id: Date.now(),
        name: "generated task",
        startTime: startTaskDate,
        endTime: endTaskDate,
        spendTime: endTaskDate - startTaskDate
      };

      generatedTaskArray.push(newTaskItem);
    }

    return generatedTaskArray;
  };
  */

generateTasks = () => {
  let generatedTaskArray = [];
  let numberOfTasks = getRandomInRange(10, 15);

  let initialTasksStartDate = new Date().setHours(
    getRandomInRange(0, 23),
    getRandomInRange(0, 59)
  );

  let initialTaskEndDate =
    initialTasksStartDate + getRandomInRange(10, 90) * 60 * 1000;

  for (let i = 0; i < numberOfTasks; i++) {
    let startTaskDate;
    let endTaskDate;

    if (i === 0) {
      startTaskDate = initialTasksStartDate;
      endTaskDate = initialTaskEndDate;
    } else {
      startTaskDate = new Date().setHours(
        getRandomInRange(new Date(initialTaskEndDate).getHours(), 23),
        getRandomInRange(new Date(initialTaskEndDate + 60000).getMinutes(), 59)
      );

      endTaskDate = startTaskDate + getRandomInRange(10, 90) * 60 * 1000;
    }

    initialTaskEndDate = endTaskDate;

    let newTaskItem = {
      id: Date.now() + 1,
      name: "generated task",
      startTime: startTaskDate,
      endTime: endTaskDate,
      spendTime: endTaskDate - startTaskDate
    };

    generatedTaskArray.push(newTaskItem);
  }

  return generatedTaskArray;
};

generateTasks2 = () => {
  let generatedTaskArray = [];
  let numberOfTasks = getRandomInRange(10, 15);
  let occupiedTimeIntervals = [];

  for (let i = 0; i < numberOfTasks; i++) {
    let startTaskDate;
    let endTaskDate;

    while (true) {
      let needToBreakCycle = false;

      startTaskDate = new Date().setHours(
        getRandomInRange(0, 23),
        getRandomInRange(0, 59)
      );

      occupiedTimeIntervals.forEach((interval, i, array) => {
        if (startTaskDate > interval.endTime) {
          if (array[i + 1]) {
            if (startTaskDate < array[i + 1].startTime) {
              needToBreakCycle = true;
            }
          }
        } else if (startTaskDate < interval.startTime) {
          if (array[i - 1]) {
            if (startTaskDate < array[i - 1].startTime) {
              needToBreakCycle = true;
            }
          }
        }
      });

      if (needToBreakCycle) {
        break;
      }
    }

    while (true) {
      let needToBreakCycle = false;

      let randomSpendTime = getRandomInRange(10, 90);
      let randomSpendHours = Math.floor(randomSpendTime / 60);
      let randomSpendMinutes =
        randomSpendTime > 60 ? randomSpendTime - 60 : randomSpendTime;

      endTaskDate =
        startTaskDate +
        new Date().setHours(randomSpendHours, randomSpendMinutes);

      occupiedTimeIntervals.forEach((interval, i, array) => {
        if (array[i + 1]) {
          if (endTaskDate < array[i + 1].startTime) {
            needToBreakCycle = true;
          }
        }

        needToBreakCycle = true;
      });

      if (needToBreakCycle) {
        break;
      }
    }

    occupiedTimeIntervals.push({
      startTime: startTaskDate,
      endTime: endTaskDate
    });

    let newTaskItem = {
      id: Date.now(),
      name: "generated task",
      startTime: startTaskDate,
      endTime: endTaskDate,
      spendTime: endTaskDate - startTaskDate
    };

    generatedTaskArray.push(newTaskItem);
  }

  return generatedTaskArray;
};
