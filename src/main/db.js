import Dexie from 'dexie'
import axios from 'axios'
import { forEach } from 'lodash'
const db = new Dexie('MyDatabase')

db.version(10).stores({
  drugs: 'id, title'
})

const saveIndex = async function () {
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
}

export default saveIndex
