import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import ChevronIcon from './components/ChevronIcon';
import PassageLayout from './components/PassageLayout';
import Reference from './components/Reference';
import Autocomplete from './components/Autocomplete';
import SelectInteger from './components/SelectInteger';
import Popup from './components/Popup';
import { books, bookData, getPrevChapter, getNextChapter } from './utils/book-data';

function Main(props) {
  const { param_book, param_chapter } = props.match.params;

  const [book, setBook] = useState(param_book || '');
  const [chapter, setChapter] = useState(param_chapter || '');
  const [maxChapter, setMaxChapter] = useState(0);
  const [reference, setReference] = useState({ book, chapter });
  const [showPopup, setShowPopup] = useState(!book);
  const [showMemPopup, setShowMemPopup] = useState(false);
  const updateReference = (book, chapter) => {
    props.history.push('/' + book + '/' + chapter);
    setReference({ book, chapter });
  }

  const popupSetReference = () => {
    setBook('');
    setChapter(0);
    setShowPopup(true);
// set mem popup to false.
    setShowMemPopup(false);
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

  const updateNewReference = (newReference) => {
    setBook(newReference.book);
    setChapter(newReference.chapter);
    setReference({ ...newReference });
  }

  const handleLeft = () => {
    var newReference = getPrevChapter(reference);
    updateNewReference(newReference);
  }

  const handleRight = () => {
    var newReference = getNextChapter(reference);
    updateNewReference(newReference);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Reference 
          book={reference.book}
          chapter={reference.chapter} 
          popupSetReference={popupSetReference} />
        { showPopup ? (<Popup captureClick={() => { setShowPopup(false) }} width="300" height="275" setShowPopup={setShowPopup}>
          { !book ? <Autocomplete style={autoCompleteStyle} prompt={'Book'} setSelection={setSelection} data={Object.keys(bookData)} /> : null }
          { !chapter && book > '' ? <SelectInteger setInteger={setInteger} maxValue={maxChapter} /> : null }
        </Popup>) : null }
      </header>
      <PassageLayout 
        reference={updateReference} 
        book={book} 
        chapter={chapter} 
        showMemPopup={showMemPopup} 
        setShowMemPopup={setShowMemPopup} />
      <footer>
        <ChevronIcon direction="left" handleClick={handleLeft} />
        <ChevronIcon direction="right" handleClick={handleRight} />
      </footer>
    </div>
  );
}

export default withRouter(Main);
