
// console.log(process);
// console.log(process.env);


// console.log(process.argv); //argv == argument value. using process.argv we are going to get the input from the user.
// console.log(process.argv[4])

import { log } from "console"
import fs from "fs"
const command = process.argv[2]
const filename = process.argv[3]
const fileContent = process.argv[4]


//Function for creating files.
const createFile = () =>{
    if(!filename || !fileContent){
        console.log(" Please enter valid filename and content");
        return
    }
    fs.writeFile(filename, fileContent, (err)=>{
        if(err){
            console.log(err);
        }
        console.log(`${filename} has been created successfully!`);
    })
}


// Function for Reading the Files
const readFile = () =>{
    if(!filename){
        console.log("Please provide a valid file name");
        return
    }
    fs.readFile(filename, "utf8", (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
    })
}


//Function for Updating File content
const updateFile = () =>{
    if(!fileContent || !fileContent){
        console.log(" Please enter valid filename and content");
        return
    }
    fs.appendFile(filename, `\n${fileContent}`, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File Updated Sucessfully");
        }
    })
}


//Deleting the specific files
   const deleteFiles = () =>{
    if(!filename){
        console.log("Please Enter a valid Filename");
        return
    }

    fs.unlink(filename, (err)=>{
        if(err){
            console.log(err);
        }
        console.log(`${filename} deleted successfully`);
    })
   }


//Listing or checking the files that are in the present directory
   const listFiles = () =>{
    fs.readdir(".", (err, arr)=>{

        if(err){
            console.log(err);
        }
        for(let item of arr){
            console.log(item)
        }
    })
   }



   if(command == "create"){
    createFile()
   }
   else if(command == "read"){
    readFile()
   }
   else if(command == "update"){
    updateFile()
   }
   else if(command == "delete"){
    deleteFiles()
   }
   else if(command == "list")
   {
    listFiles()
   }