import { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import Navbar from '../Shared/Navbar/Navbar';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
  const [cards, setCards] = useState([]);
  const newsData = useLoaderData();

  useEffect(() => {
    setCards(newsData);
  }, []);
  // console.log(cards);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>

        <div className="md:col-span-2 ">
          {/* Loading Data from json  */}
          {cards.map((card, rdx) => (
            <NewsCard key={rdx} myCard={card}></NewsCard>
          ))}
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
