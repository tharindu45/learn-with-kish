public class Originator
{
	 Laptop lap;

	 public Laptop getLaptop()
	 {
		return lap;
	 }

	 public void setLaptop( Laptop lap )
	 {
		this.lap = lap;
	 }

	 public Memento createMemento()
	 {
		return new Memento(lap);
	 }

	 public void setMemento( Memento memento )
	 {
		lap = memento.getLaptop();
	 }

	 @Override
	 public String toString()
	 {
		return "Originator [lap=" + lap + "]";
	 }

	 
	 
}