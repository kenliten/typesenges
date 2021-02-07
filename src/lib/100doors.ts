import { Door } from './door';

export function doors(): Door[] {
  const Doors: Door[] = [];

  for (let i = 1; i <= 100; i++) {
    Doors.push({id: i, open: false});
  }

  for (let secuence of Doors) {
    for (let door of Doors) {
      if (door.id % secuence.id == 0) {
        door.open = !door.open;
      }
    }
  }

  return Doors.filter(a => a.open);
}
