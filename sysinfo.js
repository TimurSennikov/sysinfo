const os = require("os");

class SysInfo{
    static mem(){
        return Math.floor(os.totalmem / 1000000);
    }

    static free_mem(){
        return Math.floor(os.freemem / 1000000);
    }

    static uptime(){
        return os.uptime / (60 * 60);
    }

    static hostname(){
        return os.hostname();
    }

    static logo(){
        return "/images/" + os.type() + ".png";
    }

    static match(str){
        console.log(str);
        if(str.includes("/mem")){return this.mem();}
        else if(str.includes("/free_mem")){return this.free_mem();}
        else if(str.includes("/uptime")){return this.uptime();}
        else if(str.includes("/hostname")){return this.hostname();}
        else{return "NO DATA";}
    }
};

module.exports = SysInfo;