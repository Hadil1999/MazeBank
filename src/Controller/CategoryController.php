<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;
use App\Form\CategoryType;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\CategoryRepository;
use Doctrine\Persistence\ManagerRegistry;

class CategoryController extends AbstractController
{
    #[Route('/categories', name: 'categories')]
    public function getcategories(categoryRepository $repo):Response{
        $categories=$repo->findAll();
        return $this->render('category/categories.html.twig', [
            'categories'=> $categories
        ]);
    }

    #[Route('/addcategory', name: 'category_add')]
    public function new(Request $request,ManagerRegistry $doctrine): Response
    {
       
           $category = new Category();
           $form = $this->createForm(CategoryType::class,$category);
           $form->handleRequest($request);
           if($form->isSubmitted() && $form->isValid()) {
            $category = $form->getData();
            $entityManager = $doctrine->getManager();
            $repo=$doctrine->getRepository(Category::class);
            // dump($category);
            $entityManager->persist($category);
            $entityManager->flush();
            return $this->redirectToRoute('categories');
           } 
           return $this->renderForm('category/createCategory.html.twig',['form' => $form]);
    }

    #[Route('/editcategory/{id}', name: 'editcategory')]
    public function edit(Request $request,ManagerRegistry $doctrine ,$id) {
        $category = new category();
        $category = $this->getDoctrine()->getRepository(Category::class)->find($id);
       
        $form = $this->createForm(CategoryType::class,$category);
       
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()) {
       
        $entityManager = $doctrine->getManager();
        $entityManager->flush();
       
        return $this->redirectToRoute('categories');
        }
       
        return $this->render('category/editCategory.html.twig', ['form' =>$form->createView()]);
        }
    
    
    #[Route('removeCategory/{id}', name:'category_remove')]
    public function removecategory(ManagerRegistry $doctrine,$id):Response{

        $em=$doctrine->getManager();
        $repo=$doctrine->getRepository(Category::class);
        $category=$repo->find($id);
        $em->remove($category);
        $em->flush();
        return $this->redirectToRoute('categories');
    
    }
}

