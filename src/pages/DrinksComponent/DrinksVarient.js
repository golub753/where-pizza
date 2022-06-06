import '../PizzaCompontent/style.css';

const DrinksVarient = ({name, place, onChange}) => {
    const thisId = name + place;
    return ( 
        <div style={{position: 'relative'}}>
            <input className='input' type='radio' name={place} placeholder={name} id={thisId} onClick={onChange}/>
            <label className='label' htmlFor={thisId}>{name.toUpperCase()}</label>
        </div>
     );
}
 
export default DrinksVarient;