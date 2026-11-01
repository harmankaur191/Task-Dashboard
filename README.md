# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Reflection
### Implementing React and Typescript
TypeScript was leveraged across the entire application to ensure strict data contracts between components and utilities. By defining explicit interfaces (such as Task, TaskFormData, and TaskListProps), compile-time safety was established for all task properties (e.g., id, title, description, status, priority, and dueDate).
UseState and UseEffect hooks are used monitor and update the tasks when added, edited or deleted. Additionally each UI was broken down into component like Dashboard, SearchBar, TaskList etc to keep the code manageable and modular passing state and callback handles.

### Challenges
Following strict typescript rules was quite challenging. Each time passing props or information between the components had to match the type.
Implementing dynamic progress without any additional libraries required little research and maths to get that calculated and updated correctly. 
Understanding, identifying the need of hooks and implementing it was very challenging. Avoiding infinite loops in useEffect was difficult which happened few times. However, it was resolved later. 
Combining search, status filters and priority filters is a complex task which was time consuming.

### Approach to Component Composition
The application follwos a modular structure and involves. state managements. Components like ProgressBar encapsulate their own statistical display logic by consuming the tasks prop, keeping the dashboard clean, modular, and adhering strictly to the single-responsibility principle.