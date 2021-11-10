import { useState, useEffect } from "react";

// components
import CarouselButtons from "components/General/CarouselButtons";

const testimonials = [
  {
    attribution: "Mark Bullard — Founder of BrainSquall",
    text:
      "Alex is extremely organized... an underpromise/overdeliver kind of guy — he was able to deliver a fantastic working model in less time than planned.\n",
  },
  {
    attribution: "Corinne Cooley — Founder of Matrix Multiplier",
    text: `His work ethic, eye for detail, and thoughtful, curious approach have set him apart... he's ensured quality products and releases for award-winning websites for end clients doing high visibility, high profile work around the globe`,
    fullQuote: `His work ethic, eye for detail, and thoughtful, curious approach to both the technical and the interpersonal have set him apart... he's ensured quality products and releases for <a href="https://www.forumone.com/ideas/forum-one-webawards-results/" target="_blank" rel="noopener noreferrer">award-winning websites</a> for end clients doing high visibility, high profile work around the globe`,
  },
  {
    attribution: "Dawn Basset, Owner of LINE",
    text:
      "Alex perfectly distilled my ideas and aesthetic and encapsulated it into one of the most beautiful and functional websites I've ever seen. His talent and disposition made this seemingly insurmountable tasks a joy.",
  },
];

const Carousel = () => {
  const [step, setStep] = useState(0);
  const { attribution, text } = testimonials[step];

  const updateStep = (step) => {
    if (step === testimonials.length - 1) setStep(0);
    else setStep(step + 1);
  };

  useEffect(() => {
    setInterval(() => {
      updateStep(step);
    }, 10000);
  }, []);

  return (
    <>
      <blockquote>
        <p>{text}</p>
        <p>{attribution}</p>
      </blockquote>

      <CarouselButtons step={step} />
    </>
  );
};

export default Carousel;
