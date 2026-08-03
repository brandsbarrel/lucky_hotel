import styles from './DivingLine.module.css';

const DividingLine = ({ height = '15px' }) => {
  return (
    <div className={styles.whiteLine} style={{ height }} />
  );
};

export default DividingLine;
