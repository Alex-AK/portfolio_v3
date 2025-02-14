import { colors } from "styles/theme";

interface Props {
  step: number;
  onClick: (index: number) => void;
}

const CarouselButtons = ({ step, onClick }: Props) => {
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
          onClick={() => onClick(index)}
          style={{
            border: `1px solid ${colors.yellow}`,
            height: 12,
            width: 12,
            borderRadius: "50%",
            background: step === index ? colors.yellow : "transparent",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
};

export default CarouselButtons;
