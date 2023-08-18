import classes from './Button.module.css';

function Button (){
  return(
    <div>
      <button type="submit" className={classes.button} >Add User</button>
    </div>
  )
}
export default Button;