public class MobilePackage{
	public final String daytime;
	public final String nighttime;
	public final String combopack;
	public final String socialpackage;
	
	public MobilePackage(Builder builder){
		this.daytime=builder.daytime;
		this.nighttime=builder.nighttime;
		this.combopack=builder.combopack;
		this.socialpackage=builder.socialpackage;
	}
	
	public class Builder{
		public String daytime;
		public String nighttime;
		public String combopack;
		public String socialpackage;
		
		
		public MobilePackage build(){
			return new MobilePackage(this);
		}
		
		public Builder(String daytime){
			this.daytime=daytime;
		}
		
		
		public Builder nighttime(String nighttime){
			this.nighttime=nighttime;
			return this;
		}
		public Builder combopack(String combopack){
			this.combopack=combopack;
			return this;
		}
		public Builder socialpackage(String socialpackage){
			this.socialpackage=socialpackage;
			return this;
		}
		public String toString(){
			String string =  "Mobile packages are, Day time " +daytime+ "Night time "+nighttime+ "Combo Pack "+combopack +"Social Packages  "+socialpackage;
			return string;
		}
	}
}