import ytSearch from 'yt-search';

const searchWithOptions = async (query) => {
  const options = {
    query: query,
    pageStart: 1,
    pageEnd: 2,
    type: 'video', // 'video', 'channel', 'playlist', 'all'
    category: 'music', // optional category filter
  };

  try {
    const results = await ytSearch(options);
    
    results.videos.forEach(video => {
      console.log(`
        Title: ${video.title}
        URL: ${video.url}
        Duration: ${video.duration.timestamp}
        Views: ${video.views}
        Uploaded: ${video.ago}
        Thumbnail: ${video.thumbnail}
      `);
    });
  } catch (error) {
    console.error('Search error:', error);
  }
};

searchWithOptions('music 2024');
