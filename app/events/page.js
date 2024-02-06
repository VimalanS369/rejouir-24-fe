import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles';
import Card from '../../components/Card';
import { eventData } from '../../constants';
import { staggerContainer } from '../../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../../components';

const Event = () => {
  const [search, setSearch] = useState('');

  const filteredEvents = eventData.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <section className="flex flex-col justify-center items-center bg-primary-black h-full w-full pl-0 pr-6  ">
    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-6xl font-bold text-white mt-4 text-center md:py-2">Choose An Event </h1>
    <div className="my-8 w-full sm:w-3/4 lg:w-1/2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for an event..."
          className="p-2 w-full"
        />
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 py-5 px-4 gap-0">
            {filteredEvents.map((event) => (
                <Card key={event.id} event={event} />
            ))}
    </div>
  </section>
);
            };

export default Event;
