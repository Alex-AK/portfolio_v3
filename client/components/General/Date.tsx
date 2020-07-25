import { parseISO, format } from "date-fns";

interface Props {
  date: string;
}

const Date = ({ date }: Props) => {
  const dateISO = parseISO(date);

  return <time dateTime={date}>{format(dateISO, "LLLL yyyy")}</time>;
};

export default Date;
