import { StyledList } from "./MeaningList.styles";

const MeaningList = ({ definitions }) => {

return (
    <StyledList>
      <h4>Meaning</h4>
      {definitions.map((item, index) => (
        <li key={index}>{item.definition}</li>
      ))}
    </StyledList>
  );
};

export default MeaningList;
