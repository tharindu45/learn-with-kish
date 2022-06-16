public class Audi extends BasicCar{
	public Audi(String modelName){
		super.modelName=modelName;
	}
	@Override
	protected BasicCar clone() throws CloneNotSupportedException{
		return (Audi) super.clone();
	}
}