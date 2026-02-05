// Base Todo App
let todos = [];

// Cette fonction sera implémentée par les étudiants
function addTaskFromInput() {
    const input = document.getElementById('taskInput');
    addTask(input.value);
    input.value = '';
}

// === À IMPLÉMENTER PAR LES ÉTUDIANTS ===

// Étudiant 1 : Implémenter cette fonction
function addTask(text) {
    // TODO: Votre code ici
}

// Étudiant 2 : Implémenter cette fonction
function displayTasks() {
    // TODO: Votre code ici
}

// Étudiant 3 : Implémenter ces fonctions
function deleteTask(id) {
    // TODO: Votre code ici
}

function toggleTask(id) {
    // TODO: Votre code ici
}

// Étudiant 4 : Implémenter ces fonctions
function filterTasks(status) {
    switch(status) {
        case 'active':
            return todos.filter(t => !t.completed);
        case 'completed':
            return todos.filter(t => t.completed);
        default:
            return todos;
    }
}

function displayFilteredTasks(status) {
    const container = document.getElementById('task-list');
    if (!container) return;

    const filtered = filterTasks(status);

    // Vider conteneur
    container.innerHTML = '';

    // Si aucune tâche filtrée
    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: #999;">
            Aucune tâche ${status === 'active' ? 'active' : status === 'completed' ? 'terminée' : ''}
        </p>`;
        return;
    }

    // Afficher tâches filtrées
    filtered.forEach(task => {
        const div = document.createElement('div');
        div.className = 'task';
        div.innerHTML = `
            <input type="checkbox" 
                   ${task.completed ? 'checked' : ''} 
                   onchange="toggleTask(${task.id})">
            <span class="${task.completed ? 'completed' : ''}">
                ${task.text}
            </span>
            <button onclick="deleteTask(${task.id})">🗑️ Supprimer</button>
        `;
        container.appendChild(div);
    });

    console.log(`✅ ${filtered.length} tâches filtrées (${status})`);
}

function updateStats() {
    const countElement = document.getElementById('task-count');
    if (!countElement) return;

    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const active = total - completed;

    countElement.textContent = `${total} tâche${total > 1 ? 's' : ''} (${active} active${active > 1 ? 's' : ''}, ${completed} terminée${completed > 1 ? 's' : ''})`;
}

function displayFilteredTasks(status) {
    // TODO: Votre code ici
}

function updateStats() {
    // TODO: Votre code ici
}