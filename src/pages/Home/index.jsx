import Button from '../../components/Button';
import './styles.css'

const Home = () => {
    return (
        <main>
            <div className='flex flex-wrap px justify-between pt-8'>
                { [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0].map((item, index) => (
                    <Button 
                        label={item} 
                        key={index}
                    />
                )) }
            </div>
        </main>
    );
};

export default Home;