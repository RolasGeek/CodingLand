package unit.beans;

public class CategoryTest {
	Integer id;
	String description;
	String name;
	String objectCode;
	
	
	public CategoryTest(Integer id, String description, String name, String objectCode) {
		super();
		this.id = id;
		this.description = description;
		this.name = name;
		this.objectCode = objectCode;
	}
	public String getDescription() {
		return description;
	}

	public String getName() {
		return name;
	}

	public String getObjectCode() {
		return objectCode;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
}
