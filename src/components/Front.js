import React,{useEffect,useState} from 'react'
import './front.css'
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const Front = ()=>{
    const [search,setSearch]=useState('delhi');
    const [city,setCity]=useState(null);

    useEffect(()=>{
        const fetchapi =async ()=>{
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=58d78e8ecffccebac1ee164a679c7bad`;
            const data = await fetch(url);
            const datajson = await data.json()
            setCity(datajson.main);
            // console.log(datajson);
       
       
        };
        fetchapi();
    },[search])

    return(
        <> 
        <div className='main'>
            <div className='containe'>
                <div className='search'>
                    <input type={Text} placeholder='search'
                        className=''
                        value={search}
                        onChange={(e)=>{setSearch(e.target.value)}}
                    />

                </div>
                
                {!city ? (<p id='data'>No data found</p>)
                 : (<div>
                        <div className='content'>
                          <h3>{search}</h3>
                   

                         </div>
                     <div className='temp'>
                       
                          <p>{city.temp} C</p>
                      
                      </div>
                      <div className='minmax'>
                          <p id='min'>{city.temp_min} C </p>
                          <p id='max'>{city.temp_max} C</p>
                      </div>
                    </div>)}

            
                    </div>
        </div>
        
    </>
    )
}

export default Front;