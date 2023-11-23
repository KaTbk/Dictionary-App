import {
  DetailHeader,
  WordDefinitionsList,
  WordDefinitionsListWrapper,
  WordSynonyms,
} from "./WordDetails.styles";

const WordDetails = ({ partOfSpeech, definitions, synonyms }) => {
  return (
    <>
      <DetailHeader>
        <h2>{partOfSpeech}</h2>
        <div></div>
      </DetailHeader>
      <WordDefinitionsListWrapper>
        <h3>Meaning</h3>
        <WordDefinitionsList>
          {definitions.map((element, index) => (
            <li key={index}>{element.definition}</li>
          ))}
        </WordDefinitionsList>
      </WordDefinitionsListWrapper>
      {synonyms.length > 0 && (
        <WordSynonyms>
          <h3>Synonyms</h3>
          <p>{synonyms.join(", ")}</p>
        </WordSynonyms>
      )}
    </>
  );
};

export default WordDetails;
