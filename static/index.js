// document.addEventListener(
//     'DOMContentLoaded', 
//     check_connection_change_interface(), 
//     false
//   );


async function test(){
    console.log("test!!");
}

async function save_code(){
    document.getElementById('code-form').submit();
    console.log("submitted");
}

async function delete_code(){
    document.getElementById('delete-form').submit();
    console.log("deleted");
}

async function ast_table(){
    document.getElementById('ast-form').submit();
    console.log("ast table created");
}

async function flatcode_table(){
    document.getElementById('flatcode-form').submit();
    console.log("flatcode table created");
}