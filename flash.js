let FlashLamp=function () {
    this.getBatteryInfo=function (battery) {
        battery.energy--;
        return battery.energy;
    }
    this.light=function (battery) {
        if(battery.energy>0){
            alert("lighting")
        }else{
            alert("you need to charge you phone");
        }
        battery.energy--;

    }
    this.turnOn=function (battery) {
        if(battery.energy>0) {
            battery.energy--;
            return true;

        }

    }
    this.turnOff=function (battery) {
        battery.energy--;
        return false;

    }

}