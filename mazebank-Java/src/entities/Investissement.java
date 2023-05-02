package entities;


public class Investissement {

    private int id;
    private int minBudget;

    public Investissement(int id, int minBudget) {
        this.id = id;
        this.minBudget = minBudget;
    }

    public Investissement(int minBudget) {
        this.minBudget = minBudget;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getMinBudget() {
        return minBudget;
    }

    public void setMinBudget(int minBudget) {
        this.minBudget = minBudget;
    }


}