// import store from '@store'
// const PushNotification = window.PushNotification
const CordovaService = {
  install () {
    let push = PushNotification.init({
      android: {
      }
    })

    push.on('registration', function (data) {
      console.log(data.registrationId)
      console.log(data.registrationType)
      /* document.getElementById('registration').appendChild(document.createTextNode(data.registrationId)) */
    })

    push.on('notification', function (data) {
      /* let ul = document.getElementById('pushList')
      let li = document.createElement('li')
      li.appendChild(document.createTextNode(data.message))
      ul.appendChild(li) */
      console.log(data.message)
      console.log(data.title)
      console.log(data.count)
      console.log(data.sound)
      console.log(data.image)
      console.log(data.additionalData)
    })
  }
}

export default CordovaService
