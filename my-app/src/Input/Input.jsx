import css from './style.module.css'

export const Input = ({value, onChange}) => {
    return (
        <div>
            <input value = {value} onChange = {onChange} className={css.input} />
            
        </div>
        
    )
}



