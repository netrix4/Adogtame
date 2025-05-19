import Animal from "./IAnimal";

interface IAnimalDetails {
  isViewingDetails: boolean;
  detailingAnimal: Animal;
  changeEditHandler?: Function;
  onHideDetails: () => void;
}
export default IAnimalDetails;
