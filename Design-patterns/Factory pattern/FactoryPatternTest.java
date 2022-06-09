public class FactoryPatternTest {

   public static void main(String[] args) {
      ALsubject alsubject = new ALsubject();

      
      Syllabus Syllabus1 = alsubject.getSubject("Arts");

      
      Syllabus1.subjects();

      
      Syllabus Syllabus2 = alsubject.getSubject("Commerce");

      
      Syllabus2.subjects();

      
      Syllabus Syllabus3 = alsubject.getSubject("Science");

      
      Syllabus3.subjects();
   }
}