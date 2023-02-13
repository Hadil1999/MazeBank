<?php

namespace App\Entity;

use App\Repository\CompteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CompteRepository::class)]
class Compte
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToMany(mappedBy: 'compte', targetEntity: Transaction::class)]
    private Collection $compteTransaction;

    public function __construct()
    {
        $this->compteTransaction = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, Transaction>
     */
    public function getCompteTransaction(): Collection
    {
        return $this->compteTransaction;
    }

    public function addCompteTransaction(Transaction $compteTransaction): self
    {
        if (!$this->compteTransaction->contains($compteTransaction)) {
            $this->compteTransaction->add($compteTransaction);
            $compteTransaction->setCompte($this);
        }

        return $this;
    }

    public function removeCompteTransaction(Transaction $compteTransaction): self
    {
        if ($this->compteTransaction->removeElement($compteTransaction)) {
            // set the owning side to null (unless already changed)
            if ($compteTransaction->getCompte() === $this) {
                $compteTransaction->setCompte(null);
            }
        }

        return $this;
    }
}
