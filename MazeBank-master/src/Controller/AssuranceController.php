<?php

namespace App\Controller;

use App\Entity\Assurance;
use App\Form\AssuranceType;
use App\Repository\AssuranceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/assurance')]
class AssuranceController extends AbstractController
{
    #[Route('/back', name: 'app_assurance_index', methods: ['GET'])]
    public function index(AssuranceRepository $assuranceRepository): Response
    {
        return $this->render('assurance/index.html.twig', [
            'assurances' => $assuranceRepository->findAll(),
        ]);
    }

    #[Route('/front', name: 'app_assurance_index_front', methods: ['GET'])]
    public function index_front(AssuranceRepository $assuranceRepository): Response
    {
        return $this->render('assurance/index_front.html.twig', [
            'assurances' => $assuranceRepository->findAll(),
        ]);
    }


    #[Route('/new_front', name: 'app_assurance_new_front', methods: ['GET', 'POST'])]
    public function new_front(Request $request, AssuranceRepository $assuranceRepository): Response
    {
        $assurance = new Assurance();
        $form = $this->createForm(AssuranceType::class, $assurance);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $assuranceRepository->save($assurance, true);

            return $this->redirectToRoute('app_assurance_index_front', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('assurance/new_front.html.twig', [
            'assurance' => $assurance,
            'form' => $form,
        ]);
    }

    #[Route('/new', name: 'app_assurance_new', methods: ['GET', 'POST'])]
    public function new(Request $request, AssuranceRepository $assuranceRepository): Response
    {
        $assurance = new Assurance();
        $form = $this->createForm(AssuranceType::class, $assurance);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $assuranceRepository->save($assurance, true);

            return $this->redirectToRoute('app_assurance_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('assurance/new.html.twig', [
            'assurance' => $assurance,
            'form' => $form,
        ]);
    }

    
    #[Route('/{id}', name: 'app_assurance_show', methods: ['GET'])]
    public function show(Assurance $assurance): Response
    {
        return $this->render('assurance/show.html.twig', [
            'assurance' => $assurance,
        ]);
    }

    #[Route('/{id}/front', name: 'app_assurance_show_front', methods: ['GET'])]
    public function show_front(Assurance $assurance): Response
    {
        return $this->render('assurance/show_front.html.twig', [
            'assurance' => $assurance,
        ]);
    }


    #[Route('/{id}/edit/front', name: 'app_assurance_edit_front', methods: ['GET', 'POST'])]
    public function edit_front(Request $request, Assurance $assurance, AssuranceRepository $assuranceRepository): Response
    {
        $form = $this->createForm(AssuranceType::class, $assurance);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $assuranceRepository->save($assurance, true);

            return $this->redirectToRoute('app_assurance_index_front', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('assurance/edit_front.html.twig', [
            'assurance' => $assurance,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_assurance_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Assurance $assurance, AssuranceRepository $assuranceRepository): Response
    {
        $form = $this->createForm(AssuranceType::class, $assurance);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $assuranceRepository->save($assurance, true);

            return $this->redirectToRoute('app_assurance_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('assurance/edit.html.twig', [
            'assurance' => $assurance,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/front', name: 'app_assurance_delete_front', methods: ['POST'])]
    public function delete_front(Request $request, Assurance $assurance, AssuranceRepository $assuranceRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$assurance->getId(), $request->request->get('_token'))) {
            $assuranceRepository->remove($assurance, true);
        }

        return $this->redirectToRoute('app_assurance_index_front', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}', name: 'app_assurance_delete', methods: ['POST'])]
    public function delete(Request $request, Assurance $assurance, AssuranceRepository $assuranceRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$assurance->getId(), $request->request->get('_token'))) {
            $assuranceRepository->remove($assurance, true);
        }

        return $this->redirectToRoute('app_assurance_index', [], Response::HTTP_SEE_OTHER);
    }

    
}
