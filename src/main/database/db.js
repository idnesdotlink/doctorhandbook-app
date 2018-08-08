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

const testing = function () {
  console.log('ok')
}

const install = function () {
  status()
  dexie = new Dexie(DbName)
  dexie.version(DbVersion).stores(DbStores)
  // return dexie
  console.log(DbName)
  console.log(DbStores)
  console.log(DbVersion)
  console.log(dexie)
}

const deleteDB = function () {
  Dexie.delete(DbVersion)
  Dexie.close()
}

const status = async function () {
  let dexie = new Dexie(DbName)
  dexie.version(DbVersion).stores(DbStores)
  let db
  try {
    db = await dexie.open()
  } catch (error) {
    console.log(error)
  }
  console.log(db)
  /* .then(function (db) {
    console.log('Found database: ' + db.name)
    console.log('Database version: ' + db.verno)
    db.tables.forEach(function (table) {
      console.log('Found table: ' + table.name)
      console.log('Table Schema: ' +
            JSON.stringify(table.schema, null, 4))
    })
  }).catch('NoSuchDatabaseError', function (e) {
    // Database with that name did not exist
    console.error('Database not found')
  }).catch(function (e) {
    console.error('Oh uh: ' + e)
  }) */
}

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

// dexie.on('versionchange', VersionChange)

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
  testing,
  VersionChange,
  install,
  deleteDB,
  SaveOptions,
  SaveOptionsBulk,
  getTableNames
}
