public class Memento
{
	 private Laptop lap;

	 public Memento( Laptop lap )
	 {
		 super();
		 this.lap = lap;
	 }

	 public Laptop getLaptop()
	 {
		return lap;
	 }

	 public void setLaptop( Laptop lap )
	 {
		this.lap = lap;
	 }

	 @Override
	 public String toString()
		{
			return "Memento [lap=" + lap + "]";
		}

 
 
}