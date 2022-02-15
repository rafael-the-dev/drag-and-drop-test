import './styles.css'

const Button = ({ label }) => {
    return (
        <button
            className="py-4 px-8 mb-4 text-slate-100 button"
            >
            { label }
        </button>
    ); 
};

export default Button;