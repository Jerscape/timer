const arguments = process.argv;

for(let interval of arguments){
  //this if seems to be screeningout all three edge cases not just negative numbers
  if(interval > 0){
    interval = interval * 1000
    setTimeout(() => {
      process.stdout.write('\x07')
    }, interval)
  }

}

