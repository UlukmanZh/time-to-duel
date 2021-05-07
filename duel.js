class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        if(target instanceof Unit){
            target.res -= this.power;
        }else{
            throw new Error( "Target must be a unit!" );
        }
        console.log(`${this.name} attacked ${target.name} and damage him by ${this.power}`)
    }
}


class Effect extends Card{
    constructor(name, cost, stat, magnitude){
        super(name,cost);
        this.stat = stat;
        this.magnitude = magnitude;
        let mod = "";
        if (magnitude>0){
            mod="Raise";
        }else{
            mod = "Lower";
        }
        this.text =`${mod} the target ${this.stat} by ${Math.abs(this.magnitude)}`;
    }
    play(target){
        if (this.stat == "resilience"){
            target.res += this.magnitude;
        }else if(this.stat == "power"){
            target.power += this.magnitude;
        }else{
            throw new Error( "Stat must be a resilience or power!" )
        }
        console.log(this.text);
    }
}
//scenario

let red = new Unit("Red Belt Ninja", 3, 3, 4);
console.log("New unit created");
console.log(red);
let hardAlgo = new Effect("Hard Algorithm", 2, "resilience", +3);
hardAlgo.play(red);
console.log(red);
let black = new Unit("Black Belt Ninja", 4, 5, 4);
console.log("New unit created");
console.log(black);
let promiseRej = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
promiseRej.play(black);
console.log(black);
let pairProg = new Effect("HPair Programming", 3,"power", +2);
pairProg.play(red);
console.log(red);
red.attack(black);
console.log(red);
console.log(black);











