let fname=['rahul','ram','shyam'];

function sum(...data){
    let add="";
    add+=data;
    console.log(add);
}
sum(1,2,'rahul','ram');
sum(1,14,18,38);
sum(1,2,3,4,5);

sum(fname);