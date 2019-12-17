import useAxios from "axios-hooks";
import axios from "axios";
import htmlToText from "html-to-text";

export const useGetIP = () => {
  const [{ data, loading, error }] = useAxios("https://ipapi.co/json/");
  const user = data
    ? { ip: data.ip, lat: data.latitude, long: data.longitude, city: data.city }
    : {};

  return [user, loading, error];
};

export const getQuote = async cb => {
  const { data } = await axios.get(
    `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_page=1&_=${Math.floor(
      Math.random() * 10000
    )}`
  );

  const payload = {
    quote: htmlToText.fromString(data[0].content.rendered),
    author: htmlToText.fromString(data[0].title.rendered),
    rating: ""
  };

  cb(payload);
};

export const getRobot = async (ip, cb) => {
  const response = await axios.get(`https://robohash.org/${ip}.png?bgset=bg1`, {
    headers: { "Content-Type": "image/png" },
    responseType: "blob"
  });

  cb(URL.createObjectURL(response.data));
};

export const getMapTile = async ({ lat, long }, cb) => {
  const response = await axios.get(
    `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s(${long},${lat})/${long},${lat},9.67,0.00,0.00/500x150@2x?access_token=pk.eyJ1Ijoic2VhbnAiLCJhIjoiY2p1MDY1YmljM2NnMjN6bXVnZXRpeGdvdSJ9.om-OkYVrL4-GyeWA3Evj2g`,
    { headers: { "Content-Type": "image/png" }, responseType: "blob" }
  );

  cb(URL.createObjectURL(response.data));
};

export const getTextToVoice = async (quote = "testing this", cb) => {
  const str = quote.split(" ").join("+");
  const response = await axios.get(
    `http://api.voicerss.org/?key=45745a596f7249daa16b94dc7a1c5e2a&src=${str}&hl=en-us`,
    {
      headers: { "Content-Type": "audio/wav" },
      responseType: "blob"
    }
  );

  cb(URL.createObjectURL(response.data));
};
