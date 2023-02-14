<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TransactionController extends AbstractController
{
    #[Route('/transactions', name: 'transactions')]
    public function index(): Response
    {
        return $this->render('transaction/transactions.html.twig', [
            'controller_name' => 'TransactionController',
        ]);
    }

    #[Route('/detailsTransaction', name: 'transaction_details')]
    public function details(): Response
    {
        return $this->render('transaction/details.html.twig', [
            'controller_name' => 'TransactionController',
        ]);
    }

    #[Route('/createTransaction', name: 'transaction_create')]
    public function create(): Response
    {
        return $this->render('transaction/create.html.twig', [
            'controller_name' => 'TransactionController',
        ]);
    }
}
