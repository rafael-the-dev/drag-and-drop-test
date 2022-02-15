import Button from '../../components/Button';
import './styles.css'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from '../../config'

const Home = () => {
    
    const [, drop] = useDrop(
        () => ({
          accept: ItemTypes.BUTTON,
          drop: (monitor) => {
              console.log(monitor)
          }
        }),
        []
      )

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
                <h1 
                    className='text-4xl font-bold text-center text-slate-100 py-16 mx-auto 
                    rounded-xl current-number'
                    ref={drop}>
                    0
                </h1>
            </section>
        </main>
    );
};

export default Home;