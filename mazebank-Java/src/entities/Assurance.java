package entities;

import utils.Constants;

public class Assurance implements Comparable<Assurance> {

    private int id;
    private String libelle;
    private String image;
    private String partenaire;
    private String type;

    public Assurance(int id, String libelle, String image, String partenaire, String type) {
        this.id = id;
        this.libelle = libelle;
        this.image = image;
        this.partenaire = partenaire;
        this.type = type;
    }

    public Assurance(String libelle, String image, String partenaire, String type) {
        this.libelle = libelle;
        this.image = image;
        this.partenaire = partenaire;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getPartenaire() {
        return partenaire;
    }

    public void setPartenaire(String partenaire) {
        this.partenaire = partenaire;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }


    @Override
    public int compareTo(Assurance assurance) {
        switch (Constants.compareVar) {
            case "Libelle":
                return assurance.getLibelle().compareTo(this.getLibelle());
            case "Image":
                return assurance.getImage().compareTo(this.getImage());
            case "Partenaire":
                return assurance.getPartenaire().compareTo(this.getPartenaire());
            case "Type":
                return assurance.getType().compareTo(this.getType());

            default:
                return 0;
        }
    }

}