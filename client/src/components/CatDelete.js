import { useLocation } from 'react-router-dom';

const CatDelete = ({deleteHandler}) => {
    const location = useLocation();
    const cat = location.state.cat;

    const handleYes = async () => {
        deleteHandler(cat.id)
        navigate('/cats');
    }

    const handleNo = () => {
        navigate('/cats');
    }

    return (

        <section>
            <h1>Delete {cat.name}?</h1>
            <div>
              <button onClick={handleYes}>Yes</button>
              <button onClick={handleNo}>No</button>
            </div>
        </section>

    )
}

export default CatDelete