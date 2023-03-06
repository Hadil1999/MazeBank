<?php

namespace App\Entity;
use Symfony\Component\Serializer\Annotation\Groups;
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
    #[Groups("users")]

    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups("users")]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    #[Groups("users")]
    private ?string $prenom = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups("users")]
    private ?\DateTimeInterface $dateNaissance = null;

    #[ORM\Column(length: 255)]
    #[Groups("users")]
    private ?string $numTel = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Agence::class)]
    private Collection $userAgence;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Reclamation::class)]
    private Collection $userReclamation;

    #[ORM\OneToMany(mappedBy: 'userId', targetEntity: DemandeCredit::class)]
    private Collection $demandeCredits;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    public function __construct()
    {
        $this->userAgence = new ArrayCollection();
        $this->userReclamation = new ArrayCollection();
        $this->demandeCredits = new ArrayCollection();
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

    public function getNumTel(): ?string
    {
        return $this->numTel;
    }

    public function setNumTel(string $numTel): self
    {
        $this->numTel = $numTel;

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
     * @return Collection<int, DemandeCredit>
     */
    public function getDemandeCredits(): Collection
    {
        return $this->demandeCredits;
    }

    public function addDemandeCredit(DemandeCredit $demandeCredit): self
    {
        if (!$this->demandeCredits->contains($demandeCredit)) {
            $this->demandeCredits->add($demandeCredit);
            $demandeCredit->setUserId($this);
        }

        return $this;
    }

    public function removeDemandeCredit(DemandeCredit $demandeCredit): self
    {
        if ($this->demandeCredits->removeElement($demandeCredit)) {
            // set the owning side to null (unless already changed)
            if ($demandeCredit->getUserId() === $this) {
                $demandeCredit->setUserId(null);
            }
        }

        return $this;
    }
    public function __toString(): string {    
        return $this->id;
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
}
