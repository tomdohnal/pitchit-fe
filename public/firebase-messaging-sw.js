importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')

firebase.initializeApp({
    messagingSenderId: "251016832571"
})

const messaging = firebase.messaging();
