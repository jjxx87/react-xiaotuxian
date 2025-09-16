import HomeCategory from './components/Category';
import HomeBanner from './components/Banner';
import HomeNewProducts from './components/NewProducts';
import HotProducts from './components/HotProducts';
import HomeProduct from './components/HomeProduct';

const Home = () => {
  return (
  <>
    <div className="container">
    <HomeCategory />
    <HomeBanner />
    </div>

    <HomeNewProducts />
    <HotProducts />
    <HomeProduct />
  </>

  )
}
export default Home;