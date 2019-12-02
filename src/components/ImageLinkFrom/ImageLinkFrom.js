import React from 'react';
import './ImageLinkFrom.css'

const ImageLinkFrom = ({onInputChange, onBtnSubmit}) => {
    return (
        <div>
            <p className='f2 mt6'>
                {'This App will detect Face form your Pictures.'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} placeholder="Please type/paste your image url.." />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-blue btn-grad" onClick={onBtnSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkFrom;