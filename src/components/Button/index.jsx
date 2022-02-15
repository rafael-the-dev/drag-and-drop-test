import './styles.css'
import { forwardRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from '../../config'

const Button = forwardRef(({ label }, ref) => {
    const [ { isDragging }, drag ] = useDrag(() => ({
        type: ItemTypes.BUTTON,
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
    }));

    return (
        <button
            className="py-4 px-8 mb-4 text-slate-100 button"
            ref={drag}
            >
            { label }
        </button>
    ); 
});

export default Button;