import Dexie from 'dexie'
const db = new Dexie('MyDatabase')

// Declare tables, IDs and indexes
db.version(1).stores({
  friends: '++id, name, age'
})

const s = async function () {
  await db.friends.add({
    name: 'Camilla',
    age: 25
    // street: 'East 13:th Street'
    // picture: await getBlob('camilla.png')
  })
}

export default s
