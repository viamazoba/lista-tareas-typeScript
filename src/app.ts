interface Task {
    id: number;
    title: string;
    completed: boolean
}

const arrayTask: Task[] = []

let addTask = (array: Task[], newElement: Task): Task[] => {
    return [...array, newElement]
}

let completeTask = (array: Task[], id: number): Task[] => {

    array.forEach((element) =>{
        element.completed = element.id === id ? true : element.completed
    })

    return array
}

let filterTasks = (array: Task[], complete: boolean): Task[] => {

    const newArray = array.filter((element) =>{
        return element.completed === complete
    })
    return newArray
}

let printTaskList = (array: Task[]) => {

    array.forEach((element) =>{
        console.log('Tarea: ', element.title,',', 'Completed: ', element.completed)
    })
}

function runApp(arrayTask:Task[]){
    const tasks = [
        { id: 1, title: 'Completar taller de TypeScript', completed: false },
        { id: 2, title: 'Estudiar programación funcional', completed: false },
        { id: 3, title: 'Preparar presentación sobre TypeScript', completed: true },
        { id: 4, title: 'Leer libro de TypeScript avanzado', completed: false },
        { id: 5, title: 'Resolver ejercicios de TypeScript', completed: false },
        { id: 6, title: 'Hacer ejercicio', completed: true },
        { id: 7, title: 'Comprar víveres', completed: false },
        { id: 8, title: 'Llamar al médico', completed: false },
        { id: 9, title: 'Limpiar la casa', completed: true },
        { id: 10, title: 'Actualizar el CV', completed: false }
    ];

    // Adding initial tasks to arrayTask
    for (let task of tasks){
        arrayTask = addTask(arrayTask, task)
    }

    // Changing completed first task
    arrayTask = completeTask(arrayTask, 1)

    // Filter completed task
    let newArray = filterTasks(arrayTask, true)

    // Showing completed task
    printTaskList(newArray)

}

runApp(arrayTask)