import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	return (
		<ul className="col-md-4 list-group">
			{props.videos.map((video, key) => {
				return <VideoListItem 
					onVideoSelect={props.onVideoSelect}
					key={key}
					video={video} />
			})}
		</ul>
	)
}

export default VideoList;