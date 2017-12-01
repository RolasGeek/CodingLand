package unit.beans;

public class TopicTest {
	private Integer id;

	private String description;

	private boolean isAnswered;

	private String name;

	private Integer categoryId;
	
	private Integer createdBy;


	public TopicTest(Integer id, String description, boolean isAnswered, String name, Integer categoryId,
			Integer createdBy) {
		this.id = id;
		this.description = description;
		this.isAnswered = isAnswered;
		this.name = name;
		this.categoryId = categoryId;
		this.createdBy = createdBy;
	}

	public Integer getId() {
		return id;
	}


	public String getDescription() {
		return description;
	}


	public boolean isAnswered() {
		return isAnswered;
	}



	public String getName() {
		return name;
	}



	public Integer getCategoryId() {
		return categoryId;
	}

	public Integer getCreatedBy() {
		return createdBy;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	

}
