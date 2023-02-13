<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230213151643 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE actualite (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE agence (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, nom VARCHAR(255) NOT NULL, INDEX IDX_64C19AA9A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE assurance (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE carnet_cheque (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE carte_bancaire (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE compte (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE credit (id INT AUTO_INCREMENT NOT NULL, credit_category_id INT DEFAULT NULL, INDEX IDX_1CC16EFE3E6C7BD2 (credit_category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE embauche (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE investissement (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE offre (id INT AUTO_INCREMENT NOT NULL, offre_embauche_id INT DEFAULT NULL, offre_investissement_id INT DEFAULT NULL, offre_assurance_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_AF86866F476A2296 (offre_embauche_id), UNIQUE INDEX UNIQ_AF86866F1D1FA5E9 (offre_investissement_id), UNIQUE INDEX UNIQ_AF86866F89ADCAA1 (offre_assurance_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reclamation (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, INDEX IDX_CE606404A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE service (id INT AUTO_INCREMENT NOT NULL, service_carte_id INT DEFAULT NULL, service_carnet_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_E19D9AD230B1958B (service_carte_id), UNIQUE INDEX UNIQ_E19D9AD2A2B14F5C (service_carnet_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE transaction (id INT AUTO_INCREMENT NOT NULL, compte_id INT DEFAULT NULL, INDEX IDX_723705D1F2C56620 (compte_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, date_naissance DATE NOT NULL, num_tel VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE agence ADD CONSTRAINT FK_64C19AA9A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE credit ADD CONSTRAINT FK_1CC16EFE3E6C7BD2 FOREIGN KEY (credit_category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE offre ADD CONSTRAINT FK_AF86866F476A2296 FOREIGN KEY (offre_embauche_id) REFERENCES embauche (id)');
        $this->addSql('ALTER TABLE offre ADD CONSTRAINT FK_AF86866F1D1FA5E9 FOREIGN KEY (offre_investissement_id) REFERENCES investissement (id)');
        $this->addSql('ALTER TABLE offre ADD CONSTRAINT FK_AF86866F89ADCAA1 FOREIGN KEY (offre_assurance_id) REFERENCES assurance (id)');
        $this->addSql('ALTER TABLE reclamation ADD CONSTRAINT FK_CE606404A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE service ADD CONSTRAINT FK_E19D9AD230B1958B FOREIGN KEY (service_carte_id) REFERENCES carte_bancaire (id)');
        $this->addSql('ALTER TABLE service ADD CONSTRAINT FK_E19D9AD2A2B14F5C FOREIGN KEY (service_carnet_id) REFERENCES carnet_cheque (id)');
        $this->addSql('ALTER TABLE transaction ADD CONSTRAINT FK_723705D1F2C56620 FOREIGN KEY (compte_id) REFERENCES compte (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agence DROP FOREIGN KEY FK_64C19AA9A76ED395');
        $this->addSql('ALTER TABLE credit DROP FOREIGN KEY FK_1CC16EFE3E6C7BD2');
        $this->addSql('ALTER TABLE offre DROP FOREIGN KEY FK_AF86866F476A2296');
        $this->addSql('ALTER TABLE offre DROP FOREIGN KEY FK_AF86866F1D1FA5E9');
        $this->addSql('ALTER TABLE offre DROP FOREIGN KEY FK_AF86866F89ADCAA1');
        $this->addSql('ALTER TABLE reclamation DROP FOREIGN KEY FK_CE606404A76ED395');
        $this->addSql('ALTER TABLE service DROP FOREIGN KEY FK_E19D9AD230B1958B');
        $this->addSql('ALTER TABLE service DROP FOREIGN KEY FK_E19D9AD2A2B14F5C');
        $this->addSql('ALTER TABLE transaction DROP FOREIGN KEY FK_723705D1F2C56620');
        $this->addSql('DROP TABLE actualite');
        $this->addSql('DROP TABLE agence');
        $this->addSql('DROP TABLE assurance');
        $this->addSql('DROP TABLE carnet_cheque');
        $this->addSql('DROP TABLE carte_bancaire');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE compte');
        $this->addSql('DROP TABLE credit');
        $this->addSql('DROP TABLE embauche');
        $this->addSql('DROP TABLE investissement');
        $this->addSql('DROP TABLE offre');
        $this->addSql('DROP TABLE reclamation');
        $this->addSql('DROP TABLE service');
        $this->addSql('DROP TABLE transaction');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
