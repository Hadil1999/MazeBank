<?php

namespace App\Entity;

use App\Repository\ServiceRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ServiceRepository::class)]
class Service
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?CarteBancaire $serviceCarte = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?CarnetCheque $serviceCarnet = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getServiceCarte(): ?CarteBancaire
    {
        return $this->serviceCarte;
    }

    public function setServiceCarte(?CarteBancaire $serviceCarte): self
    {
        $this->serviceCarte = $serviceCarte;

        return $this;
    }

    public function getServiceCarnet(): ?CarnetCheque
    {
        return $this->serviceCarnet;
    }

    public function setServiceCarnet(?CarnetCheque $serviceCarnet): self
    {
        $this->serviceCarnet = $serviceCarnet;

        return $this;
    }
}
