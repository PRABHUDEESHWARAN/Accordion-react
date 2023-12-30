import React from 'react'
import './styles.css'
import data from './data';
import { useState } from 'react';
const Accordion = () => {
  const [Selected, setSelected] = useState(null);
  const [EnableMultiSelection, setEnableMultiSelection] = useState(false);
  const [MultiSelect, setMultiSelect] = useState([]);
  function handleSingleSelection(getCurrId) {
    Selected === getCurrId ? setSelected(null) : setSelected(getCurrId);

  }
  function handleMultiSelection(getCurrId) {
    const cpyArray = [...MultiSelect];
    const getIndexOfId = cpyArray.indexOf(getCurrId);
    getIndexOfId === -1 ? cpyArray.push(getCurrId) : cpyArray.splice(getIndexOfId, 1);
    setMultiSelect(cpyArray);
  }
  function checkMultiSelection() {
    setEnableMultiSelection(!EnableMultiSelection);
    setSelected(null);
  }


  return (
    <div className="Wrapper">
      <button className='but1' onClick={() => checkMultiSelection()}>Enable multi selection</button>
      <div className="Accordion">

        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="Item">
              <div className="question" onClick={EnableMultiSelection === true ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
                <h3>{dataItem.question}</h3>
              </div>
              {Selected === dataItem.id || MultiSelect.indexOf(dataItem.id) !== -1 ? <div className='answer'>{dataItem.answer}</div> : null}
            </div>
          ))

        ) : (<div>No data found</div>)
        }
      </div>
    </div>
  )
}

export default Accordion;
