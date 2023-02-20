<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\BlogRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Form\BlogType;
use App\Entity\Blog;
use App\Entity\Category;
use App\Repository\CategoryRepository;
use Symfony\Component\String\Slugger\SluggerInterface;
use Doctrine\Persistence\ManagerRegistry;

class BlogController extends AbstractController
{
    #[Route('/blog', name: 'app_blog')]
    public function blog(BlogRepository $repo): Response
    { 
        $blogs = $repo->findAll();
        return $this->render('blog/blog.html.twig',
    ['blogs'=>$blogs
    ]);
    }

    #[Route('/actualite/details/{id}', name: 'details_blog')]
    public function details(ManagerRegistry $doctrine,CategoryRepository $repo,BlogRepository $repo1,$id): Response
    {
        $em = $doctrine->getManager();
        $blog = $doctrine->getRepository(Blog::class)->find($id);
        $categories = $repo->findAll();
        $blogs = $repo1->findAll();
            
        return $this->render('blog/details.html.twig', [
            'blog' => $blog,'categories' => $categories,'blogs'=>$blogs
        ]);
    }

    #[Route('/actualite', name: 'app_actualite')]
    public function actulite(BlogRepository $repo): Response
    { 
        $blogs = $repo->findAll();
        return $this->render('blog/actualite.html.twig',
        ['blogs'=>$blogs
        ]);
    }

    #[Route('/blog/remove/{id}', name: 'remove_blog')]
    public function remove(ManagerRegistry $doctrine,$id): Response
    {
        $em = $doctrine->getManager();
        $blog = $doctrine->getRepository(Blog::class)->find($id);
        
            $em->remove($blog);
            $em->flush();
            return $this->redirectToRoute('app_blog');
        
    }



   #[Route('/blog/update/{id}', name: 'update_blog')]
    public function update(ManagerRegistry $doctrine,Request $request, SluggerInterface $slugger,$id): Response
    {
        $em = $doctrine->getManager();
        $blog = $doctrine->getRepository(Blog::class)->find($id);
        $form = $this->createForm(BlogType::class, $blog);
        $form->handleRequest($request);
        if($form->isSubmitted()) {
            // $em->persist($blog);
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
                $blog->setPhoto($newFilename);
            }
            $em->flush();
            return $this->redirectToRoute('app_blog');
        }
        return $this->renderForm('blog/create.html.twig', [
            'form' => $form,
        ]);
    }

    #[Route('/blog/create', name: 'app_blog_create')]
    public function blogCreate(ManagerRegistry $doctrine,Request $request, SluggerInterface $slugger): Response
    {
        $em = $doctrine->getManager();
        $blog = new Blog();
        $form = $this->createForm(BlogType::class, $blog);
        $form->handleRequest($request);
        if($form->isSubmitted()) {
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
                $blog->setPhoto($newFilename);
            }
            $em->persist($blog);
            $em->flush();
            return $this->redirectToRoute('app_blog');
        }
        
        return $this->renderForm('blog/create.html.twig', [
            'form' => $form,
        ]);
    }


    #[Route('/blog/category/{id}', name: 'app_blog_category')]
    public function showBlogsByCategory($id): Response
    {
        $category = $this->getDoctrine()
            ->getRepository(Category::class)
            ->find($id);

        $blogs = $this->getDoctrine()
            ->getRepository(Blog::class)
            ->findBy(['category' => $category]);

        return $this->render('blog/category.html.twig', [
            'category' => $category,
            'blogs' => $blogs,
        ]);
    }
}
