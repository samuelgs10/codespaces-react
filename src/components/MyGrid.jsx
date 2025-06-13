import styles from "./MyGrid.module.css";

export function MyGrid() {
  return (
    <div className={styles.container}>
      <header className={styles.header1}>
        <img
          src="https://picsum.photos/200"
          alt="Imagem aleatória do Picsum"
          className={styles.icon}
        />
        <h1 className={styles.title}>Foco, Força, Fé</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {/* My Text 0 */}
          <div className={styles.card}>
            <img
              src="https://picsum.photos/200/300?grayscale"
              alt="Imagem 0"
              className={styles.image}
            />
            <h2>My Text 0</h2>
            <p>
              Esta imagem tem efeito em escala de cinza. Ideal para efeitos
              visuais minimalistas e clássicos.
            </p>
          </div>

          {/* My Text 1 */}
          <div className={styles.card}>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="Imagem 1"
              className={styles.image}
            />
            <h2>My Text 1</h2>
            <p>
              Imagem aleatória com base em uma seed. Útil para gerar visuais
              consistentes em testes.
            </p>
          </div>

          {/* My Text 2 */}
          <div className={styles.card}>
            <img
              src="https://picsum.photos/200/300/?blur"
              alt="Imagem 2"
              className={styles.image}
            />
            <h2>My Text 2</h2>
            <p>
              Imagem com efeito de desfoque. Perfeita para fundos ou elementos
              que não devem chamar atenção.
            </p>
          </div>

          {/* My Text 3 */}
          <div className={styles.card}>
            <img
              src="https://picsum.photos/id/870/200/300?grayscale&blur=2"
              alt="Imagem 3"
              className={styles.image}
            />
            <h2>My Text 3</h2>
            <p>
              Uma combinação de desfoque e escala de cinza. Traz um efeito
              estético elegante e suave.
            </p>
          </div>

          {/* My Text 4 */}
          <div className={styles.card}>
            <img
              src="https://picsum.photos/200/300/?blur=2"
              alt="Imagem 4"
              className={styles.image}
            />
            <h2>My Text 4</h2>
            <p>
              Efeito de desfoque mais intenso. Ideal para destacar o texto e
              deixar a imagem como fundo secundário.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer2}>
        <div className={styles.footerContent}>
          <div>
            <p>IFRN - Campus Macau</p>
            <p>Curso Técnico em Informática</p>
            <p>Programação para Internet 2025</p>
          </div>
          <p className={styles.prof}>Aluno. Samuel Gomes Silva</p>
          <div className={styles.icons}>
            <button>📘</button>
            <button>📸</button>
            <button>📞</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
