<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ReclamationRepository;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Reclamation;
use Doctrine\Persistence\ManagerRegistry;
class ReclamationController extends AbstractController
{
   
    #[Route('/reclamation', name: 'app_reclamation')]
    public function reclamation(ReclamationRepository $repo): Response
    {
        $reclamations = $repo->findAll();
        return $this->render('reclamation/reclamation.html.twig',
    ['reclamations'=>$reclamations
    ]);
    }

    #[Route('/reclamation/remove/{id}', name: 'remove_reclamation')]
    public function removeReclamation(ManagerRegistry $doctrine,$id): Response
    {
        $em = $doctrine->getManager();
        $reclamation = $doctrine->getRepository(Reclamation::class)->find($id);
        
            $em->remove($reclamation);
            $em->flush();
            return $this->redirectToRoute('app_reclamation');
        
    }

   

}
