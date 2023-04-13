import styles from './styles/appStyles.module.css'
function App() {
    
    return (
        <div>
      <h1 className={styles.success}>Success</h1>
      <h1 style={{fontSize: '50px', color: 'red'}}>Error</h1>
    </div>
      );
  
}

export default App;
