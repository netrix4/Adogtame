import Animal from "./IAnimal";

interface IAnimalCardProps {
  animal: Animal;
  onViewMore: (returnToModalAnimal: Animal) => void;
  hideShowMore: boolean;
}

export default IAnimalCardProps;
