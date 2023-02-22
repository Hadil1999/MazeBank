<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\AgenceRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Agence;
use Symfony\Component\String\Slugger\SluggerInterface;
use App\Form\AgenceType;

class AgenceController extends AbstractController
{
    #[Route('/agence', name: 'app_agence')]
    public function agence(AgenceRepository $repo): Response
    {
        $agences = $repo->findAll();
        return $this->render('agence/agence.html.twig',
    ['agences'=>$agences
    ]);
    }

    #[Route('/agence/remove/{id}', name: 'remove_agence')]
    public function removeAgence(ManagerRegistry $doctrine,$id): Response
    {
        $em = $doctrine->getManager();
        $agence = $doctrine->getRepository(Agence::class)->find($id);
        
            $em->remove($agence);
            $em->flush();
            return $this->redirectToRoute('app_agence');
        
    }

    #[Route('agence/create', name: 'app_agence_create')]
    public function agenceCreate(ManagerRegistry $doctrine,Request $request, SluggerInterface $slugger): Response
    {
        $em = $doctrine->getManager();
        $agence = new Agence();
        $form = $this->createForm(AgenceType::class, $agence);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()) {
            $photo = $form->get('photo')->getData();

            if ($photo) {
                $originalFilename = pathinfo($photo->getClientOriginalName(), PATHINFO_FILENAME);
                // this is needed to safely include the file name as part of the URL
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename.'-'.uniqid().'.'.$photo->guessExtension();

                // Move the file to the directory where brochures are stored
                try {
                    $photo->move(
                        $this->getParameter('photo_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                   
                }

                // updates the 'brochureFilename' property to store the PDF file name
                // instead of its contents
                $agence->setPhoto($newFilename);
            }
            $em->persist($agence);
            $em->flush();
            return $this->redirectToRoute('app_agence');
        }
        
        return $this->renderForm('agence/create.html.twig', [
            'form' => $form,
        ]);
    }

    #[Route('agence/update/{id}', name: 'update_agence')]
    public function updateAgence(ManagerRegistry $doctrine,Request $request, SluggerInterface $slugger,$id): Response
    {
        $em = $doctrine->getManager();
        $agence = $doctrine->getRepository(Agence::class)->find($id);
        $form = $this->createForm(AgenceType::class, $agence);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()) {
            // $em->persist($agence);
            $photo = $form->get('photo')->getData();

            if ($photo) {
                $originalFilename = pathinfo($photo->getClientOriginalName(), PATHINFO_FILENAME);
                // this is needed to safely include the file name as part of the URL
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename.'-'.uniqid().'.'.$photo->guessExtension();

                // Move the file to the directory where brochures are stored
                try {
                    $photo->move(
                        $this->getParameter('photo_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                   
                }

                // updates the 'brochureFilename' property to store the PDF file name
                // instead of its contents
                $agence->setPhoto($newFilename);
            }
            $em->flush();
            return $this->redirectToRoute('app_agence');
        }
        return $this->renderForm('agence/create.html.twig', [
            'form' => $form,
        ]);
    }


}
