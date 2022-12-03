import { Navbar, CreatePost } from '../components';
import { NewsCard } from '../sections';

const News = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <NewsCard />
    <CreatePost />
  </div>
);

export default News;
