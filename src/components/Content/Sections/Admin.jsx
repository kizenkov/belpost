import arrowBack from './../../../files/arrowBack.png'
import {NavLink} from 'react-router-dom'
import post from '../../../files/post.png'
import {useHistory} from 'react-router-dom'

function Admin() {
    let history = useHistory()
    return (
        <div className='structure'>
            <span>АДМИНИСТРАТИВНЫЕ ПРОЦЕДУРЫ</span>
            <img onClick={() => history.goBack()} className='back' src={arrowBack} alt='back'/>


            <div className='mainStructureItems'>
                <div>
                    <div className='item'>
                        <NavLink to='/page1'>
                            <div className='text'>
                                СТРАНИЦА 1
                            </div>
                        </NavLink>
                        <img src={post} alt='post'/>
                    </div>
                    <div className='item'>
                        <NavLink to='/'>
                            <div className='text'>
                                ПРОЦЕДУРА 1
                            </div>
                        </NavLink>
                        <img src={post} alt='post'/>
                    </div>
                    <div className='item'>
                        <NavLink to='/'>
                            <div className='text'>
                                ПРОЦЕДУРА 2
                            </div>
                        </NavLink>
                        <img src={post} alt='post'/>
                    </div>
                </div>
                <div className=''>
                    <div className='item'>
                        <NavLink to='/'>
                            <div className='text'>
                                ПРОЦЕДУРА 3
                            </div>
                        </NavLink>
                        <img src={post} alt='post'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin