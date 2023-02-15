<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\CategoryRepository;
use Doctrine\Persistence\ManagerRegistry;
class CategoryController extends AbstractController
{
    #[Route('/category', name: 'app_category')]
    public function index(): Response
    {
        return $this->render('category/index.html.twig', [
            'controller_name' => 'CategoryController',
        ]);
    }
    #[Route('category/all', name:'category_get_all')]
    public function getcategories(categoryRepository $repo):Response{
        $categories=$repo->findAll();
        return $this->render('category/categories.html.twig', [
            'categories'=> $categories
        ]);
    }
    #[Route('club/get/{name}', name: 'getname')]
    public function getName($name): Response
    {
        return $this->render('category/detail.html.twig', [
            'name' => $name,
        ]);
    }
    #[Route('addCategory/', name:'category_add')]
    public function new(Request $request,ManagerRegistry $doctrine): Response
    {
       
           $category = new Category();
           $form = $this->createForm(CategoryType::class,$category);
           $form->handleRequest($request);
           if($form->isSubmitted() && $form->isValid()) {
            $category = $form->getData();
            $entityManager = $doctrine->getManager();
            $repo=$doctrine->getRepository(Category::class);
            $entityManager->persist($category);
            $entityManager->flush();
            return $this->redirectToRoute('category_get_all');
           } 
           return $this->renderForm('category/addCategory.html.twig',['form' => $form]);
    }
    #[Route('editCategory/{id}', name:'category_edit')]
    public function edit(Request $request,ManagerRegistry $doctrine ,$id) {
        $category = new category();
        $category = $this->getDoctrine()->getRepository(category::class)->find($id);
       
        $form = $this->createForm(categoryType::class,$category);
       
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()) {
       
        $entityManager = $doctrine->getManager();
        $entityManager->flush();
       
        return $this->redirectToRoute('category_get_all');
        }
       
        return $this->render('category/editCategory.html.twig', ['form' =>
       $form->createView()]);
        }
    #[Route('removeCategory/{id}', name:'category_remove')]
    public function removecategory(ManagerRegistry $doctrine,$id):Response{

        $em=$doctrine->getManager();
        $repo=$doctrine->getRepository(Category::class);
        $category=$repo->find($id);
        $em->remove($category);
        $em->flush();
        return $this->redirectToRoute('category_get_all');
    
    }
}
