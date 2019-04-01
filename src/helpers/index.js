export const formatTime = (time, hrsInLocal) => {
  const sec = time / 1000;
  const cutSec = Math.floor(sec % 60);
  const min = Math.floor((sec % 3600) / 60);
  const hrs = Math.floor((sec / 3600) % 24);
  const hrsLoc = Math.floor(
    (hrs + -(new Date().getTimezoneOffset() / 60)) % 24
  );

  // prettier-ignore
  return hrsInLocal ?
    `${hrsLoc < 10 ? "0" : ""}${hrsLoc}:${min < 10 ? "0" : ""}${min}:${cutSec < 10 ? "0" : ""}${cutSec}` :
    `${hrs < 10 ? "0" : ""}${hrs}:${min < 10 ? "0" : ""}${min}:${cutSec < 10 ? "0" : ""}${cutSec}`;
};
