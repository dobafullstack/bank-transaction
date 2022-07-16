export default function GetNow() {
  const now = new Date();

  const date = ("0" + now.getDate()).slice(-2);
  const month = ("0" + now.getMonth()).slice(-2);
  const year = now.getFullYear();
  const hour = ("0" + now.getHours()).slice(-2);
  const minute = ("0" + now.getMinutes()).slice(-2);
  const second = ("0" + now.getSeconds()).slice(-2);

  return `${date}/${month}/${year} ${hour}:${minute}:${second}`;
}
