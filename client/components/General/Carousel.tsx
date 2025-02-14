import { useState, useEffect, useRef } from "react";

// components
import CarouselButtons from "components/General/CarouselButtons";

const testimonials = [
  {
    attribution: "Chris Psiaki - CTO of Topia",
    text: "[Alex's] architecture is really easy to work with and to make rapid and effective modifications to.",
  },
  {
    attribution: "Chris Psiaki - CTO of Topia",
    text: "His efforts went above and beyond on [bundle optimization]. He exhaustively researched his options and put the highest impact improvements into Topia. Everybody will feel a difference.",
  },
  {
    attribution: "Lina Bell — DoE of Topia",
    text: "This PR is absolutely above and beyond the user story with all of the additional cleanup work. Major improvements across the board. Nice work!!",
  },
  {
    attribution: "Mark Bullard — Founder of BrainSquall",
    text: "Alex is extremely organized... an underpromise/overdeliver kind of guy — he was able to deliver a fantastic working model in less time than planned.\n",
  },
  {
    attribution: "Corinne Cooley — Founder of Matrix Multiplier",
    text: `His work ethic, eye for detail, and thoughtful, curious approach have set him apart... he's ensured quality products and releases for award-winning websites for end clients doing high visibility, high profile work around the globe`,
    fullQuote: `His work ethic, eye for detail, and thoughtful, curious approach to both the technical and the interpersonal have set him apart... he's ensured quality products and releases for <a href="https://www.forumone.com/ideas/forum-one-webawards-results/" target="_blank" rel="noopener noreferrer">award-winning websites</a> for end clients doing high visibility, high profile work around the globe`,
  },
];

const EIGHT_SECONDS = 8000;

const Carousel = () => {
  const [step, setStep] = useState(0);
  const { attribution, text } = testimonials[step];
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setStep((step) => (step === testimonials.length - 1 ? 0 : step + 1));
    }, EIGHT_SECONDS);
  };

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleButtonClick = (index: number) => {
    setStep(index);
    resetInterval();
  };

  return (
    <>
      <blockquote>
        <p style={{ minHeight: 72 }}>{text}</p>
        <p>{attribution}</p>
      </blockquote>

      <CarouselButtons step={step} onClick={handleButtonClick} />
    </>
  );
};

export default Carousel;
