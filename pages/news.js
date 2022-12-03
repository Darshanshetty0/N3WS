import { Footer, Navbar, CreatePost } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World, NewsCard } from '../sections';

const News = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <NewsCard/>
    <CreatePost/>
  </div>
);

export default News;
