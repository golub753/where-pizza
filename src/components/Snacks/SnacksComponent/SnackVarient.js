import '../../Pizza/PizzaCompontent/style.css';

const SnackVarient = ({name, place, onChange, check}) => {
    const thisId = name + place;
    return ( 
        <div style={{position: 'relative'}}>
            <input className='input' type='radio' name={place} defaultChecked={check} placeholder={name} id={thisId} onClick={onChange}/>
            <label className='label' htmlFor={thisId}>{name}</label>
        </div>
     );
}
 
export default SnackVarient;