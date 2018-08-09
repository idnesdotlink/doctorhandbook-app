import Dexie from 'dexie'
import axios from 'axios'
import DbStores from '@database/stores'
import { forEach } from 'lodash'
const DbName = 'com.doctorhandbook.app'
const DbVersion = 1
/*
import { initStoragePersistence, showEstimatedQuota } from '@database/helper'

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
} */
const install = function (Vue) {
  const _dexie = new Dexie(DbName)
  _dexie.version(DbVersion).stores(DbStores)
  _dexie.on('ready', async function () {
    let exists = await _dexie.drugs.count()
    if (exists) return
    let drugs
    drugs = await axios.get('http://localhost:3000/drugs.json')
    let items = []
    let counter = 1
    forEach(drugs.data.mims, async item => {
      items.push({
        id: counter++,
        title: item.name
      })
    })
    await _dexie.drugs.bulkAdd(items)
  })
  Vue.mixin({
    beforeCreate () {
      this.$_db = _dexie
    }
  })
}
const database = {
  install
  /* async install (Vue) {
    let db = await createDexie()
    db.on('ready', async function callback () {
      let count = await db.drugs.count()
      if (count > 0) return
      let t
      t = await axios.get('http://localhost:3000/drugs.json')
      let x = []
      let s = 1
      forEach(t.data.mims, async i => {
        x.push({
          id: s++,
          title: i.name
        })
      })
      console.log(x)
      await db.drugs.bulkAdd(x)
    })

    Vue.mixin({
      beforeCreate () {
        this.$db = {
          db
        }
      }
    })

    Vue.prototype.$db = {
      db,
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
  } */
}

export default database
