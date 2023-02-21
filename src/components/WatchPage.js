import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParam] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col m-6">
      <div className="flex">
        <div className="mt-24 m-5">
          <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
        <div className="mt-24 w-full"><LiveChat /></div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
