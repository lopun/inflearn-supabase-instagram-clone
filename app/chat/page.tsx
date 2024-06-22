import ChatPeopleList from "components/chat/ChatPeopleList";
import ChatScreen from "components/chat/ChatScreen";
import Person from "components/chat/Person";

export default function ChatPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ChatPeopleList />
      <ChatScreen />
    </div>
  );
}
