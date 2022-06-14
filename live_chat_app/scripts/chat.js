//to add new chat documents
//setting up a real-time listner to get new chats
//updating the username
//updating the room
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, 'chats');
const querySnapshot = getDocs(colRef);
class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = querySnapshot;
    }
}
const chatroom = new Chatroom('gaming' , 'ashu');
console.log(chatroom);