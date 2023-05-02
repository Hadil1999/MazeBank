package entities;


import java.time.LocalDate;

public class Embauche {

    private int id;
    private String poste;
    private LocalDate dateEmbauche;
    private float salaire;
    private int duree;

    public Embauche(int id, String poste, LocalDate dateEmbauche, float salaire, int duree) {
        this.id = id;
        this.poste = poste;
        this.dateEmbauche = dateEmbauche;
        this.salaire = salaire;
        this.duree = duree;
    }

    public Embauche(String poste, LocalDate dateEmbauche, float salaire, int duree) {
        this.poste = poste;
        this.dateEmbauche = dateEmbauche;
        this.salaire = salaire;
        this.duree = duree;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPoste() {
        return poste;
    }

    public void setPoste(String poste) {
        this.poste = poste;
    }

    public LocalDate getDateEmbauche() {
        return dateEmbauche;
    }

    public void setDateEmbauche(LocalDate dateEmbauche) {
        this.dateEmbauche = dateEmbauche;
    }

    public float getSalaire() {
        return salaire;
    }

    public void setSalaire(float salaire) {
        this.salaire = salaire;
    }

    public int getDuree() {
        return duree;
    }

    public void setDuree(int duree) {
        this.duree = duree;
    }


}