import Image from "next/image";
import { SquareContainer } from "./styles";

function LandingSquare({
  icon,
  title,
  text,
  delay,
}: {
  icon: string;
  title: string;
  text: string;
  delay?: number;
}) {
  return (
    <SquareContainer
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: delay ? delay + 0.2 : 0.2 }}
      viewport={{ once: true }}
    >
      <Image src={icon} alt="" />
      <strong>{title}</strong>
      <p>{text}</p>
    </SquareContainer>
  );
}

export default LandingSquare;
