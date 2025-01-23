"'use client'";

import { useEffect, useState } from "react";
import { Bell, MessageSquare, Search, Settings, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { NotificationPopover } from "./notificationPopover";
// import axios from "axios";

export default function CommunitySidebar({ socket, onUserSelect }: any) {
  const [chats, setChats] = useState([
    {
      id: 1,
      username: "Batch 1 Community",
      lastMessage: "Hello",
    },
    {
      id: 1,
      username: "Batch 2 Community",
      lastMessage: "Hello",
    },
    {
      id: 1,
      username: "Batch 3 Community",
      lastMessage: "Hello",
    },
    {
      id: 1,
      username: "Batch 4 Community",
      lastMessage: "Hello",
    },
    {
      id: 1,
      username: "Batch 5 Community",
      lastMessage: "Hello",
    },
    {
      id: 1,
      username: "Batch 6 Community",
      lastMessage: "Hello",
    },
    {
      id: 1,
      username: "Batch 7 Community",
      lastMessage: "Hello",
    },
    {
      id: 1,
      username: "Batch 8 Community",
      lastMessage: "Hello",
    },
    {
      id: 1,
      username: "Batch 9 Community",
      lastMessage: "Hello",
    },
    {
      id: 1,
      username: "Batch 10 Community",
      lastMessage: "Hello",
    },
    {
      id: 1,
      username: "Batch 11 Community",
      lastMessage: "Hello",
    },
    {
      id: 1,
      username: "Batch 12 Community",
      lastMessage: "Hello",
    },
    {
      id: 1,
      username: "Batch 13 Community",
      lastMessage: "Hello",
    },
  ]);

  //   async function getOnlineUsers() {
  //     const res = await axios.get("http://localhost:3000/user/getOnlineUsers");
  //     console.log("res", res.data.users);
  //     setChats(res.data.users);
  //   }

  //   useEffect(() => {
  //     getOnlineUsers();
  //   }, []);

  return (
    <div className="w-80  border-r flex flex-col">
      <div className="p-4 border-b">
        <Input
          type="text"
          placeholder="Search Communities..."
          className="w-full"
        />
      </div>
      <div className="flex-1 max-h-[calc(100vh-130px)] overflow-y-scroll scrollbar">
        {chats.map((chat: any) => (
          <div
            key={chat?.id}
            onClick={() => onUserSelect(chat)}
            className="flex items-center p-4 hover:bg-secondary/50 cursor-pointer"
          >
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage
                src={`https://api.dicebear.com/6.x/initials/svg?seed=${chat.username}`}
              />
              <AvatarFallback>
                {chat?.username
                  ?.split("'")
                  .map((n: any) => n[0])
                  .join("''")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold">{chat?.username}</h3>
              <p className="text-sm text-secondary">{chat?.lastMessage}</p>
            </div>
            {/* {chat.unread > 0 && (
              <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {chat.unread}
              </span>
            )} */}
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex justify-between">
        <Button variant="ghost" size="icon">
          <MessageSquare className="h-5 w-5" />
        </Button>
        {/* <NotificationPopover /> */}
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
