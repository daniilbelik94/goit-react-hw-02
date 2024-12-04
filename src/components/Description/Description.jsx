import styles from './description.module.css';

export default function Description() {
  return (
    <div className={styles.description}>
          <h1 className={styles.title}>Sip Happens Café</h1>
          <div style={{ paddingTop: '16.667%', position: 'relative', marginBottom: '25px' }}>
        <iframe
          src="https://gifer.com/embed/l9"
          width="320"
          height="180"
          style={{ position: 'absolute', top: 0, left: -160 }}
          allowFullScreen
          title="Gifer Animation"
        ></iframe>
      </div>
      <p className={styles.text}>
        Please leave your feedback <span>about</span> our service <span>by</span> selecting one <span>of the</span> options <span>below</span>.
      </p>
    </div>
  );
}
