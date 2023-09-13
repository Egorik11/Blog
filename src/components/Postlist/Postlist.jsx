import styles from './Postlist.module.scss' 

function Postlist({children}) {
  return (
    <div className={styles.container}>
      <h1>Offerings open for investment</h1>
      <p>Explore pre-vetted investment opportunities available in a growing number of industry categories.</p>
      <div className={styles.image_container}>
        {children}
      </div>
    </div>
  )
}

export {Postlist}