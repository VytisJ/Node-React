import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAds } from "../api/ads";
import Ad from "../components/Ad";

const Container = styled.div`
  max-width: 1100px;
  margin: 3rem auto;
`;

const Home = () => {
  const [ads, setAds] = useState([]);

  console.log(ads);

  useEffect(() => {
    fetchAds()
      .then((response) => setAds(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      {ads.map((ad) => (
        <Ad key={ad.id} ad={ad} />
      ))}
    </Container>
  );
};

export default Home;
