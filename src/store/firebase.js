import Firebase from 'firebase'

export default Firebase
  .initializeApp({ databaseURL: 'https://hacker-news.firebaseio.com' })
  .database()
