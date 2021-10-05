import css from './style.module.css'
import React from "react"

export function Table ({data, value}) {
    if (!value) {
        return <div>Введите название города</div>;
      }
    return (
        <table className={css.table}>
        <tr className={css.tr} >
          <th className={css.th}>Город</th>
          <th className={css.th}>Температруа</th>
          <th className={css.th}>Ощущается</th>
          <th className={css.th}>Давление</th>
          </tr>
         
          <tr className={css.td} >
          <td className={css.td}>{data.town}</td>
          <td className={css.td}>{data.temp}</td>
          <td className={css.td}>{data.feels}</td>
          <td className={css.td}>{data.pressure}</td>
          </tr>
        </table>
    )
}
