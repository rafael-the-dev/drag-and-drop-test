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
            <section className='mt-12 px'>
                <h1 className='text-4xl font-bold text-center text-slate-100 py-16 mx-auto 
                rounded-xl current-number'>0</h1>
            </section>
        </main>
    );
};

export default Home;