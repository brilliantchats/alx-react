import React from 'react';
import './Notifications.css';
import close from './close-icon.png';
import {getLatestNotification} from './utils.js';

export default function Notifications () {
    return (
        <div className='Notifications'>
            <button 
              type='button'
              aria-label='Close'
              style={{display: 'block', marginRight: '0px', marginLeft: 'auto'}}
              onClick={() => console.log('Close button has been clicked')}
            >
                <img src={close} alt='Close' style={{width: '8px', height: '8px'}}/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent'>
                    <div dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}>

                    </div>
                </li>
            </ul>
        </div>
    )
} 