<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use App\Repository\ReclamationRepository;
use App\Repository\TypeReclamationRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Reclamation;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use App\Form\ReclamationType;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class HomeController extends AbstractController
{
    #[Route('/home', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    #[Route('/dashboard', name: 'app_dashboard')]
    public function dashboard(): Response
    {
        return $this->render('admin/dashboard.html.twig');
    }
    #[Route('/blog', name: 'app_blog')]
    public function blog(Security $security): Response
    {      
        if ($security->isGranted('ROLE_ADMIN')) {
            return $this->redirectToRoute('app_admin');
        }
        if ($security->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('app_user_dashboard');
        } 
        
        return $this->render('home/blog.html.twig');
    }

    #[Route('/user-dashboard', name: 'app_user_dashboard')]
    public function userDashboard(): Response
    {
        return $this->render('home/user_dashboard.html.twig');
    }

    #[Route('/admin', name: 'app_admin')]
    public function indexAdmin(): Response
    {
        return $this->render('admin/dashboard.html.twig', [
            'controller_name' => 'AdminController',
        ]);
    }

    #[Route('/offer', name: 'app_offer')]
    public function offer(): Response
    {
        return $this->render('home/offer.html.twig');
    }

    //Reclamation
    #[Route('/reclamation', name: 'app_reclamation')]
    public function reclamation(ReclamationRepository $repo, Security $security, AuthenticationUtils $authenticationUtils): Response
    {   
        
        if ($security->isGranted('ROLE_ADMIN')) {
            // $reclamations = $repo->findAll();
            $em = $this->getDoctrine()->getManager();
            $query = $em->createQuery
            (
                 'SELECT r, rt
                 FROM App:Reclamation r
                 JOIN r.TypeReclamation rt
                 '
            );
            $reclamations = $query->getResult();
            return $this->render('home/reclamation.html.twig',
    ['reclamations'=>$reclamations
    ]);
        }
        if ($security->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('app_user_dashboard');
        }
        $lastUsername = $authenticationUtils->getLastUsername();
        $error = $authenticationUtils->getLastAuthenticationError();
        // return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
        return $this->redirectToRoute('app_login');

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
    
    // public function add(ManagerRegistry $doctrine,Request $req): Response {
    //     $em = $doctrine->getManager();
    //     $student = new Student();
    //     $form = $this->createForm(StudentType::class,$student);
    //     $form->handleRequest($req);
    //     if($form->isSubmitted()){
    //         $em->persist($student);
    //         $em->flush();
    //         return $this->redirectToRoute('student_fetch');
    //     }
    //     //$club->setName('club test persist');
    //     //$club->setCreationDate(new \DateTime());
    //     return $this->renderForm('student/add.html.twig',['form'=>$form]);
    // }
    #[Route('/messages', name: 'app_messages')]
    public function messages(ManagerRegistry $doctrine,Request $req): Response
    {   $user = $this->getUser();
        $em = $doctrine->getManager();
        $reclamation = new Reclamation();
        $reclamation->setClientName($user);
        $form = $this->createForm(ReclamationType::class,$reclamation);
        $form->handleRequest($req);
        if($form->isSubmitted()){
            $em->persist($reclamation);
            $em->flush();
            return $this->redirectToRoute('app_messages');
        }
        return $this->renderForm('home/messages.html.twig', [
            'form' => $form
        ]);
    }
}
