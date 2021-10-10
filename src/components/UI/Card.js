import classes from './Card.module.css'

const Card = ({ className, children }) => (
  <section
    className={`${classes.card} ${className || ''}`}
  >
    {children}
  </section>
)

export default Card
