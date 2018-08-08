import Dexie from 'dexie'
import DbStores from '@database/stores'
import axios from 'axios'
import { forEach } from 'lodash'
import { initStoragePersistence, showEstimatedQuota } from '@database/helper'

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
    db.on('ready', async function callback () {
      console.log('op')
      let t
      t = await axios.get('http://localhost:3000/drugs.json')
      let x = []
      let s = 1
      forEach(t.data.mims, async i => {
        x.push({
          id: s++,
          title: i.name
        })
        // await db.drugs.add({ title: i.name })
      })
      console.log(x)
      await db.drugs.bulkAdd(x)
      // await db.drugs.add({ title: 'ok' })
    })
    db.on('populate', async function callback () {
      console.log('op')
      let t
      t = await axios.get('http://localhost:3000/drugs.json')
      forEach(t.data.mims, async i => {
        await db.drugs.add({ title: i.name })
      })
    })
    Vue.prototype.$db = {
      db,
      async getTest () {
        let gt = await axios.get('http://localhost:3000/drugs.json')
        // console.log(gt.data.mims)
        /* forEach(gt.data.mims, i => {
          console.log(i.name)
        }) */
        return gt.data.mims
      },
      clearDB () {
        try {
          window.indexedDB.deleteDatabase('__dbnames')
          window.indexedDB.deleteDatabase(DbName)
          db.close()
        } catch (error) {
          console.log(error)
        }
      },
      initStoragePersistence,
      showEstimatedQuota,
      info () {
      }
    }
  }
}

export default database
