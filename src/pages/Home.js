import React from 'react';
import HomeThumbnail from '../components/HomeThumbnail';

export default function Home() {
  const openMoreHandler = () => {
    console.log('navigate to details with this id');
  };
  return (
    <div>
      {/* { coins.map((coin) => (
        ))} */}
      <HomeThumbnail
        onClick={openMoreHandler}
      />
    </div>
  );
}
