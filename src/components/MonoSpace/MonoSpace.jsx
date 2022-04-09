import React from 'react';
import UseFonts from '../hooks/UseFonts';
import SearchEngine from '../SearchEngine/SearchEngine';

const MonoSpace = () => {
  const chooseCategory = ['monospace']
  const monospaceFonts = UseFonts(chooseCategory)
  return (
    <div>
      <SearchEngine allFonts={monospaceFonts}></SearchEngine>
    </div>
  );
};

export default MonoSpace;