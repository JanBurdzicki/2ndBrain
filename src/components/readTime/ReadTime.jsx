import readingTime from "reading-time";


const ReadTime = ({ text }) => {
  const stats = readingTime(text);

  // console.log(stats);

  return (
	stats.text
  );
};

export default ReadTime;
