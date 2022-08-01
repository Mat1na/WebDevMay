// parent class Drone

class Drone{
    constructor(type='drone',speed=0,battery=100){
        this.type=type;
        this.speed=speed;
        this.battery=battery;
    }
    registerDroneOwner(deviceId,fullname,address){
        this.owners.push({
            type:this.type,
            speed:this.speed,
            battery:this.battery,
            deviceId,
            fullname,
            address
        })
    }

    getDroneOwners(){
        return this.owners;
    }
}

// child class
class CivilDrone extends Drone{
    constructor(type='civil drone',speed=50,battery=100){
        super(type,speed,battery);
        this.owners=[];
    }


}

// child class
class MilitaryDrone extends Drone{
    constructor(type='military drone',speed=150,battery=100){
        super(type,speed,battery);
        this.owners=[]
    }

  
}

let civil = new CivilDrone('civil drone',60,80);
civil.registerDroneOwner('drone#001','Winand','Brussels');
civil.registerDroneOwner('drone#002','Ersin','Brussels');
civil.registerDroneOwner('drone#003','Stamatia','Athens');
console.log(civil.getDroneOwners())

let military = new MilitaryDrone();
military.registerDroneOwner('drone#001','Bayraktar','Turkey');
military.registerDroneOwner('drone#002','Atomics Avenger','USA');
console.log(military.getDroneOwners())