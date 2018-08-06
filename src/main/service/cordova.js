import store from '@store'
const CordovaService = {
  install () {
    document.addEventListener(
      'deviceready',
      function () {
        console.log('device ready')
        store.commit('SETDEVICEREADY')
        var notificationOpenedCallback = function (jsonData) {
          console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData))
        }

        window.plugins.OneSignal
          .startInit('a5727d78-91ee-4b89-9296-b9f0e8e50545')
          .handleNotificationOpened(notificationOpenedCallback)
          .endInit()
      },
      false
    )
  }
}

export default CordovaService
