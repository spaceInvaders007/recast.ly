var searchYouTube = ({key, query, max}, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: string,
    maxResults: 5, 
    key: YOUTUBE_API_KEY,
    type: 'video',
    q: query,
    videoEmbeddable: true
  })
    .done(({items})=> {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default searchYouTube;
