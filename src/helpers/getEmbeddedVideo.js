function getVideoId(youTubeVideoUrl) {
  const URL_CHARC_COUNT = 11;
  const REGEX = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = youTubeVideoUrl.match(REGEX);

  return (match && match[2].length === URL_CHARC_COUNT)
    ? match[2]
    : null;
}

export default getVideoId;
