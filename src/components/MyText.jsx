import styles from './MyText.module.css';  

export function MyText(){
  return ( 
  <div className={styles.container}>
  <div className={styles.div}>
      <h1 className={styles.title}>Meu primeiro React App</h1>  
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni
        doloribus alias molestias. Odit non dolorum impedit! Quos numquam minus
        ipsa laborum voluptate animi magnam nisi in veritatis, suscipit
        voluptatibus!
      </p>
    </div>
    </div>
  );
}