import React from "react";
import WordHeader from "../wordHeader/WordHeader";
import { CardWrapper, DefinitionsSource } from "./WordCard.styles";
import SearchErr from "../searchErr/SearchErr";
import WordDetails from "../wordDetails/WordDetails";

const WordCard = ({ word, phonetic, audio, meanings, source }) => {
  return word ? (
    <CardWrapper>
      <WordHeader word={word} phonetic={phonetic} audio={audio} />
      {meanings.map((element, index) => (
        <WordDetails
          key={index}
          partOfSpeech={element.partOfSpeech}
          definitions={element.definitions}
          synonyms={element.synonyms}
        />
      ))}
      <DefinitionsSource>
        <hr />
        <div>
          <h4>Source</h4>
          <a href={source}>{source}</a>
        </div>
      </DefinitionsSource>
    </CardWrapper>
  ) : (
    <SearchErr />
  );
};

export default WordCard;
