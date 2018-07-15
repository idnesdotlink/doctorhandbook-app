import Dexie from 'dexie'
// import { map } from 'lodash'
// import axios from 'axios'
// import { forEach } from 'lodash'

const DbName = 'com.doctorhandbook.app'
const DbVersion = 1
const DbStores = {
  drugs: 'id, title',
  deseases: 'id, title',
  options: 'id, title, content'
}
let dexie
dexie = new Dexie(DbName)
dexie.version(DbVersion).stores(DbStores)

const SaveOptions = async function (title, content) {
  console.log('test')
  let db
  try {
    db = await dexie.open()
    await db.options.add({ id: 1, title: title, content: content })
    db.options.count()
    db.close()
  } catch (error) {
    console.log(error)
  }
}

const SaveOptionsBulk = async function () {
  console.log('test')
  let db = await dexie.open()
  await db.options.add({ id: 1, title: 'Name', content: 'Doctor Handbook' })
  db.options.count()
  db.close()
}

const Confirm = function () {

}

const VersionChange = function () {
  if (Confirm()) {
    // Refresh current webapp so that it starts working with newer DB schema.
    window.location.reload()
  } else {
    // Will let user finish its work in this window and
    // block the other window from upgrading.
    return false
  }
}

const getTableNames = function () {
  /* return map(dexie.tables, table => {
    return table.name
  }) */
}

dexie.on('versionchange', VersionChange)

/* const saveIndex = async function () {
  let response
  response = await axios.get('http://localhost:3000/dnd/index.json')
  let { data } = response
  forEach(data, async (item) => {
    try {
      await db.drugs.add(item)
    } catch (e) {
      console.log(e)
    }
  })
} */

export {
  SaveOptions,
  SaveOptionsBulk,
  getTableNames
}
