import { Link, useNavigate, useLocation } from 'react-router-dom';

const DogDelete = ({deleteHandler}) => {
    const location = useLocation();
    const dog = location.state.dog;

    const handleYes = async () => {
        deleteHandler(dog.id)
        navigate('/dogs');
    }

    const handleNo = () => {
        navigate('/dogs');
    }

    return (

        <section>
            <h1>Delete {dog.name}?</h1>
            <div>
              <button onClick={handleYes}>Yes</button>
              <button onClick={handleNo}>No</button>
            </div>
        </section>

    )
}

export default DogDelete