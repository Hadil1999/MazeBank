<?php

namespace App\Entity;

use App\Repository\CarteBancaireRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CarteBancaireRepository::class)]
class CarteBancaire
{
    #[ORM\Id]
    #[ORM\Column]
    #[Assert\NotBlank(message:"id is required")]
    private ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
