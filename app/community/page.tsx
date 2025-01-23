"use client";

import CommunityWindow from "@/components/communityWindow";
import CommunitySidebar from "@/components/communitySidebar";
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
      <CommunitySidebar onUserSelect={handleUserSelect} />
      <CommunityWindow selectedUser={selectedUser} />
    </div>
  );
}
