import {FaStar,FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

const Rating = ({value, text}) => {
    const stars = [];
for (let i = 0; i < 5; i++) {
  if (value >= i + 1) {
    stars.push(<FaStar key={i} />);
  } else if (value >= i + 0.5) {
    stars.push(<FaStarHalfAlt key={i} />);
  } else {
    stars.push(<FaRegStar key={i} />);
  }
}
  return (
    <div className='rating'>
        <span>
            {/* {value >=1 ?<FaStar/> : value>=0.5? <FaStarHalfAlt/>:<FaRegStar/> }
            {value >=2 ?<FaStar/> : value>=1.5? <FaStarHalfAlt/>:<FaRegStar/> }
            {value >=3 ?<FaStar/> : value>=2.5? <FaStarHalfAlt/>:<FaRegStar/> }
            {value >=4 ?<FaStar/> : value>=3.5? <FaStarHalfAlt/>:<FaRegStar/> }
            {value >=5 ?<FaStar/> : value>=4.5? <FaStarHalfAlt/>:<FaRegStar/> }
        
         */}
         {stars}
        </span>
        <span className="rating-text">{text&& text}</span>
    </div>
  )
}

export default Rating