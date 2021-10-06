import {useEffect, useState} from 'react'

function Header() {
    let [time, setTime] = useState(new Date())
    let monthsArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    let day = time.getDay()
    let month = monthsArray[time.getMonth()]
    let year = time.getFullYear()
    useEffect(() => {
        let change = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return function () {
            clearInterval(change)
        }
    })
    return (
        <div className=' row align-items-center text-center m-0 header fs-4'>
            <div className='col-lg-1 col-md-2 col-sm-2 col-xs-2'>
                {time.toLocaleTimeString().slice(0, -3)}
            </div>
            <div className='col-lg-1 col-md-2 col-sm-2 col-xs-2'>
                <Weather/>
            </div>
            <div className='col-lg-7 col-md-4 col-sm-3 col-xs-4'>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-5 col-xs-5 pe-4'>
                {`${day} ${month} ${year}`}
            </div>
        </div>
    )
}

function Weather() {
    const [temperature, setTemperature] = useState('--')
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=b243937dc841410ec59395fcb9347ec9')
            .then(function (resp) {
                return resp.json()
            })
            .then(data => {
                setTemperature(Math.trunc(+data.main.temp - 273.15))
            })
    }, [])
    return <div>{temperature}℃</div>
}

export default Header;
