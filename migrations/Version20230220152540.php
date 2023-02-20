<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230220152540 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE service DROP FOREIGN KEY FK_E19D9AD230B1958B');
        $this->addSql('ALTER TABLE service DROP FOREIGN KEY FK_E19D9AD2A2B14F5C');
        $this->addSql('DROP TABLE service');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE service (id INT AUTO_INCREMENT NOT NULL, service_carte_id INT DEFAULT NULL, service_carnet_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_E19D9AD230B1958B (service_carte_id), UNIQUE INDEX UNIQ_E19D9AD2A2B14F5C (service_carnet_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE service ADD CONSTRAINT FK_E19D9AD230B1958B FOREIGN KEY (service_carte_id) REFERENCES carte_bancaire (id)');
        $this->addSql('ALTER TABLE service ADD CONSTRAINT FK_E19D9AD2A2B14F5C FOREIGN KEY (service_carnet_id) REFERENCES carnet_cheque (id)');
    }
}
