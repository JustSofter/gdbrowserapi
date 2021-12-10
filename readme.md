# GDBrowserAPI

This NPM gets info from the GD Colon's GD Browser API.

## Functions

**getProfile(user)**

With this function, you can get an users profile info.
```
const { getProfile } = require('gdbrowserapi')
GDBrowserAPI.getProfile("RobTop").then(res => {
    console.log(res)
})
```

Returns:

```
{
  username: 'RobTop',
  playerID: '16',
  accountID: '71',
  rank: 240313,
  stars: 42,
  diamonds: 23,
  coins: 1,
  userCoins: 1,
  demons: 0,
  ball: 17,
  ufo: 26,
  wave: 34,
  robot: 22,
  spider: 15,
  col1: 3,
  col2: 11,
  deathEffect: 3,
  glow: true
}
```

**getLevel(levelid)**

With this function, you can get an level's info.
```
const { getLevel } = require('gdbrowserapi')
GDBrowserAPI.getLevel("128").then(res => {
    console.log(res)
})
```

Returns:

```
{
  name: '1st level',
  id: '128',
  description: '(No description provided)',
  author: 'real storm',
  playerID: '30144023',
  accountID: '6338004',
  difficulty: 'Hard',
  downloads: 1208129,
  likes: 130684,
  disliked: false,
  length: 'Medium',
  stars: 0,
  orbs: 0,
  diamonds: 0,
  featured: false,
  epic: false,
  gameVersion: '2.1',
  editorTime: 0,
  totalEditorTime: 0,
  version: 1,
  copiedID: '128',
  twoPlayer: false,
  officialSong: 5,
  customSong: 0,
  coins: 0,
  verifiedCoins: false,
  starsRequested: 2,
  ldm: false,
  objects: 208,
  large: false,
  cp: 0,
  difficultyFace: 'hard',
  songName: 'Base After Base',
  songAuthor: 'DJVI',
  songSize: '0MB',
  songID: 'Level 5'
}
```