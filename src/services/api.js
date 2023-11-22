const handleUrl = (input) => {
  return `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
};
const api = async (input) => {
  try {
    const response = await fetch(handleUrl(input));
    if (!response.ok) {
      console.error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export default api;
