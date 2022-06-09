public class ALsubject{
	public Syllabus getSubject(String subject){
      switch(subject){
		 case "Arts":
			 return new Arts();
		 case "Commerce":
			 return new Commerce();
		 case "Science":
			 return new Science();
		 default:
			return null;
	  }
   }
}