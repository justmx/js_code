/*
From 1 to 100 , print out 
if can be divided by 3, output 'Fizz'
if can be divided by 5, output 'Buzz'
if can be divided by both 3 and 5, output 'FizzBuzz'
else output value itself
*/
FizzBuzz = {

  range_from:1,

  range_to:100, 

  list: function(){
    var listtemp = [];
    for(var i = this.range_from; i<=this.range_to; i++)
    {
        listtemp.push(i);

    }
    return listtemp;
  },

  output: function(item){
      if(item%15==0)
        { return "FizzBuzz";}
      else if (item%3==0)
      {
        return "Buzz";
      }
      else if (item%5==0)
      { 
        return "Fizz";
      }else 
      {
        return item;
      }

  },

  run: function(){
    console.log("list " + this.list().length);
    this.list().forEach(function(item){
      var output = FizzBuzz.output(item);
      console.log(output);
    });
  }
} ;

FizzBuzz.run();