import './style.css';

const PizzaVarient = ({name, place, onChange, check}) => {
    const thisId = name + place;
    return ( 
        <div style={{position: 'relative'}} className="wrap">
            <input className='input' type='radio' name={place} defaultChecked={check} placeholder={name} id={thisId} onClick={onChange}/>
            <label className='label' htmlFor={thisId}>{name}</label>
        </div>
     );
}
 
export default PizzaVarient;