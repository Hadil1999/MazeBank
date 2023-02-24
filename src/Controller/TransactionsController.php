<?php

namespace App\Controller;

use App\Entity\Transaction;
use App\Form\TransactionType;
use App\Form\SendMoneyType;
use App\Repository\TransactionRepository;
use App\Repository\AgenceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/transactions')]
class TransactionsController extends AbstractController
{
    
  #[Route('/wire_Transfer_Admin', name: 'admin_transactions_index', methods: ['GET'])]
  public function alltransactionAdmin(TransactionRepository $transactionRepository): Response
  {
      return $this->render('transactions/wireTransfer_Ad.html.twig', [          
          'transactions' => $transactionRepository->findAll(),
      ]);
  }
  #[Route('/Money_Request_Admin', name: 'moneyRequest_Ad', methods: ['GET'])]
    public function ALLMoneyRequest(TransactionRepository $transactionRepository): Response
    {
        return $this->render('transactions/moneyRequest_Ad.html.twig', [
            'transactions' => $transactionRepository->findAll(),
        ]);
    }

    /******** Wire Transfer *********/
    #[Route('/wire_Transfer', name: 'app_transactions_index', methods: ['GET'])]
    public function index(TransactionRepository $transactionRepository): Response
    {
        return $this->render('transactions/index.html.twig', [
            'typeTransaction'=>"Wire Transfer",
            'transactions' => $transactionRepository->findAll(),
        ]);
    }
  
    /*****History  */
    #[Route('/transferHistory', name: 'transfer_history', methods: ['GET'])]
    public function history(TransactionRepository $transactionRepository): Response
    {
        return $this->render('transactions/transferHistory.html.twig', [          
            'transactions' => $transactionRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_transactions_new', methods: ['GET', 'POST'])]
    public function new(Request $request, TransactionRepository $transactionRepository, AgenceRepository $agenceRepository): Response
    {
        $agences = $agenceRepository->findAll();
        $choices = [];
        foreach ($agences as $agence) {
            $choices[$agence->getNom()] = $agence->getNom();
        }
        $transaction = new Transaction();
        $date = new \DateTime('now');
        $transaction->setDate($date);
        $transaction->setStatue('in progress');
        $transaction->setTypeTransaction("Wire Transfer");

        $form = $this->createForm(TransactionType::class, $transaction,[
            'choices' => $choices,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
               

            $transactionRepository->save($transaction, true);

            return $this->redirectToRoute('app_transactions_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('transactions/new.html.twig', [
            'transaction' => $transaction,
            'form' => $form,
        ]);
    }

    /******* Send Money *******/
    #[Route('/send_money', name: 'send_transactions_sendMoney', methods: ['GET', 'POST'])]
    public function sendMony(Request $request, TransactionRepository $transactionRepository): Response
    {        
        $transaction = new Transaction();
        $date = new \DateTime('now');
        $transaction->setDate($date);        
        $transaction->setTypeTransaction("Send Money");
        $transaction->setAgenceName("no agence");
        $transaction->setStatue('valide');
        $form = $this->createForm(SendMoneyType::class, $transaction);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $transactionRepository->save($transaction, true);
            return $this->redirectToRoute('app_transactions_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('transactions/sendMoney.html.twig', [
            'transaction' => $transaction,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_transactions_show', methods: ['GET'])]
    public function show(Transaction $transaction): Response
    {
        return $this->render('transactions/show.html.twig', [
            'transaction' => $transaction,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_transactions_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Transaction $transaction, TransactionRepository $transactionRepository,AgenceRepository $agenceRepository): Response
    {
        $agences = $agenceRepository->findAll();
        $choices = [];
        foreach ($agences as $agence) {
            $choices[$agence->getNom()] = $agence->getNom();
        }
        $form = $this->createForm(TransactionType::class, $transaction,[
            'choices' => $choices,
        ]); 
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
           
            $transactionRepository->save($transaction, true);

            return $this->redirectToRoute('app_transactions_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('transactions/edit.html.twig', [
            'transaction' => $transaction,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_transactions_delete', methods: ['POST'])]
    public function delete(Request $request, Transaction $transaction, TransactionRepository $transactionRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$transaction->getId(), $request->request->get('_token'))) {
            $transactionRepository->remove($transaction, true);
        }

        return $this->redirectToRoute('app_transactions_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('accept/{id}', name: 'app_transactions_accept', methods: ['POST'])]
    public function accept(Request $request, Transaction $transaction, TransactionRepository $transactionRepository): Response
    {
        if ($this->isCsrfTokenValid('accept'.$transaction->getId(), $request->request->get('_token'))) {
              $transaction->setStatue('valide');             
              $transactionRepository->save($transaction, true);

        }

        return $this->redirectToRoute('admin_transactions_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('reject/{id}', name: 'app_transactions_reject', methods: ['POST'])]
    public function reject(Request $request, Transaction $transaction, TransactionRepository $transactionRepository): Response
    {
        if ($this->isCsrfTokenValid('reject'.$transaction->getId(), $request->request->get('_token'))) {
              $transaction->setStatue('rejected');
              $transactionRepository->save($transaction, true);

        }

        return $this->redirectToRoute('admin_transactions_index', [], Response::HTTP_SEE_OTHER);
    }


  /*****Admin********** */


  /****Admin********* */




}
