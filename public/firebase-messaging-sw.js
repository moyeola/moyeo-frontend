/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");
const config = {
    apiKey: "AIzaSyDkwFQyYbn9MCtKCmAp6QmQFz7UofOx6WI",
    authDomain: "imap-push-server.firebaseapp.com",
    databaseURL: "https://imap-push-server.firebaseio.com",
    projectId: "imap-push-server",
    storageBucket: "imap-push-server.appspot.com",
    messagingSenderId: "820317951171",
};
firebase.initializeApp(config);

self.addEventListener("install", function (e) {
    console.log("fcm sw install");
    self.skipWaiting();
});

self.addEventListener("activate", function (e) {
    console.log("fcm sw activate");
});

self.addEventListener("push", function (e) {
    if (!e.data.json()) return;

    const resultData = e.data.json().notification;
    const notificationTitle = resultData.title;
    const notificationOptions = {
        body: resultData.body,
        icon: resultData.image,
        tag: resultData.tag,
        ...resultData,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
    const action = event.notification.data.action;
    const url = action.substring(action.indexOf(":") + 1);
    event.notification.close();
    event.waitUntil(clients.openWindow(url));
});
