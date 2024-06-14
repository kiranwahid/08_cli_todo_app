#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.hex('d2b48c').bold("\n ==========================================================")
);

console.log(chalk.hex('008080').bold.italic.underline("\n\t============= TODO APP PROJECT  📝 ==============="));
console.log(
  chalk.hex('d2b48c').bold("\n ==========================================================")
);


// define emty array to stor multiple desir items...
let todoListArray : string[] = [];
let index = 0

let while_loop : boolean = true;


// ======================== Start ========================

while (while_loop) {
    
let userInput = await inquirer.prompt(
    {
        name : 'option',
        type : 'list',
        message : chalk.hex('f4a460').italic('\nSelect an option from below!'),
        choices : [
              chalk.hex('bc8f8f').bold.italic('Add'),
              chalk.hex('bc8f8f').bold.italic('Update'),
              chalk.hex('bc8f8f').bold.italic('View'),
              chalk.hex('bc8f8f').bold.italic('Delete'),
              chalk.hex('bc8f8f').bold.italic('Exit'),
            ],
    });


// =============== Conditional Statement =======================

// ======================== Start ========================
// ================== Add Items ==========================

if (userInput.option === chalk.hex('bc8f8f').bold.italic('Add')) {
    let addItem = await inquirer.prompt([
        {
            name : 'add',
            type : 'input',
            message :  chalk.hex('f4a460').italic('\n Enter item name to add in todo list.'),

        },
    ]);

    todoListArray.push(addItem.add);
    console.log(chalk.hex('9acd32').bold.italic(`\n  👍 ${addItem.add}  has been added in list successfully!`));
    

        let addMoreItems = await inquirer.prompt(
            {
            name : 'addMore',
            type : 'confirm',
            message :  chalk.hex('f4a460').italic('\n Do you want to add more item?'),
            default : false
        });

         while_loop = addMoreItems.addMore
         while_loop = true

} 
// ======================== End ========================



// ======================== Start ========================
// ================== Update Items ==========================
else if(userInput.option === chalk.hex('bc8f8f').bold.italic('Update')){
let update_item = await inquirer.prompt(
    {
        name : 'update',
        type : 'list',
        message :  chalk.hex('f4a460').italic('\n Which item do you want to update?'),
        choices : todoListArray,
    });

    let updated = await inquirer.prompt(
        {
            type : 'input',
            name : 'newItem',
            message :  chalk.hex('f4a460').italic('\n Enter item name to update')
        });

        let newTodoList = todoListArray.filter(item => item != update_item.update);
        todoListArray = [...newTodoList,updated.newItem];
        console.log(chalk.hex('ff6347').bold.italic(`\n Here is your updated list!` ));
        console.log(todoListArray);
        

}

// ======================== End ========================



// ======================== Start =========================

// ================== View Items ==========================
else if(userInput.option === chalk.hex('bc8f8f').bold.italic('View')){
for (let i = 0; i < todoListArray.length; i++) {
    index = i

console.log(chalk.hex('d8bfd8').bold.italic(` ${index + 1}   ${todoListArray[i]} ✔️ `));
}
}

// ======================== End ========================


// ================== Delete Items ==========================
else if(userInput.option === chalk.hex('bc8f8f').bold.italic('Delete')){
let delete_item = await inquirer.prompt(
    {
       name : 'delete',
       type : 'list',
       message : chalk.hex('f4a460').italic('\n Which item would you like to delete?'),
        choices : todoListArray,
    });
    let newTodoList = todoListArray.filter(item => item != delete_item.delete);
    todoListArray = [...newTodoList];
    console.log(chalk.hex('808000').bold.italic(`\n ${delete_item.delete} ❌ has been deleted successfully!`));
    
    // ======================== End ========================


}
// ======================== Start =======================

// ================== Exit App ==========================
else if(userInput.option === chalk.hex('bc8f8f').bold.italic('Exit')){
console.log(chalk.hex('87ceeb').bold.italic.underline('\n \t =============== Thank you for using Todo App!  😊  =============== '));
    while_loop = false;
    break;
        }
        
        // ======================== End ========================
   
}


        // ======================== End ========================