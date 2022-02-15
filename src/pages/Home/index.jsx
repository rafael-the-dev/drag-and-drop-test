import Button from '../../components/Button';
import './styles.css'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from '../../config'
import { useState } from 'react';
import { useMemo } from 'react';

const Home = () => {
    const [ number, setNumber ] = useState(0);

    const [, drop] = useDrop(
        () => ({
          accept: ItemTypes.BUTTON,
          drop: (monitor) => {
              console.log(monitor.number)
              setNumber(oldNumber => oldNumber + monitor.number);
          }
        }),
        []
    );

    const buttons = useMemo(() => (
        <>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0].map((item, index) => (
                    <Button 
                        label={item} 
                        key={index}
                    />
                )) 
            }
        </>
    ), []);

    return (
        <main>
            <div className='flex flex-wrap px justify-between pt-8'>
                { buttons }
            </div>
            <section className='mt-12 px'>
                <h1 
                    className='text-4xl font-bold text-center text-slate-100 py-16 mx-auto 
                    rounded-xl current-number'
                    ref={drop}>
                    { number }
                </h1>
            </section>
        </main>
    );
};

export default Home;