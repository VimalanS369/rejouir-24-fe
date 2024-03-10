import { Footer } from '../components';
import Gallery from '../components/Gallery';
// eslint-disable-next-line import/named
import { About, Register, Feedback, Hero, Partners, WhenandWhere, Notifyinfo} from '../sections';


const Page = () => (
  <div className="bg-primary-black overflow-hidden">

    <Hero />
    <Notifyinfo />
    <About />
    <WhenandWhere />
    <Register />
    <Gallery />
    <Feedback />
    <Partners />

  </div>
);

export default Page;
