import {
  DetailHeader,
  WordDefinitionsList,
  WordSynonyms,
} from "./WordDetails.styles";

const WordDetails = ({ partOfSpeech, definitions, synonyms }) => {
  return (
    <>
      <DetailHeader>
        <h2>{partOfSpeech}</h2>
        <div></div>
      </DetailHeader>
      <WordDefinitionsList>
        <h3>Meaning</h3>
        {definitions.map((element, index) => (
          <li key={index}>{element.definition}</li>
        ))}
      </WordDefinitionsList>
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
