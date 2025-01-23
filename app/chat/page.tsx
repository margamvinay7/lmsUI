"use client";

import ChatWindow from "@/components/chatWindow";
import Sidebar from "@/components/chatSidebar";
import { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:3000");

export default function Chat() {
  const [selectedUser, setSelectedUser] = useState({});

  const handleUserSelect = (user: any) => {
    setSelectedUser(user);
  };
  // useEffect(() => {
  //   const user: string | null = localStorage.getItem("user");
  //   console.log("user", user);
  //   if (user) {
  //     socket.on("connect", () => {
  //       console.log("connection");
  //     });
  //     socket.emit("setUserId", JSON.parse(user)?.id);
  //   }
  // }, []);
  return (
    <div className="flex max-h-[calc(100vh-40px)] border rounded-lg ">
      <Sidebar onUserSelect={handleUserSelect} />
      <ChatWindow selectedUser={selectedUser} />
    </div>
  );
}
