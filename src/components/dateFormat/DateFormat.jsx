import { parseISO, format } from "date-fns";

const DateFormat = ({ dateString, dateFormat }) => {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString}>{format(date, dateFormat)}</time>
  );
};

export default DateFormat;
