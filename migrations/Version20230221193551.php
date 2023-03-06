<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230221193551 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE demande_credit (id INT AUTO_INCREMENT NOT NULL, credit_id_id INT DEFAULT NULL, user_id_id INT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', cin1 VARCHAR(255) NOT NULL, cin2 VARCHAR(255) NOT NULL, INDEX IDX_5E852811272B10F9 (credit_id_id), INDEX IDX_5E8528119D86650F (user_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE demande_credit ADD CONSTRAINT FK_5E852811272B10F9 FOREIGN KEY (credit_id_id) REFERENCES credit (id)');
        $this->addSql('ALTER TABLE demande_credit ADD CONSTRAINT FK_5E8528119D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE demande_credit DROP FOREIGN KEY FK_5E852811272B10F9');
        $this->addSql('ALTER TABLE demande_credit DROP FOREIGN KEY FK_5E8528119D86650F');
        $this->addSql('DROP TABLE demande_credit');
    }
}
