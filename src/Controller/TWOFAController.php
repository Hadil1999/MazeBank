<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Scheb\TwoFactorBundle\Security\TwoFactor\Provider\TwoFactorFormRendererInterface;
use Symfony\Component\Form\FormView;

class TWOFAController implements TwoFactorFormRendererInterface
{
    #[Route('/t/w/o/f/a', name: 'app_t_w_o_f_a')]
    public function index(): Response
    {
        return $this->render('twofa/index.html.twig', [
            'controller_name' => 'TWOFAController',
        ]);
    }
    public function renderForm(Request $request, array $templateVars): Response
    {
        // Customize form rendering
    }
}
