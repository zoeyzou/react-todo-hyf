// Exercise 1

// Firstly lets fetch the reddit posts using their api https://www.reddit.com/r/ProgrammerHumor.json

function getAjaxData(url, callback) {
  // Create new ajax call with the js function called XMLHttpRequest
  const request = new XMLHttpRequest();
  request.addEventListener('load', () => request.status === 200 ? 
    callback(JSON.parse(request.responseText)) : console.log('Something is probably wrong with the url'));

  request.addEventListener('error', () => console.log('Server error like timeout'));

  // initializes a request with an http method
  request.open("GET", url);
  // Sends the request 
  request.send();
}

getAjaxData('https://www.reddit.com/r/ProgrammerHumor.json', postData => {
  const allPosts = postData.data.children;

  // Exercise 2
  // Lets find the reddit posts that have a thumbnail (what array function are we going to use??)
  const postWithoutThumbnail = allPosts.filter(post => post.data.thumbnail_height !== null);
  console.log('The posts that do not have thumbnails are: ');
  console.log(postWithoutThumbnail);

  // Exercise 3
  // We are not interested in all the data, but only the number of up votes. 
  const upsOfAllPost = allPosts.map(post => post.data.ups);
  console.log("All the downs of posts are: ");
  console.log(upsOfAllPost);

  // Exercise 4
  // Lets find out if including a large thumbnail in your reddit posts decreases the average number of upvotes:

  // 4.1 Lets find the average number of upvotes posts with a small thumbnail has
  const averageThumbnailHeight = calculateAverageThumbnailHeight(allPosts);
  const postsWithLargeThumbnail = allPosts.filter(post => post.data.thumbnail_height >= averageThumbnailHeight);
  const postsWithSmallThumbnail = allPosts.filter(post => post.data.thumbnail_height < averageThumbnailHeight);
  
  const upVotesforLarge = calculateAverageUpvotes(postsWithLargeThumbnail);

  console.log('upVotesforLarge', upVotesforLarge);

    // console.log(averageUpsOfSmallThumbnail);
  // 4.2 Lets find the average number of upvotes posts without a large thumbnail has
  const upVotesforSmall = calculateAverageUpvotes(postsWithSmallThumbnail);

  console.log('upVotesforSmall', upVotesforSmall);


  const averages = allPosts.reduce((acc, post, i = 2) => {
    if ((post.data.thumbnail_height || 0) > averageThumbnailHeight) {
      acc.large.sum += post.data.ups;
      acc.large.count++;
    } else {
      acc.small.sum += post.data.ups;
      acc.small.count++;
    }
    if (i === allPosts.length - 1) {
      acc.large.avg = acc.large.sum / acc.large.count;
      acc.small.avg = acc.small.sum / acc.small.count;
    }
    return acc;
  }, {large: {sum:0, avg: 0, count: 0}, small: {sum: 0, avg: 0, count: 0}});
  console.log('The average posts of large thumbnails is ', averages.large.avg);
  console.log('The average posts of small thumbnails is ', averages.small.avg);
  // Exercise 5
  // Get the title of the least successful reddit post.
  const theLeastSuccessfulPost = (allPosts.sort((a, b) => a.data.ups < b.data.ups))[0].data.title;

  console.log('The least successful post\'s title is: "', theLeastSuccessfulPost, '"');
})

function calculateAverageThumbnailHeight(posts) {
  return posts.reduce((sum, post) => sum + post.data.thumbnail_height || 0, 0) / posts.length;
}

function calculateAverageUpvotes(posts) {
  return posts.reduce((sum, post) => sum + post.data.ups, 0) / posts.length;
}

