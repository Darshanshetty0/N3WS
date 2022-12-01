import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const News = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Feedback/>
    <Footer/>
  </div>
);

export default News;
