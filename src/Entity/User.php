<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    private ?string $prenom = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $dateNaissance = null;


    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Agence::class)]
    private Collection $userAgence;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Reclamation::class)]
    private Collection $userReclamation;

    #[ORM\OneToMany(mappedBy: 'idUser', targetEntity: Compte::class)]
    private Collection $comptes;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    private ?string $phone = null;

    #[ORM\Column(length: 255)]
    private ?string $adress = null;

    #[ORM\Column(length: 255)]
    private ?string $numCin = null;

    public function __construct()
    {
        $this->userAgence = new ArrayCollection();
        $this->userReclamation = new ArrayCollection();
        $this->comptes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getDateNaissance(): ?\DateTimeInterface
    {
        return $this->dateNaissance;
    }

    public function setDateNaissance(\DateTimeInterface $dateNaissance): self
    {
        $this->dateNaissance = $dateNaissance;

        return $this;
    }
  
    /**
     * @return Collection<int, Agence>
     */
    public function getUserAgence(): Collection
    {
        return $this->userAgence;
    }

    public function addUserAgence(Agence $userAgence): self
    {
        if (!$this->userAgence->contains($userAgence)) {
            $this->userAgence->add($userAgence);
            $userAgence->setUser($this);
        }

        return $this;
    }

    public function removeUserAgence(Agence $userAgence): self
    {
        if ($this->userAgence->removeElement($userAgence)) {
            // set the owning side to null (unless already changed)
            if ($userAgence->getUser() === $this) {
                $userAgence->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Reclamation>
     */
    public function getUserReclamation(): Collection
    {
        return $this->userReclamation;
    }

    public function addUserReclamation(Reclamation $userReclamation): self
    {
        if (!$this->userReclamation->contains($userReclamation)) {
            $this->userReclamation->add($userReclamation);
            $userReclamation->setUser($this);
        }

        return $this;
    }

    public function removeUserReclamation(Reclamation $userReclamation): self
    {
        if ($this->userReclamation->removeElement($userReclamation)) {
            // set the owning side to null (unless already changed)
            if ($userReclamation->getUser() === $this) {
                $userReclamation->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Compte>
     */
    public function getComptes(): Collection
    {
        return $this->comptes;
    }

    public function addCompte(Compte $compte): self
    {
        if (!$this->comptes->contains($compte)) {
            $this->comptes->add($compte);
            $compte->setIdUser($this);
        }

        return $this;
    }

    public function removeCompte(Compte $compte): self
    {
        if ($this->comptes->removeElement($compte)) {
            // set the owning side to null (unless already changed)
            if ($compte->getIdUser() === $this) {
                $compte->setIdUser(null);
            }
        }

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(string $adress): self
    {
        $this->adress = $adress;

        return $this;
    }   

    public function __toString(): string {    
        return $this->nom . ' ' . $this->prenom .' CIN ' .$this->numCin;
    }

    public function getNumCin(): ?string
    {
        return $this->numCin;
    }

    public function setNumCin(string $numCin): self
    {
        $this->numCin = $numCin;

        return $this;
    }


}
