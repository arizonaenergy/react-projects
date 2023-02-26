import axios from "axios";

const SearchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID yWbEFpE5kBP98VLBV7SHpuhvxEXaZBiPxYwZFy_V25o",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default SearchImages;
