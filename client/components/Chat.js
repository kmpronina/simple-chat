import Image from "next/image";
import { new_user } from "@/assets";

const Chat = ({ chat, user, typingUsers }) => {
  return (
    <div className="h-full pb-12 md:p-4">
      <div className="w-full h-full rounded-md overflow-y-auto gradient pt-2 md:pt-6">
        {chat.map((message, index) => {
          message = { ...message, own: message.user === user };
          return message.type === "server" ? (
            <ServerMessage key={index} {...message} />
          ) : (
            <Message key={index} {...message} />
          );
        })}
        {typingUsers[0] && <Typing typingUser={typingUsers[0]} />}
      </div>
    </div>
  );
};

const Message = ({ content, type, own, user }) => {
  return (
    <p className={`message px-1 md:px-6 py-1 flex ${own && "justify-end"}`}>
      {!own && (
        <span
          className={`logo text-2xl bg-blue-600 text-white rounded-full py-2 text-center px-4 mr-2 flex items-center ${
            type === "text" ? "my-auto" : "max-h-12"
          }`}
        >
          {user.name.charAt(0).toUpperCase()}
        </span>
      )}
      <span
        className={`text-xl md:text-3xl py-2 rounded-2xl 
            ${type === "text" ? "px-6" : "px-2"}
            ${own ? "bg-sky-400 text-white" : " bg-slate-300"}
            `}
      >
        {type === "text" ? content : <img src={content} alt="image" />}
      </span>
    </p>
  );
};

const ServerMessage = ({ content }) => {
  return (
    <p className="px-1 md:px-6 py-1 flex">
      <span className="text-xl md:text-3xl text-white flex bg-transparent">
        <Image src={new_user} className="max-w-8 md:w-8 mx-2" alt="new user" />
        {content}
      </span>
    </p>
  );
};

const Typing = ({ typingUser }) => {
  return (
    <div className="px-1 md:px-6 py-1 flex">
      <span className="logo text-2xl bg-blue-600 text-white rounded-full py-2 my-auto text-center px-4 mr-2 flex items-center">
        {typingUser.charAt(0).toUpperCase()}
      </span>
      <div className="loader bg-slate-300 rounded-2xl p-5">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Chat;
