import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';

var VideoList = (props) => (

  <div className="video-list">
    <ul>
      {props.videosOnList.map((video) =>
        <VideoListEntry 
          individualVideo={video}
          onTitleClick={props.onTitleClick} />
      )}
    </ul>
  </div>
);




// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;



// <div><h5><em><VideoListEntry video={props.videos}/></em> view goes here</h5></div>
//  <ul>
// {props.todos.map(todo =>
//   <TodoListItem todo={todo} />
// )}
// </ul>
// </div>