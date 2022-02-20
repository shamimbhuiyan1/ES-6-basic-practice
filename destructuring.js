// const fish ={id:58,name:'King Hilsha',price:9000,phone:'754544244',address:'chandpur',dress:'silver'};


// // conventional way to get property value
// /* const phone =fish.phone;
// const price= fish.price; */


// const {phone,dress}=fish;
// console.log(phone,dress);



// destructuring method shortcut way


    /* const company ={
            name:'GP',
        product:{price:9000,phone:'754544244'},
        address:{home:'chandpur',dress:'silver'},
        ceo:{id:1,salary:250000,}
};

        const{price,phone}=company.product;
        console.log(price) */

        const company ={
                name:'GP',
            product:{price:9000,phone:'754544244'},
            address:{home:'chandpur',dress:'silver'},
            ceo:{id:1,salary:250000,}
    };



    const {home}=company.address;
    const {salary}=company.ceo;
    console.log(home,salary);




    const myNumbers={
           stu1: {roll1:'shamim',id:45},
           stu2: {roll2:'shamim',id:41},
           stu3: {roll3:'shamim',id:43},
           stu4: {roll4:'shamim',id:44},
    };

    const {roll1,id}=myNumbers.stu1;
    console.log(roll1,id);




//     destructuring array 


const [bestFriend1,bestFriend2]=['nazrul','shamim'];   
console.log(bestFriend1);



// optional chaining 


const company1 ={
        name:'GP',
    product:{price:9000,phone:'754544244'},
    
    ceo:{id:1,fee:250000,
        address:{home:'chandpur',dress:'silver'}
}
};

const {address,fee}=company1.ceo.address;
console.log(address,fee);