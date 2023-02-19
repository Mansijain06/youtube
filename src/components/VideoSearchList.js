import React, { useEffect } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const VideoSearchList = () => {

    useEffect(() => {
        searchVideo();
    }, [])

    const searchVideo = async () => {
        const searchVideoList = await fetch(YOUTUBE_SEARCH_API);
        const jsonData = await searchVideoList.json();
        console.log(jsonData);
    }

    return (
        <div>VideoSearchList</div>
    )
}

export default VideoSearchList