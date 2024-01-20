import { useSpeechSynthesis } from 'react-speech-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import  { useEffect, useState } from 'react'
import  './translate.css'

const url = 'https://translator163.p.rapidapi.com/languages';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cc754b3c05msh9f955300323426fp1a6b25jsn0dbe27a7f142',
		'X-RapidAPI-Host': 'translator163.p.rapidapi.com'
	}
};
const URL = 'https://translate281.p.rapidapi.com/';

function Translate (){        
  const [language, setLanguague] = useState(null)
  const [initialState, setInitialState] = useState('hola como estas') 
  const [valueLanguage , setValueLanguage] = useState('fr')
  const [translateText, setTranslatetext] = useState()
  
  const { speak } = useSpeechSynthesis();

  const playAudio = (value) => {
    speak({ text: value });
  };
  
  const OPTIONS = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'cc754b3c05msh9f955300323426fp1a6b25jsn0dbe27a7f142',
      'X-RapidAPI-Host': 'translate281.p.rapidapi.com'
    },
    body: new URLSearchParams({
      text: initialState,
      from: 'auto',
      to: valueLanguage
    })
};

 async function apiCall (){
    try {
      const response = await fetch(URL, OPTIONS);
      const result = await response.json();
      setTranslatetext(result.response)
    } catch (error) {
      console.error(error);
    }
}

 useEffect(()=>{
    fetch(url, options)
    .then(response => response.json())
    .then(result => setLanguague(result.languages))  
    .catch(error => console.error(error)) 
},[])

const handleTextareaChange = (event) => {
        setInitialState(event.target.value);
};

const handleValue = (event) => {
  setValueLanguage(event.target.value)
}

const handleCopyClick = (element) => {
  navigator.clipboard.writeText(element);
};
 
    return( 
      
    <div className='translate-content'>
       <form name='form-translate' className='form-translate'>
            <fieldset className='fieldset-lenguage'>        
                {language == null
                ? null
                : <select onChange={handleValue}  name='select'>
                {language.map((element, index) =>{
                  return <option  key={index}  value={element.code}>{element.name}</option>
                })}
            </select>
                }
            </fieldset>
            <textarea name='text-translate' value={initialState} onChange={handleTextareaChange} className='text-translate' cols={40} rows={10} maxLength={500}></textarea>
            <fieldset className='fieldset-translate-btn'> 
                <button type='button' onClick={()=>handleCopyClick(initialState)}><FontAwesomeIcon icon={faCopy}/></button>
                <button type='button' onClick={()=>playAudio(initialState)} ><FontAwesomeIcon icon={faVolumeHigh}/></button>
                <button className='btn-41' type='button' onClick={apiCall}>Translate</button>
            </fieldset>
       </form>
       <form className='form-translated'>
          <textarea className='translated-text' value={translateText} name="result-translate" id="" cols={40} rows={10}></textarea>
        <fieldset className='translated-fieldset'>
          <button type='button' className='btn-89'><FontAwesomeIcon icon={faCopy} onClick={()=>handleCopyClick(translateText)}/></button>
          <button type='button'onClick={()=>playAudio(translateText)} ><FontAwesomeIcon icon={faVolumeHigh}/></button>
        </fieldset>
       </form>
    </div>
    )

}

export {Translate}