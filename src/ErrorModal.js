import classes from './ErrorModal.module.css';
import Card from './Card';


const ErrorModal = (props)=>{
  return(
    <div className={classes.backdrop}>
    <Card className={classes.modal}>
      <header className={classes.header}>
      <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
      <h>{props.message}</h>
      </div>
      <footer className={classes.footer}>
      <button onClick={props.error}>Okay</button>
      </footer>
    </Card>
    </div>

  )
}

export default ErrorModal;