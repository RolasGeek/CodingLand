package unit;

public class StateHolder {
	
	Integer state;
	
	private static StateHolder instance;
	public static StateHolder  getInstance() {
		if(instance == null) {
			instance = new StateHolder();
		}
		return instance;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	
}
