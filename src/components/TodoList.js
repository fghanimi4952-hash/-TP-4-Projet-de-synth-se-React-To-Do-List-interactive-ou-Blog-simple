import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ taches, changerEtat, supprimerTache }) {
  if (taches.length === 0) {
    return <p className="no-tasks">Aucune tâche pour le moment. Ajoutez-en une !</p>;
  }

  return (
    <ul className="todo-list">
      {taches.map((tache) => (
        <TodoItem
          key={tache.id}
          tache={tache}
          changerEtat={changerEtat}
          supprimerTache={supprimerTache}
        />
      ))}
    </ul>
  );
}

export default TodoList;

