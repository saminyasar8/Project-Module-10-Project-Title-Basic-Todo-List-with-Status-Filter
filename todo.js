let todos =[
    {title : "learn js", done : false},
    {title : "Make a simple project", done : true},
    {title : "do homework", done : false},
    {title : "understand the code", done : true},
];

//jai todo er done property is quivalent to true
let doneTodos =[];
//jai todo er done property is quivalent to false
let onGoingTodos =[];

todos.forEach((todo) => {
    if(todo.done){
        //push the todo to the doneTodos array
        doneTodos.push(todo);
    }else{
        //push the todo to the onGoingTodos array

        onGoingTodos.push(todo);
    }

});
    



console.log("👍 Done Todos :");
doneTodos.forEach(todos =>{
    console.log(`- ${todos.title}`)

})

console.log("\n⏲️  on going Todos : ");
onGoingTodos.forEach(todos =>{
    console.log(`- ${todos.title}`)
})