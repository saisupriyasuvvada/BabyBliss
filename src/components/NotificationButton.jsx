import React from 'react'

const NotificationButton = () => {
  const notify = () => {
    if (!('Notification' in window)) {
      alert('This browser does not support notifications.')
    } else if (Notification.permission === 'granted') {
      new Notification('Hello from BabyBliss!')
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Hello from BabyBliss!')
        }
      })
    }
  }

  return <button onClick={notify}>Send Notification</button>
}

export default NotificationButton
