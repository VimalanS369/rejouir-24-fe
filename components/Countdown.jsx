
'use client';

import React from 'react';

const Countdown = () => (

  <div className="grid grid-flow-col gap-5 color-red-900 text-center auto-cols-max">
    <div className="flex flex-col">
      <span className="countdown font-mono text-5xl">
        <span style={{ '--value': 15 }} />
      </span>
      d
    </div>
    <div className="flex flex-col">
      <span className="countdown font-mono text-5xl">
        <span style={{ '--value': 10 }} />
      </span>z
      hours
    </div>
    <div className="flex flex-col">
      <span className="countdown font-mono text-5xl">
        <span style={{ '--value': 24 }} />
      </span>
      min
    </div>
    <div className="flex flex-col">
      <span className="countdown font-mono text-5xl">
        <span style={{ '--value': 12 }} />
      </span>
      sec
    </div>
  </div>
);
export default Countdown;
