import store from '@store'
const CordovaService = {
  install () {
    document.addEventListener(
      'deviceready',
      function () {
        console.log('device ready')
        store.commit('SETDEVICEREADY')
      },
      false
    )
  }
}

export default CordovaService
