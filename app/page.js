import { Footer, Navbar } from '../components';
// eslint-disable-next-line import/named
import { About, Register, Feedback, Hero, WhyIcon, Partners, WhenandWhere, World} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">

    <Navbar />
    <Hero />
    <About />
    <WhyIcon />
    <WhenandWhere />
    <Register />
    <Feedback />
    <Partners />
    <World />
    <Footer />

  </div>
);

export default Page;
