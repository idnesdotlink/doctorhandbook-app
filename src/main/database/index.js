import Dexie from 'dexie'
import DbStores from '@database/stores'

const DbName = 'com.doctorhandbook.app'
const DbVersion = 1

let _dexie

const createDexie = async function () {
  _dexie = new Dexie(DbName)
  _dexie.version(DbVersion).stores(DbStores)
  let db
  try {
    db = await _dexie.open()
  } catch (error) {
    console.log(error)
  }
  return db
}

const database = {
  async install (Vue) {
    let db = await createDexie()
    db.on('ready', function callback () {
      console.log('ready')
    })
    db.on('populate', function callback () {
      console.log('populate')
    })
    Vue.prototype.$db = {
      db,
      clearDB () {
        try {
          db.delete()
        } catch (error) {
          console.log(error)
        }
      },
      info () {
      }
    }
  }
}

export default database
