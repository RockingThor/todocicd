describe("Todo App", () => {
  it("should display a list of todos", () => {
    // Create a todo app.
    const app = new TodoApp();

    // Add some todos to the app.
    app.addTodo("Buy groceries");
    app.addTodo("Call mom");
    app.addTodo("Do laundry");

    // Get the list of todos from the app.
    const todos = app.getTodos();

    // Assert that the list of todos contains the expected items.
    expect(todos).toHaveLength(3);
    expect(todos[0].text).toEqual("Buy groceries");
    expect(todos[1].text).toEqual("Call mom");
    expect(todos[2].text).toEqual("Do laundry");
  });
});
