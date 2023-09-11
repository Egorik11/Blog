import styles from './Hero.module.scss'
import { Button } from '../Button'

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Meaningful investments in Main Street businesses
          </h1>
          <p>Browse vetted investment offerings in communities all over the US.</p>
          <Button className={styles.button} spacing='2px' type='#5E4DCD'> Get Started </Button>
        </div>
      </div>
    </div>
  )
}

export {Hero}
