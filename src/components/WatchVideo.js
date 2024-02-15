import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { related, commentHandler } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [comments,setcomments]=useState([]);

  const dispatch = useDispatch();
  const getComments=async()=>{
    const API=commentHandler(searchParams.get("v"));
    const data=await fetch(API);
    const json=await data.json();
    setcomments(json.items);
    // console.log(json.items);

  }
  useEffect(() => {
    getComments();
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div className="">
          <iframe
            width="800"
            height="500"
            className="rounded-lg"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />

        </div>
      </div>
      <CommentsContainer items={comments} />
    </div>
  );
};

export default WatchPage;
