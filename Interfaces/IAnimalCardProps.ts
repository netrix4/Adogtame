import Animal from "./IAnimal";

interface IAnimalCardProps {
  animal: Animal;
  onViewMore: (returnToModalAnimal: Animal) => void;
}

export default IAnimalCardProps;
