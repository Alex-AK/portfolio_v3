import { colors } from "styles/theme";

interface Props {
  step: number;
}

// TODO: clean up implementation of carousel buttons
const CarouselButtons = ({ step }: Props) => {
  return (
    <div
      style={{
        width: 100,
        display: "flex",
        justifyContent: "space-between",
        margin: "0 auto",
        marginTop: "-65px",
        paddingBottom: "20px",
      }}
    >
      {[0, 1, 2, 3, 4].map((index) => (
        <span
          key={index}
          style={{
            border: `1px solid ${colors.yellow}`,
            height: 12,
            width: 12,
            borderRadius: "50%",
            background: step === index ? colors.yellow : "transparent",
          }}
        />
      ))}
    </div>
  );
};

export default CarouselButtons;
