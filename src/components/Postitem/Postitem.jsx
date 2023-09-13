import styles from './Postitem.module.scss'

function Postitem({img}) {
  console.log(img);
  return (
    <div className={styles.box}>
      <img src={img} alt="" />
    </div>
  )
}

export {Postitem}