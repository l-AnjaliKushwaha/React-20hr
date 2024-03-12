import styles from "../Item.module.css";

const Item = (props) => {
  return (
    <li className={`${styles["food-items"]} list-group-item food-items`}>
      {props.foodItem}
    </li>
  );
};
export default Item;
