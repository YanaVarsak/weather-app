import css from './style.module.css'
export const Dropdown = ({value, onChange}) => {
    return (
        <section className={css.container}>
  <div className={css.dropdown}>
    <select name="one" className={css.dropdown_select}>
      <option value="">Select…</option>
      <option value="1">Option #1</option>
      <option value="2">Option #2</option>
      <option value="3">Option #3</option>
    </select>
  </div>
  </section>
    )
}