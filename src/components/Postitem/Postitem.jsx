import styles from './Postitem.module.scss'

function Postitem({img}) {
  return (
    <div className={styles.box}>
      <img src={img} alt="" />
    </div>
  )
}

export {Postitem}