export class UpdateEvent {
    orderId :string;
    fuelType: string;
    qty:number;
    status:string;
    date:Date;

    UpdateEvent(){

    }

    public setorderId(orderId:string){
        this.orderId=orderId;
    }
    public setfuelType(fuelType:string){
        this.fuelType=fuelType;
    }
    public setQty(qty:number){
        this.qty=qty;
    }
    public setStatus(orderId:string){
        this.orderId=orderId;
    }
    public setDate(date:Date){
        this.date=date;
    }
    
   }
    