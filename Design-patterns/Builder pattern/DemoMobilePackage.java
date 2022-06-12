public class DemoMobilePackage{
	public static void main (String [] args){
		
		
		MobilePackage.Builder builder=new MobilePackage.Builder("normal");
		MobilePackage pack=builder.nighttime("Full").combopack("345").socialpackage("youtube");
		System.out.println(pack);
	}
}