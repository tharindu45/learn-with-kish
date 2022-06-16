public class BasicCar implements Cloneable{
	public String modelName;
	public int price=0;
	
	public String getModelName(){
		return modelName;
	}
	public void setModelName(String modelName){
		this.modelName=modelName;
	}
	public static int setPrice(int price){
		return price;
	}
	@Override
	protected Object clone() throws CloneNotSupportedException{
		return(BasicCar) super.clone();
	}
}