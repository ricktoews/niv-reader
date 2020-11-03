import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import ChevronIcon from './components/ChevronIcon';
import PassageLayout from './components/PassageLayout';
import Reference from './components/Reference';
import Autocomplete from './components/Autocomplete';
import SelectInteger from './components/SelectInteger';
import Popup from './components/Popup';
const bookData = require('./data/book-data')[0];

function App() {
  const [book, setBook] = useState('');
  const [chapter, setChapter] = useState(0);
  const [maxChapter, setMaxChapter] = useState(0);
  const [reference, setReference] = useState({ book: 'Revelation', chapter: 11 });
  const [showPopup, setShowPopup] = useState(true);

  const updateReference = (book, chapter) => {
    setReference({ book, chapter });
  }

  const popupSetReference = () => {
    setBook('');
    setChapter(0);
    setShowPopup(true);
  }

  const setInteger = input => {
    console.log('chapter', input);
    setChapter(input);
    setShowPopup(false);
    setReference({ ...reference, chapter: input });
  }

  const setSelection = input => {
    console.log('selection', input);
    setBook(input);
    setMaxChapter(bookData[input]);
    setReference({ book: input, chapter: 1 });
  }

  const autoCompleteStyle = {
    marginTop: '10px',
    color: 'black',
    fontSize: '1em'
  };

  const handleLeft = () => {
    var nextChapter = 1*chapter - 1;
    setChapter(nextChapter);
    setReference({ ...reference, chapter: nextChapter });
  }

  const handleRight = () => {
    var nextChapter = 1*chapter + 1;
    setChapter(nextChapter);
    setReference({ ...reference, chapter: nextChapter });
  }

  return (
    <div className="App">
      <header className="App-header">
        <ChevronIcon direction="left" handleClick={handleLeft} />
        <Reference book={reference.book} chapter={reference.chapter} popupSetReference={popupSetReference} />
        { showPopup ? (<Popup width="300" height="275">
          { !book ? <Autocomplete style={autoCompleteStyle} prompt={'Book'} setSelection={setSelection} data={Object.keys(bookData)} /> : null }
          { !chapter && book > '' ? <SelectInteger setInteger={setInteger} maxValue={maxChapter} /> : null }
        </Popup>) : null }
        <ChevronIcon direction="right" handleClick={handleRight} />
      </header>
      <PassageLayout reference={updateReference} book={book} chapter={chapter} />
    </div>
  );
}

export default withRouter(App);
