import "./ChetMassage.css";
import { useContext } from "react";
import { AuthContext } from "../../../Context/firebase-auth";

function ChatMessage(props) {
  const { user, auth } = useContext(AuthContext);

  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}

export default ChatMessage;
