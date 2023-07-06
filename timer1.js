const arguments = process.argv;


for(let interval of arguments){
  if(typeof interval === "number"){
    interval = interval * 1000
    setTimeout(() => {
      process.stdout.write('\x07')
    }, interval)
  }

}

//convert arguments x 1000


//process.stdout.write('\x07')