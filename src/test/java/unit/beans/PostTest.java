package unit.beans;

public class PostTest {

	private Integer id;
	private String comment;
	private boolean isCorrect;
	private String solution;
	private Integer userId;
	private Integer topicId;
	
	
	public PostTest(Integer id, String comment, boolean isCorrect, String solution, Integer userId, Integer topicId) {
		super();
		this.id = id;
		this.comment = comment;
		this.isCorrect = isCorrect;
		this.solution = solution;
		this.userId = userId;
		this.topicId = topicId;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getComment() {
		return comment;
	}

	public boolean getIsCorrect() {
		return isCorrect;
	}

	public String getSolution() {
		return solution;
	}

	public Integer getUserId() {
		return userId;
	}

	public Integer getTopicId() {
		return topicId;
	}

	
}
