import java.util.ArrayList;
import java.util.List;

public class Caretaker
{
	 private List<Memento> lapList = new ArrayList<Memento>();

	 public void addMemento( Memento m )
	 {
		 lapList.add(m);
		 System.out.println("LED TV's snapshots Maintained by CareTaker :" + lapList);
	 }

	 public Memento getMemento( int index )
	 {
		return lapList.get(index);
	 }
}
