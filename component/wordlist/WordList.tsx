import * as React from 'react';
import WordItem from './WordItem';
import WordListPage from '../../pages/word-list';

export interface IWordItem {
  word: string,
  meaning: string,
  pronun: string,
  sentence: string,
}

export interface IWordListProps  {
  wordList: Array<IWordItem>
}

export default function WordList (props: IWordListProps) {
  // console.log("props.wordList", props.wordList)
  return (
    <div>
      {
        props.wordList.map((val, index) => {
          return <div key={index}>{val.word}</div>
        })
      }
    </div>
  );
}
