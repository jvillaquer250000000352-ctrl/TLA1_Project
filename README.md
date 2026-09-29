
## Mandatory AI Explanation and Code Defense

### 1. How AI Helped in Developing the Project

AI was used as a learning and development assistant while creating IncoTrack, an Income Category Management System using React and Vite.

AI helped me understand how to convert a basic application into a React application by organizing the interface into reusable components. It also guided me in improving the user interface using CSS and troubleshooting problems encountered during development.

The specific areas where AI provided assistance include:

- **React Component Organization:** AI helped separate parts of the application into reusable components, such as `SummaryCards`, `CategoryForm`, and `CategoryList`.
- **Adding Categories:** AI helped implement the logic for adding a new income category using React state.
- **Editing Categories:** AI assisted in creating the editing functionality, allowing users to update an existing category.
- **Deleting Categories:** AI helped implement the delete function and confirmation prompt before removing a category.
- **Search Functionality:** AI helped create a search feature that filters categories based on the user's input.
- **Form Validation:** AI helped add validation to prevent users from submitting empty category names or descriptions.
- **Data Persistence:** AI explained how to use `localStorage` and `useEffect` to preserve category data after refreshing the browser.
- **User Interface:** AI helped improve the layout, colors, input fields, buttons, notifications, and overall appearance of the application.
- **Debugging:** AI helped identify and resolve issues, including the invisible input text caused by CSS styling.

The suggestions provided by AI were reviewed, applied, and tested during development. I also used the explanations to understand the purpose of the code and how the different parts of the application work together.

### 2. React Components and Their Responsibilities

The application is divided into reusable components to make the code more organized and easier to maintain.

**App.jsx**

This is the main component of the application. It manages the main data and functions, including adding, editing, deleting, and searching income categories. It also passes information and functions to child components through props.

**SummaryCards.jsx**

This component displays the summary information of the application. It receives the total number of categories through props from the main App component.

**CategoryForm.jsx**

This component contains the form for adding and editing income categories. It receives the form values, state update functions, and submission function through props.

**CategoryList.jsx**

This component displays the registered categories. It also handles the search input and provides buttons for editing and deleting categories through functions passed from App.jsx.

### 3. Explanation of React State

The application uses the `useState` Hook to manage information that changes while the user interacts with the system.

The main states in `App.jsx` are:

- **categories:** Stores the list of income categories. Each category contains an ID, name, and description.
- **categoryName:** Stores the value entered in the category name input field.
- **categoryDescription:** Stores the value entered in the description input field.
- **search:** Stores the text entered in the search field.
- **editingId:** Identifies which category is currently being edited. If no category is being edited, its value is `null`.
- **message:** Stores the notification message displayed after an action.
- **messageType:** Determines whether the notification represents a successful action or an error.

When a state changes, React updates the parts of the interface that depend on that state.

### 4. Explanation of Important Functions and Logic

**Adding a Category**

The `addCategory` function handles form submission. It first uses `preventDefault()` to prevent the browser from refreshing the page.

It then checks whether the category name and description contain valid values. If either field is empty, an error notification is displayed.

If the user is adding a new category, the application creates an object containing a unique ID, name, and description. This object is then added to the categories array using `setCategories()`.

**Editing a Category**

The `editCategory` function receives the selected category and places its existing name and description into the form fields. It also updates `editingId` so the application knows which category is being edited.

When the form is submitted, `addCategory` checks whether `editingId` has a value. If it does, the application uses `map()` to find and update the selected category instead of creating a new one.

**Deleting a Category**

The `deleteCategory` function receives the ID of the selected category. Before deleting it, the application displays a confirmation prompt using `window.confirm()`.

If the user confirms, `filter()` creates a new array that excludes the selected category. The updated array is then saved using `setCategories()`.

**Searching Categories**

The `filteredCategories` variable uses the `filter()` method to display only categories whose names match the search text.

The `toLowerCase()` method makes the search case-insensitive, meaning that uppercase and lowercase letters are treated equally.

**Saving Data with localStorage**

The application uses `useEffect()` to save the categories array in the browser's localStorage whenever the categories state changes.

The `JSON.stringify()` method converts the array into a string because localStorage stores information as text.

When the application starts, the `useState()` initializer checks localStorage for previously saved categories. If data exists, `JSON.parse()` converts it back into a JavaScript array.

This allows the categories to remain available after refreshing the browser.

### 5. Explanation of Props and Component Communication

Props allow the main component to share information and functions with its child components.

For example, `App.jsx` passes `categories.length` to `SummaryCards` through the `totalCategories` prop.

It also passes form values and functions to `CategoryForm`, allowing the child component to update the state managed by `App.jsx`.

Similarly, `CategoryList` receives the filtered categories, search value, and edit and delete functions.

This approach keeps the main application logic in `App.jsx` while allowing the interface to be divided into smaller and reusable components.

### 6. Personal Understanding and Learning

Through this project, I learned that React uses components to divide an application into manageable parts. I also learned that state is important because it allows the interface to respond to user actions without manually updating the page.

I understood how props connect parent and child components, how array methods such as `map()` and `filter()` help manage data, and how `localStorage` can preserve information in the browser.

AI helped me understand and develop these features, but I reviewed and tested the code to understand how the application works. This project helped me improve my knowledge of React, JavaScript, component organization, and debugging.
