// code your solution here

//I have used function expression here
function saturdayFun(activity="roller-skate"){
return( 'This Saturday, I want to'+' '+ activity +'!' );  
}
saturdayFun("bathe my dog");

//I have used function expression here
function mondayWork (activity1='go to the office'){
    return( 'This Monday, I will'+' '+ activity1 +'.' ); 
}
mondayWork('work from home');


const wrapAdjective = function (visualFlair = "*") {
    return function (adjective = "special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
};