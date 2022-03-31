import './Persons.component.css';

const Persons = (props) => {
    const { name, city, gender } = props;
    return (
        <div className='person-card'>  
            <h2>{name}</h2>
            <p>{city}</p>
            <p>{gender}</p>
        </div>
    )
}

export default Persons;