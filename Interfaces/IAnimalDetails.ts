import Animal from "./IAnimal";

interface IAnimalDetails {
  isViewingDetails: boolean
  detailingAnimal: Animal
  onHideDetails: () => void
}

export default IAnimalDetails
