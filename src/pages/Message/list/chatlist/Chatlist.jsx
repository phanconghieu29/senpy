import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './Chatlist.css';
import AddUser from './adduser/AddUser';
import images from '../../../../assets/images';

const Chatlist = () => {
    const [addMode, setAddMode] = useState(false);

    return (
        <div className='chatList'>
            <div className='search'>
                <div className='searchBar'>
                    <FontAwesomeIcon icon={faSearch} aria-label="Search" style={{color: '#fcfcfc'}}/>
                    <input type='text' placeholder="Search..." />
                </div>
                <FontAwesomeIcon 
                    icon={addMode ? faMinus : faPlus} 
                    aria-label="Add" 
                    className='add-icon icon' 
                    onClick={() => setAddMode(prev => !prev)} 
                />
            </div>
            <div className='item'>
                <img src={images.huit_logo} alt="User profile" />
                    <div className='texts'>
                        <span>Bui Xuan Loc</span> {/*sau nay la ten mentor hoac ten mentee*/}
                        <p>Hello</p>{/*sau nay la tin nhan moi nhat*/}
                    </div>
            </div>

            <div className='item'>
                <img src={images.huit_logo} alt="User profile" />
                    <div className='texts'>
                        <span>Bui Xuan Loc</span> {/*sau nay la ten mentor hoac ten mentee*/}
                        <p>Hello</p>{/*sau nay la tin nhan moi nhat*/}
                    </div>
            </div>

            <div className='item'>
                <img src={images.huit_logo} alt="User profile" />
                    <div className='texts'>
                        <span>Bui Xuan Loc</span> {/*sau nay la ten mentor hoac ten mentee*/}
                        <p>Hello</p>{/*sau nay la tin nhan moi nhat*/}
                    </div>
            </div>

            <div className='item'>
                <img src={images.huit_logo} alt="User profile" />
                    <div className='texts'>
                        <span>Bui Xuan Loc</span> {/*sau nay la ten mentor hoac ten mentee*/}
                        <p>Hello</p>{/*sau nay la tin nhan moi nhat*/}
                    </div>
            </div>

            <div className='item'>
                <img src={images.huit_logo} alt="User profile" />
                    <div className='texts'>
                        <span>Bui Xuan Loc</span> {/*sau nay la ten mentor hoac ten mentee*/}
                        <p>Hello</p>{/*sau nay la tin nhan moi nhat*/}
                    </div>
            </div>

            <div className='item'>
                <img src={images.huit_logo} alt="User profile" />
                    <div className='texts'>
                        <span>Bui Xuan Loc</span> {/*sau nay la ten mentor hoac ten mentee*/}
                        <p>Hello</p>{/*sau nay la tin nhan moi nhat*/}
                    </div>
            </div>

            <div className='item'>
                <img src={images.huit_logo} alt="User profile" />
                    <div className='texts'>
                        <span>Bui Xuan Loc</span> {/*sau nay la ten mentor hoac ten mentee*/}
                        <p>Hello</p>{/*sau nay la tin nhan moi nhat*/}
                    </div>
            </div>
            {addMode && <AddUser/>}
        </div>
    );
};

export default Chatlist;
