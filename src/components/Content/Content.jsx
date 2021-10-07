import admin from '../../files/admin.png'
import managers from '../../files/managers.png'
import graphic from '../../files/graphic.png'
import slider2 from '../../files/slider2.png'
import slider3 from '../../files/slider3.png'
import structure from '../../files/structure.png'
import {NavLink, Route} from 'react-router-dom'
import Admin from './Sections/Admin'
import Managers from './Sections/Managers'
import Graphic from './Sections/Graphic'
import Structure from './Sections/Structure'
import Page1 from './Sections/Pages/Page1'

function Content() {
    return (
        <div className='content'>
            <Slider/>
            <div className='mainStructure'>
                <Route exact path='/' render={() => <MainStructure/>}/>
                <Route path='/admin' render={() => <Admin/>}/>
                <Route path='/managers' render={() => <Managers/>}/>
                <Route path='/graphic' render={() => <Graphic/>}/>
                <Route path='/structure' render={() => <Structure/>}/>
                <Route path='/page1' render={() => <Page1/>}/>
            </div>
        </div>
    )
}

function Slider() {
    return (
        <div className='slider'>
            <div id='carouselExampleControls' className='carousel slide' data-bs-ride='carousel'>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img src={slider2} className='d-block w-100' alt='...'/>
                    </div>
                    <div className='carousel-item'>
                        <img src={slider3} className='d-block w-100' alt='...'/>
                    </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls'
                        data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleControls'
                        data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    )
}

function MainStructure() {
    return (
        <div className='mainStructureItems'>
            <div>
                <div className='item'>
                    <NavLink to='/admin'>
                        <div className='text'>
                            АДМИНИСТРАТИВНЫЕ ПРОЦЕДУРЫ
                        </div>
                    </NavLink>
                    <img src={admin} alt='admin'/>
                </div>
                <div className='item'>
                    <NavLink to='/managers'>
                        <div className='text'>
                            РУКОВОДСТВО
                        </div>
                    </NavLink>
                    <img src={managers} alt='managers'/>
                </div>
                <div className='item'>
                    <NavLink to='/graphic'>
                        <div className='text'>
                            ГРАФИК ПРИЁМА
                        </div>
                    </NavLink>
                    <img src={graphic} alt='graphic'/>
                </div>
            </div>
            <div className=''>
                <div className='item'>
                    <NavLink to='/structure'>
                        <div className='text'>
                            СТРУКТУРА
                        </div>
                    </NavLink>
                    <img src={structure} alt='structure'/>
                </div>
            </div>
        </div>
    )
}

export default Content