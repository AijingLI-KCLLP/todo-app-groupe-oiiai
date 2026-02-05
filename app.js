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
    // Validation
    if (!text || text.trim() === '') {
        alert('❌ La tâche ne peut pas être vide');
        return;
    }

    // Créer tâche
    const task = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString()
    };

    // Ajouter au tableau
    todos.push(task);
    console.log('✅ Tâche ajoutée:', task);

    // Rafraîchir affichage
    displayTasks();
    updateStats();
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
    // TODO: Votre code ici
}

function displayFilteredTasks(status) {
    // TODO: Votre code ici
}

function updateStats() {
    // TODO: Votre code ici
}