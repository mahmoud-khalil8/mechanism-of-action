import React from 'react';
import RootLayout from '../page';

const SectionThree = () => {
  return (
    <RootLayout>
      <span className="font-bold text-4xl">sectionThree</span>

      <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
    </RootLayout>
  );
};

export default SectionThree;