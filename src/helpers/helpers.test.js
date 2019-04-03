import { tasksHoursPartitioning } from "helpers";

const testTasks = [
  {
    id: 1,
    name: "task 1",
    startTime: new Date().setHours(4, 30, 5),
    endTime: new Date().setHours(6, 30, 5),
    spendTime: new Date().setHours(6, 30, 5) - new Date().setHours(4, 30, 5)
  },
  {
    id: 2,
    name: "task 2",
    startTime: new Date().setHours(10, 0, 10),
    endTime: new Date().setHours(10, 40, 15),
    spendTime: new Date().setHours(10, 40, 15) - new Date().setHours(10, 0, 10)
  },
  {
    id: 3,
    name: "task 3",
    startTime: new Date().setHours(11, 0, 0),
    endTime: new Date().setHours(12, 0, 0),
    spendTime: new Date().setHours(12, 0, 0) - new Date().setHours(11, 0, 0)
  },
  {
    id: 4,
    name: "task 4",
    startTime: new Date().setHours(14, 45, 30),
    endTime: new Date().setHours(17, 22, 14),
    spendTime: new Date().setHours(17, 22, 14) - new Date().setHours(14, 45, 30)
  },
  {
    id: 5,
    name: "task 5",
    startTime: new Date().setHours(19, 12, 0),
    endTime: new Date().setHours(21, 45, 31),
    spendTime: new Date().setHours(21, 45, 31) - new Date().setHours(19, 13, 0)
  }
];

const expectedTaskPartitioning = [
  { hour: 0, occupied: 0 },
  { hour: 1, occupied: 0 },
  { hour: 2, occupied: 0 },
  { hour: 3, occupied: 0 },
  { hour: 4, occupied: 30 },
  { hour: 5, occupied: 60 },
  { hour: 6, occupied: 30 },
  { hour: 7, occupied: 0 },
  { hour: 8, occupied: 0 },
  { hour: 9, occupied: 0 },
  { hour: 10, occupied: 40 },
  { hour: 11, occupied: 60 },
  { hour: 12, occupied: 0 },
  { hour: 13, occupied: 0 },
  { hour: 14, occupied: 15 },
  { hour: 15, occupied: 60 },
  { hour: 16, occupied: 60 },
  { hour: 17, occupied: 22 },
  { hour: 18, occupied: 0 },
  { hour: 19, occupied: 48 },
  { hour: 20, occupied: 60 },
  { hour: 21, occupied: 45 },
  { hour: 22, occupied: 0 },
  { hour: 23, occupied: 0 }
];

test("testing tasks partitioning by hours", () => {
  expect(tasksHoursPartitioning(testTasks)).toEqual(expectedTaskPartitioning);
});
