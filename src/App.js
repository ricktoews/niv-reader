import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';

function Reference(props) {
  return <div>
    <span className="ref">{props.book} {props.chapter}</span>
  </div>;
}

function PassageSelector(props) {
  const [book, setBook] = useState('');
  const [chapter, setChapter] = useState('');

  const handleBookInput = e => {
    var el = e.currentTarget;
    var name = el.value;
    setBook(name);
  };

  const handleChapterInput = e => {
    var el = e.currentTarget;
    setChapter(el.value);
  };

  const handleSelect = e => {
    props.select(book, chapter);
  };

  return <div className="passage-selector">
    <input id="input-book" type="text" onChange={handleBookInput} size="10" />
    <input id="input-chapter" onChange={handleChapterInput} type="number" size="3" />
    <button id="input-select" onClick={handleSelect}>Go</button>
  </div>;
}

function Verse(props) {
  return <div>
    <span className="verse-ref">{props.book} {props.chapter} {props.verse}</span>. <span className="verse-text">{props.text}</span>
  </div>;
}

function PassageLayout(props) {
  const [passage, setPassage] = useState([]);
  const handleSelectPassage = (book, chapter) => {
    props.reference(book, chapter);
    fetch(`http://memorize.toewsweb.net/rest.php/getpassage/${book}/${chapter}`)
      .then(res => res.json())
      .then(res => {
        setPassage(res);
      });
  }

  return <div className="content-wrapper">
    <PassageSelector select={handleSelectPassage} />
    <div className="passage-wrapper">
    { passage.map(p => {
        return <Verse book={p.book} chapter={p.chapter} verse={p.verse} text={p.text} />
    })}
    </div>
  </div>;
}


function App() {
  const [reference, setReference] = useState({ book: 'Revelation', chapter: 11 });

  const updateReference = (book, chapter) => {
    setReference({ book, chapter });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Reference book={reference.book} chapter={reference.chapter} />
      </header>
      <PassageLayout reference={updateReference} />
    </div>
  );
}

export default withRouter(App);
