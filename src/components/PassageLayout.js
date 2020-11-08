import React, { useEffect, useState } from 'react';
import MemorizePopup from './MemorizePopup';
import Verse from './Verse';

function PassageLayout(props) {
  const [passage, setPassage] = useState([]);
  const { book, chapter } = props;
  const [selectedText, setSelectedText] = useState(''); 
  const [showMemPopup, setShowMemPopup] = useState(false);

  useEffect(() => {
    if (book && chapter) {
      handleSelectPassage(book, chapter);
    }
  }, [book, chapter]);

  const handleSelectPassage = (book, chapter) => {
    props.reference(book, chapter);
    fetch(`http://memorize.toewsweb.net/rest.php/getpassage/${book}/${chapter}`)
      .then(res => res.json())
      .then(res => {
        setPassage(res);
      });
  }

  return <div className="content-wrapper">
    <MemorizePopup selectedText={selectedText} setShowMemPopup={setShowMemPopup} show={showMemPopup} />
    <div className="passage-wrapper">
    { passage.map(p => {
        return <Verse setSelectedText={setSelectedText} setShowMemPopup={setShowMemPopup} book={p.book} chapter={p.chapter} verse={p.verse} text={p.text} />
    })}
    </div>
  </div>;
}

export default PassageLayout;
