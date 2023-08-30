import React from "react";

const TodoTable = async () => {
  var todos = [
    {
      id: 1,
      text: "Buy groceries",
      completed: false,
    },
    {
      id: 2,
      text: "Call mom",
      completed: true,
    },
    {
      id: 3,
      text: "Do laundry",
      completed: false,
    },
    {
      id: 4,
      text: "Write a blog post",
      completed: false,
    },
    {
      id: 5,
      text: "Meet with client",
      completed: false,
    },
  ];
  return (
    <div class="w-full overflow-hidden rounded-lg shadow-lg ">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
            <tr class="text-left font-bold">
              <th class="px-6 py-3 bg-gray-200 text-gray-600 border-b border-gray-300">
                Id
              </th>
              <th class="px-6 py-3 bg-gray-200 text-gray-600 border-b border-gray-300">
                Description
              </th>
              <th class="px-6 py-3 bg-gray-200 text-gray-600 border-b border-gray-300">
                Status
              </th>
              <th class="px-6 py-3 bg-gray-200 text-gray-600 border-b border-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {todos?.map((item) => (
              <tr class="hover:bg-gray-100">
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.id}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.text}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.completed == true ? "Completed" : "Not Completed"}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  <button class="text-blue-500 hover:underline mr-2">
                    Edit
                  </button>
                  <button class="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoTable;
