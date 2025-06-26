import { useState } from 'react';
import styles from './LuckyNumber.module.css';

export function LuckyNumber() {
  const [luckyNumber, setLuckyNumber] = useState(0);
  const [numbersDrawn, setNumbersDrawn] = useState([]);
  const [message, setMessage] = useState('');

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * 40) + 1;

    if (numbersDrawn.includes(randomNumber)) {
      setMessage('Já foi sorteado!');
    } else {
      setNumbersDrawn([...numbersDrawn, randomNumber]);
      setLuckyNumber(randomNumber);
      setMessage('');
    }
  }  return (
    <div className={styles.container}>
      {luckyNumber === 0 ? (
        <h1> Lucky Number 🎲</h1>
      ) : (
      <h1>Lucky Number = {luckyNumber}</h1>

      )}

      {message && <p style={{ color: 'red' }}>{message}</p>}

      <button className={styles.button} onClick={handleClick}>
        I'm Feeling Lucky Today! Sortear...
      </button>

      {numbersDrawn.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Números sorteados:</strong> {numbersDrawn.join(', ')}
        </div>
      )}
    </div>
  );
}
