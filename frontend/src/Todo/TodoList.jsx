import React from 'react';

function TodoList() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate());

    const todos = [
        { id: 1, description: "Deploy on AWS", done: false, targetDate: targetDate },
        { id: 2, description: "Revise React.js", done: false, targetDate: targetDate },
        { id: 3, description: "Practice Spring Boot", done: false, targetDate: targetDate },
    ];

    return (
        <div>
            <h1 className='text-3xl p-3 font-bold'>Things You have to Do!</h1>
            <table className='min-w-full divide-y divide-neutral-500'>
                <thead className='bg-neutral-200'>
                    <tr>
                        <th className='px-6 py-4  text-xs font-medium uppercase tracking-wider'>ID</th>
                        <th className='px-6 py-4  text-xs font-medium uppercase tracking-wider'>Description</th>
                        <th className='px-6 py-4  text-xs font-medium uppercase tracking-wider'>Done ?</th>
                        <th className='px-6 py-4  text-xs font-medium uppercase tracking-wider'>Target Date</th>
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td className='px-6 py-4 whitespace-nowrap'>{todo.id}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{todo.description}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{todo.done.toString()}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{todo.targetDate.toDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;
