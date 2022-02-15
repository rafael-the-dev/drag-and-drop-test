import Button from '../../components/Button';
import './styles.css'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from '../../config'
import { useState } from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';

const Home = () => {
    const [ number, setNumber ] = useState(0);

    const resetHandler = useCallback(() => setNumber(0), []);

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
            <h1 
                className='text-2xl px font-bold text-center text-slate-100 mt-12 mb-6 mx-auto 
                rounded-xl'
                >
                    Drag and drop a button in the box to sum
            </h1>
            <div className='flex flex-wrap px justify-between pt-8'>
                { buttons }
            </div>
            <div className='mt-6 px'>
                <button 
                    className='px-12 py-3 bg-red-700 text-white'
                    onClick={resetHandler}>
                    Reset
                </button>
            </div>
            <section className='my-12 px'>
                <h2 
                    className='text-4xl font-bold text-center text-slate-100 py-16 mx-auto 
                    rounded-xl current-number'
                    ref={drop}>
                    { number }
                </h2>
            </section>
        </main>
    );
};

export default Home;