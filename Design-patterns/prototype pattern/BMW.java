public class BMW extends BasicCar{
	public BMW(String modelName){
		super.modelName=modelName;
	}
	@Override
	protected BasicCar clone() throws CloneNotSupportedException{
		return (BMW) super.clone();
	}
}