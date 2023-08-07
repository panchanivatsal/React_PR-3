import React ,{useState} from 'react';
import AllData from './AllData'
import './style.css'
function App() {
    // ALL data show this code
  const [images,setImage]  = useState(AllData)

  const allItem =()=>{
    const finalData = AllData.filter((value)=>{
      return value;
    })
    setImage(finalData)
  }
  // Only POGO
  const pogo =(categoryItem)=>{
    const finalData = AllData.filter((value)=>{
      return value.category == categoryItem
    })

    setImage(finalData)
  }
  // only C/N
  const cn =(categoryItem)=>{
    const finalData = AllData.filter((value)=>{
      return value.category == categoryItem
    })

    setImage(finalData)
  }
  // Only Nick
  const Nick =(categoryItem)=>{
    const finalData = AllData.filter((value)=>{
      return value.category == categoryItem
    })
    setImage(finalData)
  }
  
  return (
    <>
    <div className="container my-3" >
      <div className="row justify-content-between align-items-center">
        <div className="col-3">
        <button className='btn btn-primary' onClick={allItem}>All</button>
        </div>
        <div className="col-3">
          
        <img src="./Img/pogo.png" alt="" className="img-1" />
        <button className='btn btn-primary' onClick={()=>pogo('pogo')}>POGO</button>
        </div>
        <div className="col-3">
        <img src="./Img/250.png" alt="" className="img-1 img-2" /> 
        <button className='btn btn-primary btn' onClick={()=>cn('cn')}>C / N</button>
        </div>
        <div className="col-3">
        <img src="./Img/Nick.png" alt="" className="img-1" />
        <button className='btn btn-primary' onClick={()=>Nick('nick')}>Nick</button>
        </div>
      </div>
    </div>



    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {
          images.map((value)=>{
            return (
             <div className="col mt-3">
                <img src={value.image} className='img-fluid' alt="image" />
             </div>
            );
          })
        }
      </div>
    </div>
    </>


  );
}

export default App;
