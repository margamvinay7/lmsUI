"use client";

import { useEffect, useState, useRef } from "react";
import { Send, Phone, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { VideoCall } from "./videoCall";
// import axios from "axios";

export default function ChatWindow({ socket, selectedUser }: any) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Random",
      content: "Hello Chat Component",
      createdAt: "01-01-2025",
    },
    { id: 1, sender: "Random", content: "Hello", createdAt: "01-01-2025" },
    {
      id: 1,
      sender: "Margam Vinay",
      content: "Hello",
      createdAt: "01-01-2025",
    },
    { id: 1, sender: "Random", content: "Hello", createdAt: "01-01-2025" },
    { id: 1, sender: "Random", content: "Hello", createdAt: "01-01-2025" },
  ]);
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [sender, setSender] = useState("Margam Vinay");
  const [receiver, setReceiver] = useState("");

  const bottomMessagesRef: any = useRef(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to send message
    const data = {
      sender,
      receiver,
      content: message,
    };

    // Emit sendMessage event with message data
    socket.emit("sendMessage", data);
    setMessage("");
  };

  //   const getMessages = async () => {
  //     const messages = await axios.get(
  //       `http://localhost:3000/message/getMessages?sender=${sender}&receiver=${selectedUser?.id}`
  //     );
  //     console.log(messages.data.messages);
  //     setMessages(messages.data.messages);
  //   };

  //   useEffect(() => {
  //     socket.on("newMessage", (newMessage: any) => {
  //       setMessages((prevMessages): any => [...prevMessages, newMessage]);
  //     });

  //     let user: any = localStorage.getItem("user");
  //     user = JSON.parse(user);
  //     setSender(user?.id);
  //     console.log("user data", user);

  //     return () => {
  //       socket.off("newMessage");
  //     };
  //   }, [socket]);

  //   useEffect(() => {
  //     setReceiver(selectedUser?.id || "");
  //     if (sender && selectedUser?.id) {
  //       getMessages();
  //     }
  //   }, [selectedUser, sender]);

  //   useEffect(() => {
  //     if (bottomMessagesRef.current) {
  //       bottomMessagesRef.current.scrollIntoView({ behaviour: "smooth" });
  //     }
  //   }, [messages]);

  return (
    <div className="flex-1 flex flex-col">
      <div className=" border-b p-3 flex justify-between items-center">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${selectedUser?.username}`}
            />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <h2 className="font-semibold">{selectedUser?.username}</h2>
        </div>
        <div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowVideoCall(true)}
          >
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Phone className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message: any) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === sender ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs mx-2 p-1 rounded-lg ${
                message.sender === sender
                  ? "bg-chart-5 text-primary"
                  : "bg-secondary"
              }`}
            >
              <p>{message.content}</p>
              <small
                className={`text-sm ${
                  message.sender === sender
                    ? "text-secondary"
                    : "text-primary/50"
                }`}
              >
                {new Date(message.createdAt).toLocaleTimeString()}
              </small>
            </div>
          </div>
        ))}
        <div ref={bottomMessagesRef} />
      </div>
      <form onSubmit={handleSendMessage} className=" border-t p-4 flex">
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 mr-2"
        />
        <Button type="submit">
          <Send className="h-5 w-5" />
        </Button>
      </form>
      {/* {showVideoCall && <VideoCall onClose={() => setShowVideoCall(false)} />} */}
    </div>
  );
}
