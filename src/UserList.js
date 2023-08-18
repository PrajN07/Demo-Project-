
import Card from './Card'
import classes from './UserList.module.css';

const UserList = (props) => {
  return (
    <Card className={classes.users}>
    <ul>
      {props.userData.map((data) => (
        <li>

          {data.name} ({data.age} years old)
        </li>
      ))}
    </ul>
    </Card>
  );
};
export default UserList;
