import ChatPeopleList from "components/chat/ChatPeopleList";
import ChatScreen from "components/chat/ChatScreen";
import Person from "components/chat/Person";
import { createServerSupabaseClient } from "utils/supabase/server";

export default async function ChatPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ChatPeopleList loggedInUser={session?.user} />
      <ChatScreen />
    </div>
  );
}
