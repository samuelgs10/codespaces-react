import styles from "./MyTextList.module.css";
import { MyText } from "./MyText";

export function MyTextList({ texts }) {
  const text = [
    { title: "Meu titulo 1", text: "Meu texto 1" },
    { title: "Meu titulo 2", text: "Meu texto 2" },
    { title: "Meu titulo 3", text: "Meu texto 3" },
    { title: "Meu titulo 4", text: "Meu texto 4" },
    { title: "Meu titulo 5", text: "Meu texto 5" },
  ];

  return (
 <>Add commentMore actions
      <h1 className={styles.title}>Lista de Textos</h1>
      <div className={styles.container}>
        {texts.map((text, index) => {
          return (
            <MyText key={index} title={`${text.title} ${index + 1}`}>
              {text.text}
            </MyText>
          );
        })}
      </div>
    </>
  );
}