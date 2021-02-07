import { Door } from './door';

export function doors(): Door[] {
  const Doors: Door[] = [];
  Doors.fill({id: i, open: false}, 0, 99);

  for (let secuence of Doors) {
    for (let door of Doors) {
      if (door.id % secuence.id == 0) {
        door.open = !door.open;
      }
    }
  }

  return Doors.filter(a => a.open);
}
