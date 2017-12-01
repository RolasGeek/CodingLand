package unit.beans;

public class UserTest {
	private Integer id ;
	private String userName;
	private String password;

	
	
	public UserTest(String userName, String password) {
		this.userName = userName;
		this.password = password;
	}
	
	
	public String getUserName() {
		return userName;
	}
	public String getPassword() {
		return password;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}

}
