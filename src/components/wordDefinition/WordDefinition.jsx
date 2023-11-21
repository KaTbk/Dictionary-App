import React, { useRef } from "react";
import {
  AudioButton,
  InnerWrapper,
  StyledError,
  StyledHeader,
  WordMeaning,
} from "./WordDefinition.styles";
import MeaningList from "../wordMeaning/MeaningList";

const WordDefinition = ({
  word,
  phonetic,
  audio,
  title,
  message,
  meanings,
}) => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  return word ? (
    <>
      <StyledHeader>
        <InnerWrapper>
          <h1>{word}</h1>
          <p>{phonetic}</p>
        </InnerWrapper>
        <AudioButton>
          <audio src={audio} ref={audioRef} />
          <button onClick={handlePlay}></button>
        </AudioButton>
      </StyledHeader>
      {meanings.map((meaning, index) => (
        <WordMeaning key={index}>
          <div>
            <h3>{meaning.partOfSpeech}</h3>
            <hr />
          </div>
          <MeaningList definitions={meaning.definitions} />
        </WordMeaning>
      ))}
    </>
  ) : (
    <StyledError>
      <h2>{title}</h2>
      <p>{message}</p>
    </StyledError>
  );
};

export default WordDefinition;
