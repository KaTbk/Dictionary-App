import { useRef } from "react";
import {
  HeaderWrapper,
  InnerWrapper,
  PlayBtn,
} from "./WordHeader.styles";

const WordHeader = ({ word, phonetic, audio }) => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audio && audioRef.current.play();
  };

  return (
    <HeaderWrapper>
      <InnerWrapper>
        <h1>{word}</h1>
        <p>{phonetic}</p>
      </InnerWrapper>
      <PlayBtn onClick={handlePlay}>
        {audio && <audio src={audio} ref={audioRef} />}
      </PlayBtn>
    </HeaderWrapper>
  );
};

export default WordHeader;
