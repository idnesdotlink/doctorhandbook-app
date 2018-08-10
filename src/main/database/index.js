import Dexie from 'dexie'
import axios from 'axios'
import DbStores from '@database/stores'
import { forEach } from 'lodash'
import { initStoragePersistence, showEstimatedQuota } from '@database/helper'
const DbName = 'com.doctorhandbook.app'
const DbVersion = 1

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
      this.$_db.helper = {
        showEstimatedQuota,
        initStoragePersistence
      }
    }
  })
}
const database = {
  install
}

export default database
