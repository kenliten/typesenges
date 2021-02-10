import { Door } from '../interfaces/door'

export function doors (): Door[] {
  const Doors: Door[] = []

  for (let i = 1; i < 101; i++) {
    Doors.push({ id: i, open: false })
  }

  for (const secuence of Doors) {
    for (const door of Doors) {
      if (door.id % secuence.id === 0) {
        door.open = !door.open
      }
    }
  }

  return Doors.filter(a => a.open)
}
