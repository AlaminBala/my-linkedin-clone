import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./Feed.css";
import { db } from "./firebase";
import InputOption from "./InputOption";
import Post from "./Post";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { selectUser } from "./features/counter/userSlice";
import { useSelector } from "react-redux";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={Image} color="#7005f9" />
          <InputOption title="Video" Icon={Subscriptions} color="#c7a334" />
          <InputOption title="Event" Icon={EventNote} color="#c0cbcd" />
          <InputOption
            title="Write Article"
            Icon={CalendarViewDay}
            color="#7fc15e"
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photUrl={photoUrl}
          />
        );
      })}
    </div>
  );
}

export default Feed;
