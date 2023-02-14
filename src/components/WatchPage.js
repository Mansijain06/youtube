import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  //   console.log(searchParam.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
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
  );
};

export default WatchPage;
