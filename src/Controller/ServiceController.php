<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ServiceController extends AbstractController
{
    #[Route('/services', name: 'services')]
    public function index(): Response
    {
        return $this->render('service/services.html.twig', [
            'controller_name' => 'ServiceController',
        ]);
    }
    #[Route('/createService', name: 'service_create')]
    public function create(): Response
    {
        return $this->render('service/create.html.twig', [
            'controller_name' => 'ServiceController',
        ]);
    }
    #[Route('/detailsService', name: 'service_details')]
    public function details(): Response
    {
        return $this->render('service/details.html.twig', [
            'controller_name' => 'ServiceController',
        ]);
    }
}
