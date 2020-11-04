import React, { useEffect, useState } from 'react';

function Verse(props) {
  return <div className="verse-wrapper">
    <div className="verse-ref">{props.verse}</div> <div className="verse-text">{props.text}</div>
  </div>;
}


function PassageLayout(props) {
  const [passage, setPassage] = useState([]);
  const { book, chapter } = props;

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
    <div className="passage-wrapper">
    { passage.map(p => {
        return <Verse book={p.book} chapter={p.chapter} verse={p.verse} text={p.text} />
    })}
    </div>
  </div>;
}

export default PassageLayout;
