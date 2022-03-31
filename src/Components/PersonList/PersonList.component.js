import './PersonList.component.css';
import Persons from '../Persons/Persons.component';



const PersonList = () => {
    return (
        <div className='person-list-container'>
            <Persons name='Gal Gadot' city='Los Angeles' gender='Female'/>
            <Persons name='Lebron James' city='Los Angeles' gender='Male'/>
            <Persons name='Leo Messi' city='Paris' gender='Male'/>
        </div>
    )
}

export default PersonList;