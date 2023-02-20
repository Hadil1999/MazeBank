<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Scheb\TwoFactorBundle\Security\TwoFactor\Provider\Google\GoogleAuthenticatorInterface;
use Scheb\TwoFactorBundle\Security\TwoFactor\Provider\TwoFactorFormRendererInterface;
use Symfony\Component\HttpFoundation\Request;

class AuthController extends AbstractController
{   
    public function generateSecretCode(GoogleAuthenticatorInterface $authenticator): Response
    {
        $user = $this->getUser(); // Replace with your user object
        
        $qrCodeContent = $authenticator->getQRContent($user);
        // Use $qrCodeContent to generate a QR code image or link to a QR code generator
        
        return $this->render('secret_code.html.twig', [
            'qrCodeContent' => $qrCodeContent,
        ]);
    }
    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils,): Response
    {
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }
        if ($this->isGranted('IS_AUTHENTICATED_FULLY')) {
            // User is already authenticated, redirect to the home page
            return $this->redirectToRoute('app_user_dashboard');
        }
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    #[Route(path: '/2fa', name: '2fa_login')]
    public function check2fa(GoogleAuthenticatorInterface $authenticator, TokenStorageInterface $storage)
    {
        $code = $authenticator->getQRContent($storage->getToken()->getUser());
        $qrCode = "http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=".$code;

        return $this->render('/security/2fa_login.html.twig', [
            'qrCode' => $qrCode
        ]);
    }
}
