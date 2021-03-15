//Implement Function.prototype.bind()

/*
  const foo = function(){
    console.log(this.bar);
  }

  let baz = foo.bind({bar: 'hello'})

  baz(); //hello
*/

//Solution#1
Function.prototype.bind = function(context){
  const fn = this;

  return function(){
    fn.call(context);
  }
}

//Solution#2
function bind(fn,context){
  return function(){
    fn.apply(context, [...args]);
  }
}