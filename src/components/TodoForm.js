import { useState } from 'react';
import './TodoForm.css';

function TodoForm({ ajouterTache }) {
  const [texte, setTexte] = useState('');

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    if (texte.trim() === '') return;

    ajouterTache(texte);
    setTexte('');
  };

  return (
    <form onSubmit={soumettreFormulaire} className="todo-form">
      <input
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Nouvelle tâche"
        required
        className="todo-input"
      />
      <button type="submit" className="todo-button">Ajouter</button>
    </form>
  );
}

export default TodoForm;

