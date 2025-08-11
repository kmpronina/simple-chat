"use client";

import { Chat, Inputs, SignUp } from "@/components";
import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

export default function Home() {
  const user = useRef(null);

  const [chat, setChat] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("receive_message", (message) => {
      if (!user.current) return;
      setChat((prev) => [...prev, message]);
    });

    socket.on("new_user", (newUser) => {
      if (!user.current) return;
      setChat((prev) => [
        ...prev,
        { content: `${newUser} joined`, type: "server" },
      ]);
    });

    socket.on("user_typing", (data) => {
      {
        if (!user.current) return;

        setTypingUsers((prev) => {
          if (typingUsers.includes(data.user) && data.typing === true)
            return prev;
          if (data.typing === false) {
            return prev.filter((userItem) => userItem !== data.user);
          } else {
            return [...prev, data.user];
          }
        });
      }
    });

    return () => {
      socket.off("receive_message");
      socket.off("new_user");
      socket.off("user_typing");
    };
  });

  return (
    <main className="h-screen max-h-screen max-w-screen mx-auto md:container md:p-20 md:pt-4">
      {user.current ? (
        <>
          <Chat chat={chat} user={user.current} typingUsers={typingUsers} />
          <Inputs setChat={setChat} user={user.current} socket={socket} />
        </>
      ) : (
        <SignUp user={user} socket={socket} input={input} setInput={setInput} />
      )}
    </main>
  );
}
