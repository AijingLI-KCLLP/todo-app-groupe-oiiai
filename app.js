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
    // TODO: Votre code ici
}

function displayFilteredTasks(status) {
    // TODO: Votre code ici
}

function updateStats() {
    // TODO: Votre code ici
}