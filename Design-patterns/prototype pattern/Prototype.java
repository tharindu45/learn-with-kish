public class Prototype{
	public static void main(String [] args) throws CloneNotSupportedException{
		
		
		BasicCar bmwCar =new BMW("Black BMW X5");
		bmwCar.price=200000;
		
		BasicCar audiCar =new Audi("White Audi Q5");
		bmwCar.price=180000;
		
		BasicCar bmwCar1=(BasicCar)bmwCar.clone();
		bmwCar1.price=BasicCar.setPrice()+bmwCar1.price;
		System.out.println("Car Model is"+bmwCar1.getModelName()+"and price is"+bmwCar1.price);
		
		BasicCar audiCar1=(BasicCar)audiCar.clone();
		audiCar1.price=BasicCar.setPrice()+audiCar1.price;
		System.out.println("Car Model is"+audiCar1.getModelName()+"and price is"+audiCar1.price);
		
	}
}