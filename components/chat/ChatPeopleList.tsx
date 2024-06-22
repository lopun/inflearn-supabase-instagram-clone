"use client";

import Person from "./Person";
import { useRecoilState } from "recoil";
import { selectedIndexState } from "utils/recoil/atoms";

export default function ChatPeopleList() {
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedIndexState);

  return (
    <div className="h-screen min-w-60 flex flex-col bg-gray-50">
      <Person
        onClick={() => setSelectedIndex(0)}
        index={0}
        isActive={selectedIndex === 0}
        name={"Lopun"}
        onChatScreen={false}
        onlineAt={new Date().toISOString()}
        userId={"iasdonfiodasn"}
      />
      <Person
        onClick={() => setSelectedIndex(1)}
        index={1}
        isActive={selectedIndex === 1}
        name={"홍길동"}
        onChatScreen={false}
        onlineAt={new Date().toISOString()}
        userId={"iasdonfiodasn"}
      />
    </div>
  );
}
