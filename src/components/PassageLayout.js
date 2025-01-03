import React, { useEffect, useState } from 'react';
import MemorizePopup from './MemorizePopup';
import Verse from './Verse';

function PassageLayout(props) {
  const [passage, setPassage] = useState([]);
  const { book, chapter } = props;
  const [selectedText, setSelectedText] = useState(''); 
  const [selectedVerse, setSelectedVerse] = useState(''); 

  useEffect(() => {
    if (book && chapter) {
      handleSelectPassage(book, chapter);
    }
  }, [book, chapter]);

  // For memory, get the next verse for the user to input.
  const nextVerse = () => {
    // 1*selectedVerse + 1 needs to be put in a variable.
    var verseToGet = 1*selectedVerse + 1;
    var v = passage.filter(p => p.verse == verseToGet);
    setSelectedText(v[0].text);
    setSelectedVerse(verseToGet);
  }

  // For memory, get the next verse for the user to input.
  const replayVerse = () => {
    // 1*selectedVerse + 1 needs to be put in a variable.
    var verseToGet = 1*selectedVerse;
    var v = passage.filter(p => p.verse == verseToGet);
    setSelectedText(v[0].text);
    setSelectedVerse(verseToGet);
  }

  const handleSelectPassage = (book, chapter) => {
    props.reference(book, chapter);
    fetch(`https://niv.toews-api.com/rest.php/getpassage/${book}/${chapter}`)
      .then(res => res.json())
      .then(res => {
        setPassage(res);
      });
  }

  return <div className="content-wrapper">
    <MemorizePopup 
      selectedText={selectedText} 
      selectedVerse={selectedVerse} 
      book={book} 
      chapter={chapter}
      nextVerse={nextVerse} 
      replayVerse={replayVerse} 
      setShowMemPopup={props.setShowMemPopup} 
      showMemPopup={props.showMemPopup} />
    <div className="passage-wrapper">
    { passage.map((p, key) => {
        return <Verse key={key}
                 setSelectedVerse={setSelectedVerse}
                 setSelectedText={setSelectedText}
                 setShowMemPopup={props.setShowMemPopup}
                 book={p.book}
                 chapter={p.chapter}
                 verse={p.verse}
                 text={p.text} />
    })}
    </div>
  </div>;
}

export default PassageLayout;
