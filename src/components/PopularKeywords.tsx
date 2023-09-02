'use client';

import { PopularKeyword, getPopularKeywords } from '@/service/popular-keywords';
import React, { useEffect, useState } from 'react';
import CurrentPopularKeyword from './CurrentPopularKeyword';
import PopularKeywordsPopup from './PopularKeywordsPopup';

export default function PopularKeywords() {
  const [keywords, setKeywords] = useState<PopularKeyword[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    getPopularKeywords()
      .then((res) => setKeywords(res.popular_keywords.results))
      .catch(console.error);
  }, []);

  return (
    <div className="relative">
      <CurrentPopularKeyword
        keywords={keywords}
        onOpen={() => setShowPopup(true)}
      />
      {showPopup && (
        <PopularKeywordsPopup
          keywords={keywords}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}
