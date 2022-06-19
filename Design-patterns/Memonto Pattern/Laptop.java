public class Laptop
{
	 private String  size;
	 private String  price;
	 private boolean usbSupport;

	 public Laptop( String size, String price, boolean usbSupport )
	 {
		 super();
		 this.size = size;
		 this.price = price;
		 this.usbSupport = usbSupport;
	 }

	 public String getSize()
	 {
		return size;
	 }

	 public void setSize( String size )
	 {
		this.size = size;
	 }

	 public String getPrice()
	 {
		return price;
	 }

	 public void setPrice( String price )
	 {
		this.price = price;
	 }

	 public boolean isUsbSupport()
	 {
		return usbSupport;
	 }

	 public void setUsbSupport( boolean usbSupport )
	 {
		this.usbSupport = usbSupport;
	 }

	 @Override
	 public String toString()
	 {
		return "Laptop [size=" + size + ", price=" + price + ", usbSupport=" + usbSupport + "]";
	 }

}
