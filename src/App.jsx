import "./styles/theme.css";
import "./styles/global.css";
import { MyText } from "./components/MyText";
export default function App() {
    
   const text = [{title: "Meu titulo 1", text:"Meu texto 1"},
                 {title: "Meu titulo 2", text:"Meu texto 2"},
                 {title: "Meu titulo 3", text:"Meu texto 3"},
                 {title: "Meu titulo 4", text:"Meu texto 4"},
                 {title: "Meu titulo 5", text:"Meu texto 5"}];
   
  return (
    <div className="container">
      <h1>Meu App</h1>
      <div className="text-container">
        {text.map((item) => (
          <MyText title={item.title}  >
            {item.text}
          </MyText>
        ))}
      </div>
    </div>

  );
}
