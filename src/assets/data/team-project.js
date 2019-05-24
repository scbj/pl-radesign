const avatars = [ 'boy-1', 'boy', 'girl-1', 'man-1', 'man-2', 'man-3', 'man-4', 'man' ]

function randomAvatar () {
  const random = Math.random() * avatars.length
  const fileName = avatars[Math.floor(random)]
  return require(`@/assets/images/avatars/${fileName}.png`)
}

export const tasks = [
  {
    name: 'Short Video',
    owner: {
      avatar: randomAvatar()
    },
    color: { r: 255, g: 57, b: 116 },
    dayCount: 10,
    dayStart: 2
  },
  {
    name: 'Mobile Page',
    owner: {
      avatar: randomAvatar()
    },
    color: { r: 65, g: 81, b: 245 },
    dayCount: 26,
    dayStart: 5
  },
  {
    name: 'Web Design',
    owner: {
      avatar: randomAvatar()
    },
    color: { r: 255, g: 119, b: 31 },
    dayCount: 12,
    dayStart: 3
  },
  {
    name: 'Taxi-hailing',
    owner: {
      avatar: randomAvatar()
    },
    color: { r: 12, g: 175, b: 51 },
    dayCount: 8,
    dayStart: 9
  },
  {
    name: 'Illustrations',
    owner: {
      avatar: randomAvatar()
    },
    color: { r: 5, g: 171, b: 252 },
    dayCount: 10,
    dayStart: 14
  }
]
