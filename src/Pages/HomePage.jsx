import { useContext, useEffect } from 'react';
import BrandLogo from '../Components/HomeComponents/BrandLogo';
import TextDivider from '../Components/Texts/TextDivider';
import CategoryCard1 from '../Components/HomeComponents/CategoryCard1';
import styled from 'styled-components';
import { desktopMediaQuery } from '../styles';
import Footer from '../Components/Utils/Footer';
import HomeCardsContainer from '../Components/Cards/HomeCardsContainer';
import scrollToProduct from '../Bin/scrollToProduct';
import { ProductsInfoContext } from '../Context/ProductsInfoContext';
import categoryRemerasImage from '../Assets/Images/Categories/Remeras.jpeg';
import categoryPantalonesImage from '../Assets/Images/Categories/Pantalones.jpeg';
import categoryBuzosYCamperasImage from '../Assets/Images/Categories/Buzos-y-remeras.jpeg';
import categoryAccesoriosImage from '../Assets/Images/Categories/Accesorios.jpg';

const CategoryCardsContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;

  ${desktopMediaQuery} {
    width: 90%;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GoUpButton = styled.button`
  display: block;
  height: 3em;
  width: 85%;
  font-size: 1.2em;
  padding: 0.5em 0;
  margin-bottom: 60px;
  background: #dd6b20;
  border: 0 solid transparent;
  border-radius: 0;
  box-shadow: 0 2px 5px #0006;
  text-align: center;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  ${desktopMediaQuery} {
    margin-top: 30px;
  }
`;

const HomePage = () => {
  const { lastProductVisited } = useContext(ProductsInfoContext);

  useEffect(() => {
    setTimeout(() => {
      if (!document.getElementById(lastProductVisited)) window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      else scrollToProduct(lastProductVisited);
    }, 80);
  }, [lastProductVisited]);

  const handleEndButtonClick = () => {
    scrollToProduct('category-title');
  };

  return (
    <>
      <BrandLogo />
      <TextDivider id="category-title">Categorias</TextDivider>
      <CategoryCardsContainer>
        <CategoryCard1 category="remeras" name="Remeras" image={categoryRemerasImage} />
        <CategoryCard1 category="joggins" name="Joggins" image={categoryPantalonesImage} />
        <CategoryCard1 category="buzos-y-camperas" name="Buzos & Camperas" image={categoryBuzosYCamperasImage} />
        <CategoryCard1 category="accesorios" name="Accesorios" image={categoryAccesoriosImage} />
      </CategoryCardsContainer>
      <TextDivider>Productos destacados</TextDivider>
      <HomeCardsContainer />
      <ButtonContainer>
        <GoUpButton onClick={handleEndButtonClick}>Ver mas productos por categoria</GoUpButton>
        {/* <GoUpButton onClick={handleEndButtonClick}>Ver mas productos en las categorias</GoUpButton> */}
      </ButtonContainer>
      <Footer />
    </>
  );
};

export default HomePage;
