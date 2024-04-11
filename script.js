function variableTypesDemo(){
    // setting up different types of variables
    decimal = 1.4
    integer = 3
    boolean = true
    string = "Hello World"
    array = [1,2,3,4,5]
    object = {
        Name:"foo",
        someValue: 10,
        doFlip: ()=>{console.log("Flip!")}
    }

    // Prints variable values
    console.log("This is a decimal number: "+decimal)
    console.log("This is a integer: "+integer)
    console.log("This is a boolean value: "+boolean)
    console.log("This is a string: "+string)
    console.log("This is an array: "+array)
    console.log("This is an object: "+object)

    // Set var v to 0
    var v = 0
    // Testing effect of let on var v
    console.log("\nEffect of using let...")
    if(true){
        let v = 11
        console.log("Value of v in if statement is "+v)
    }
    console.log("Value of v out of if statement is "+v)
    // Testing effect of var on var v
    console.log("\nEffect of using var...")
    if(true){
        var v = 11
        console.log("Value of v in if statement is "+v)
    }
    console.log("Value of v out of if statement is "+v)
     
    console.log("Declaring a variable with const makes unable to change and creates an error if you try to change it")
}

function conditionalDemo(){
    // Setting up variables
    console.log("\nLet a=3, b=5, c=8...\n")
    var a=3
    var b=5
    var c=8
    
    // Demonstrating boolean expressions
    console.log("Evaluating a<b: ")
    console.log(a<b)
    console.log("Evaluating a>b: ")
    console.log(a>b)
    console.log("Evaluating c<=9: ")
    console.log(c<=9)
    console.log("Evaluating c<=8: ")
    console.log(c<=8)
    console.log("Evaluating c>=8: ")
    console.log(c>=8)
    console.log("Evaluating c<=9: ")
    console.log(c<=9)
    console.log("Evaluating b==5: ")
    console.log(b==5)
    console.log("Evaluating b==a: ")
    console.log(b==a)
    console.log("Evaluating b>a and b<c: ")
    console.log((b>a)&&(b<c))
    console.log("Evaluating b>a or b<c: ")
    console.log((b>a)||(b<c))
    console.log("Evaluating b>a and b==c: ")
    console.log((b>a)&&(b==c))
    console.log("Evaluating b>a or b==c: ")
    console.log((b>a)||(b==c))
    console.log("Evaluating b is not equal to 5: ")
    console.log(b!=5)
    console.log("Evaluating not b>a or b==c: ")
    console.log(!((b>a)||(b==c)))

    // Demonstrating if statements
    console.log("\nPrinting statement based on values of b>c")
    if(b>c){
        console.log("b is greater than c.")
    }else if(b<c){
        console.log("b is less than c.")
    }else{
        console.log("b is equal to c")
    }
}

function loopDemo(){
    // Demonstrating while loop
    console.log("\nDemonstrating while loop...\n")
    let v = 5
    console.log("Loop will end when v=10.")
    console.log("Initial value of v: "+v+"\n")
    // loop continues to print so long as v does not equal 10
    while(v!=10){
        console.log("v in current iteration: "+v)
        v++
    }
    console.log("\nIf v was being decremented or was being incremented by 2, then v would never reach the value 10 and would go on forever.")

    // Demonstrating do while loop
    console.log("\nDemonstrating do while loop...\n")
    v = 5
    console.log("Initial value of v: "+v)
    do{
        console.log("v in current iteration: "+v)
        v++
    }while(false)
    console.log("End value of v: "+v)
    console.log("The do while loop will always run at least on iteration of the code, regardless of the condition")

    // Demonstrating for loop
    console.log("\nDemonstrating for loop...")
    console.log("\nVariable i will be set to 0. The loop will stop when i>=10 and i will be incremented by 1.\n")
    for(let i = 0; i<10; i++){
        console.log("Current value of i: "+ i)
    }
    console.log("\nFor loops help make the structure and duration of the loop more concise and straight forward.\n")
}

function functionDemo(){
    // Demonstrating functionality of functions
    console.log("\nStarting function demo...\n")
    console.log("This method will return the difference of the two values if a>b. Otherwise, it will return the sum of a and b.")
    console.log("a and b are parameters, which are values that are inserted in the method to determine an outcome.\n")
    function doSomething(a,b){
        if(a>b){
            return a-b
        }else{
            return a+b
        }
    }
    console.log("Return value using 6 an 3: "+doSomething(6,3))
    console.log("Return value using 5 an 5: "+doSomething(5,5))
    console.log("\nNote: a function does not need a return statement, and a function that does not have a return statement is called a void function.\n")
}

// Running Demos
variableTypesDemo()
conditionalDemo()
loopDemo()
functionDemo()