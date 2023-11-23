import { theme, lightTheme, darkTheme } from "../assets/styles/theme";

export const findAudioUrl = (obj) => {
  let audioUrl = "";
  try {
    audioUrl = obj.phonetics.find((item) => item.audio.length > 0);
  } catch (err) {
    console.error("Something went wrong", err.message);
  }
  return audioUrl ? audioUrl.audio : "";
};

export const findMeaning = (obj) => {
  let meanings = [];
  try {
    obj.forEach((item) => {
      meanings = [...meanings, ...item.meanings];
    });
  } catch (error) {
    console.log(error);
  }
  return meanings ? meanings : [];
};

export const handleTheme = (isDarkTheme) => {
  let currentTheme = isDarkTheme ? darkTheme : lightTheme;
  return { ...theme, ...currentTheme };
};
