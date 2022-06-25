import '../../Pizza/PizzaCompontent/style.css';

const DrinksVarient = ({name, place, onChange, check}) => {
    const thisId = name + place;
    return ( 
        <div style={{position: 'relative'}} className="wrap">
            <input className='input' type='radio' name={place} placeholder={name} defaultChecked={check} id={thisId} onClick={onChange}/>
            <label className='label' htmlFor={thisId}>{name.toUpperCase()}</label>
        </div>
     );
}
 
export default DrinksVarient;