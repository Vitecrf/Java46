function Deferred(abc){
    this.abc = abc
}
Deferred.prototype.then = function (){
    if(this.abc == 'a') return console.log("2", this.abc);
    else if (this.abc == 'b') return console.log("3", this.abc);
    else if (this.abc == 'hello') return console.log("1", this.abc);
}

const d = new Deferred('a');
const c = new Deferred('b');
const b = new Deferred('hello');


d.then();
c.then();
b.then();


// 2 a
// 3 b
// 1 hello
