//1. Create a sleep function that takes one parameter (time) and
//will wait "time" ms


async function run(){
  await sleep(500);
  console.log("hello");
  await sleep(500);
  console.log("World");
}


function sleep(time){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time)
  })
}

run();

