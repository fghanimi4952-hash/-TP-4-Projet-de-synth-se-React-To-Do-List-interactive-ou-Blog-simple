import './TodoItem.css';

function TodoItem({ tache, changerEtat, supprimerTache }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={tache.terminee}
        onChange={() => changerEtat(tache.id)}
        className="todo-checkbox"
      />
      <span 
        className={`todo-text ${tache.terminee ? 'completed' : ''}`}
        style={{ textDecoration: tache.terminee ? 'line-through' : 'none' }}
      >
        {tache.texte}
      </span>
      <button 
        onClick={() => supprimerTache(tache.id)}
        className="todo-delete-button"
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;

