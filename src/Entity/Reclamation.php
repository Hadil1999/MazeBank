<?php

namespace App\Entity;

use App\Repository\ReclamationRepository;
use Doctrine\ORM\Mapping as ORM;


#[ORM\Entity(repositoryClass: ReclamationRepository::class)]
class Reclamation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    private ?string $Priorite = null;

    #[ORM\ManyToOne(inversedBy: 'reclamations')]
    private ?TypeReclamation $TypeReclamation = null;

    #[ORM\ManyToOne(inversedBy: 'reclamations')]
    private ?user $ClientName = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPriorite(): ?string
    {
        return $this->Priorite;
    }

    public function setPriorite(string $Priorite): self
    {
        $this->Priorite = $Priorite;

        return $this;
    }

    public function getTypeReclamation(): ?TypeReclamation
    {
        return $this->TypeReclamation;
    }

    public function setTypeReclamation(?TypeReclamation $TypeReclamation): self
    {
        $this->TypeReclamation = $TypeReclamation;

        return $this;
    }

    public function getClientName(): ?user
    {
        return $this->ClientName;
    }

    public function setClientName(?user $ClientName): self
    {
        $this->ClientName = $ClientName;

        return $this;
    }
}
