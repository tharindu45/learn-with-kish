public class MementoClient
{

	 public static void main( String[] args )
	 {
		 Originator originator = new Originator();
		 originator.setLaptop(new Laptop("42 inch", "60000Rs", false));

		 Caretaker caretaker = new Caretaker();
		 caretaker.addMemento(originator.createMemento());

		 originator.setLaptop(new Laptop("19 inch", "80000Rs", true));
		 caretaker.addMemento(originator.createMemento());

		 originator.setLaptop(new Laptop("20 inch", "100000Rs", true));
		 
		 System.out.println("\nOrignator current state : " + originator);

		 System.out.println("\nOriginator restoring to 19 inch Laptop...");

		 originator.setMemento(caretaker.getMemento(0));

		 System.out.println("\nOrignator current state : " + originator);

	 }

}